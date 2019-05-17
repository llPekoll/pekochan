From python:3.7-stretch

COPY ./app /app

WORKDIR /app
RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]