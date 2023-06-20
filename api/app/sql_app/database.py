from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# 環境変数で管理すべき、rootユーザーを安易に使用しない
SQLALCHEMY_DATABASE_URL = "mysql://root:s2polwe7s@mysql:3306/trust-account-rate"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
