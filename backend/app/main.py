from fastapi import FastAPI

app = FastAPI(title="TaxBuddy API")

@app.get("/")
def root():
    return {"message": "TaxBuddy backend running 🚀"}
