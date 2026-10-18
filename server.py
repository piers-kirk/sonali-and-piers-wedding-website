import http.server
import socketserver
import webbrowser
import threading
import os

PORT = 8000

# Always serve files from the directory containing this script.
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


def open_browser():
    webbrowser.open(f"http://localhost:{PORT}")


try:
    with ReusableTCPServer(("", PORT), Handler) as httpd:
        print()
        print("Sonali & Piers Wedding Website")
        print("--------------------------------")
        print(f"Server running at http://localhost:{PORT}")
        print("Press Ctrl+C to stop the server.")
        print()

        # Open the website automatically after the server starts.
        threading.Timer(0.5, open_browser).start()

        httpd.serve_forever()

except KeyboardInterrupt:
    print()
    print("Stopping server...")
    print("Server stopped.")