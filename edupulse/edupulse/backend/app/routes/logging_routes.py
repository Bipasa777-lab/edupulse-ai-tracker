from flask import Blueprint, jsonify
from app.utils.log_manager import log_event,get_logs
# Create a blueprint for logging-related routes
logging_bp = Blueprint('logging_bp', __name__)

@logging_bp.route('/')
def log():
    # Returns the current engagement log or latest event
    return jsonify(log_event("distracted"))
@logging_bp.route('/all')
def all_logs():
    return jsonify(get_logs())

