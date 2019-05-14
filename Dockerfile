From python:3.7stretch
COPY ./app /app

RUN pip3 install uvicorn fastapi[all]

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]