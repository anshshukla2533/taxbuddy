from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.db import engine, Base
from backend.app.routes import auth

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="TAXBUDDY API",
    description="Tax management system with JWT authentication",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to TAXBUDDY API",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}