from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Ścieżka do folderu z plikami frontendu
frontend_dist = os.path.join(os.path.dirname(__file__), "static")

# Serwowanie plików statycznych (React build)
app.mount("/", StaticFiles(directory=frontend_dist, html=True), name="static")
