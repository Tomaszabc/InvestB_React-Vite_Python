# Etap 1: Budowanie frontendu
FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Etap 2: Budowanie backendu
FROM python:3.11-slim AS backend
WORKDIR /app
COPY backend/ ./backend/
COPY --from=frontend-build /app/frontend/dist ./backend/static
RUN pip install --upgrade pip && pip install fastapi uvicorn

# Ustawienie katalogu roboczego na backend
WORKDIR /app/backend

# Uruchomienie aplikacji
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
