import cv2

def gen_frames():
    cap = cv2.VideoCapture(0)  # Open the default webcam

    while True:
        success, frame = cap.read()  # Read a frame from the webcam
        if not success:
            break
        else:
            # Encode frame as JPEG
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()

            # Yield frame as HTTP multipart stream
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
