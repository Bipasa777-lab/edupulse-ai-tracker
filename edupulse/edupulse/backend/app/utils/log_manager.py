# log_manager.py

from datetime import datetime

# In-memory log storage (replace with DB or file for production)
log_data = []

def log_event(status: str = "focused"):
    """
    Logs the current attentiveness status with a timestamp.

    Args:
        status (str): The attentiveness status, e.g., 'focused' or 'distracted'

    Returns:
        dict: The logged event
    """
    event = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "status": status
    }
    log_data.append(event)
    return event

def get_logs():
    """
    Returns all logged events.

    Returns:
        list: List of engagement events
    """
    return log_data
