# backend/app/__init__.py
# Empty file - makes app directory a Python package

# backend/app/api/__init__.py
# Empty file - makes api directory a Python package

# backend/app/core/__init__.py
# Empty file - makes core directory a Python package

# backend/app/db/__init__.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from backend.app.core.config import DATABASE_URL

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=3600,
    echo=False
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# backend/app/models/__init__.py
from backend.app.models.user import User

__all__ = ["User"]

# backend/app/routes/__init__.py
# Empty file - makes routes directory a Python package

# backend/app/schemas/__init__.py
# Empty file - makes schemas directory a Python package