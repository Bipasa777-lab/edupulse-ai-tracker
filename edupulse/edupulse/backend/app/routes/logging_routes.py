# backend/app/routes/logging_routes.py
from flask import Blueprint, request, jsonify
logging_bp = Blueprint('logging', __name__)

logs = []

@logging_bp.route('/log', methods=['POST'])
def add_log():
    data = request.get_json()
    logs.append(data)
    return jsonify({"ok": True}), 201

@logging_bp.route('/', methods=['GET'])
def get_logs():
    return jsonify(logs)

