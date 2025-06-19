from datetime import datetime
import random

def log_event():
    return {
        "student": "anonymous",
        "status": random.choice(["live", "spoof", "inactive"]),
        "timestamp": datetime.now().isoformat()
    }
