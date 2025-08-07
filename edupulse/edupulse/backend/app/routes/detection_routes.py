from flask import Blueprint, Response, jsonify
from app.services.video_stream import gen_frames
from app.services.alert_engine import get_status

# Create a blueprint for detection-related routes
detection_bp = Blueprint('detection_bp', __name__)

@detection_bp.route('/video')
def video():
    # Streams the webcam feed using multipart/x-mixed-replace
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@detection_bp.route('/status')
def status():
    # Returns current attentiveness status (e.g., "focused", "distracted")
    status = get_status()
    return jsonify({"status": status})
