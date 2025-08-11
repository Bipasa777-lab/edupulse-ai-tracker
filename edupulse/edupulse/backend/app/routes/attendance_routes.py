# backend/app/routes/attendance_routes.py
from flask import Blueprint, jsonify, request
attendance_bp = Blueprint('attendance', __name__)

attendance_db = [
    {"id": 1, "name": "John Doe", "timestamp": "2025-08-09T10:30:00"},
    {"id": 2, "name": "Jane Smith", "timestamp": "2025-08-09T11:00:00"}
]

@attendance_bp.route('/attendance', methods=['GET'])
def get_attendance():
    return jsonify(attendance_db)

@attendance_bp.route('/attendance', methods=['POST'])
def add_attendance():
    data = request.get_json()
    new = {"id": len(attendance_db)+1, "name": data.get('name'), "timestamp": data.get('timestamp')}
    attendance_db.append(new)
    return jsonify(new), 201
