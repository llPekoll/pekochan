From python:3.7stretch

COPY ./app /app

WORKDIR /app
RUN pip install -r requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]