from flask import Flask, Response, jsonify
from flask_cors import CORS
from video_stream import gen_frames
from detector import get_status
from log_manager import log_event

app = Flask(__name__)
CORS(app)

@app.route('/video')
def video():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/status')
def status():
    status = get_status()
    return jsonify({"status": status})

@app.route('/log')
def log():
    return jsonify(log_event())

if __name__ == '__main__':
    app.run(debug=True, port=5000)
