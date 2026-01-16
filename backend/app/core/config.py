from dotenv import load_dotenv
import os

load_dotenv()

# Algorithm for JWT
ALGORITHM = os.getenv("ALGORITHM") or "HS256"

# Access token expiration (in minutes)
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60))

# Secret key for JWT (generate with: openssl rand -hex 32)
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-change-this-in-production")

# MySQL Database Configuration
MYSQL_HOST = os.getenv("MYSQL_HOST", "localhost")
MYSQL_PORT = int(os.getenv("MYSQL_PORT", 3306))
MYSQL_USER = os.getenv("MYSQL_USER", "root")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD", "")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE", "taxbuddy")

# Database URL for SQLAlchemy
DATABASE_URL = f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DATABASE}"