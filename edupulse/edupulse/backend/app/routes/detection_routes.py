# backend/app/routes/detection_routes.py
from flask import Blueprint, request, jsonify

detection_bp = Blueprint('detection', __name__)

# Dummy state for instructor dashboard
_students = [
    {"id": 1, "name": "John Doe", "status": "attentive"},
    {"id": 2, "name": "Jane Smith", "status": "attentive"},
    {"id": 3, "name": "Ali Khan", "status": "distracted"},
]

@detection_bp.route('/status', methods=['POST'])
def status_check():
    data = request.get_json() or {}
    student_id = data.get('student_id')
    # placeholder: flip random or return attentive
    # For demo, return based on student_id parity
    if student_id and str(student_id).endswith('3'):
        status = 'distracted'
    else:
        status = 'attentive'
    # optionally log here
    return jsonify({"student_id": student_id, "status": status})

@detection_bp.route('/all', methods=['GET'])
def all_students():
    return jsonify(_students)

