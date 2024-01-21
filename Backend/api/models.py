from django.db import models

# Create your models here.

class Diabetes(models.Model):
    

    Pregnancies=models.IntegerField()
    Glucose=models.IntegerField()
    BloodPressure=models.IntegerField()
    SkinThickness=models.IntegerField()
    Insulin=models.IntegerField()
    BMI=models.FloatField()
    DiabetesPedigreeFunction=models.FloatField()
    Age=models.IntegerField()
    # Outcome=models.IntegerField(choices=((1,"Diabetic"),(0,"Non-Diabetic")))

class HeartDisease(models.Model):
    age=models.IntegerField()
    sex=models.IntegerField()
    cp=models.IntegerField()
    trestbps=models.IntegerField()
    chol=models.IntegerField()
    fbs=models.IntegerField()
    restecg=models.IntegerField()
    thalach=models.IntegerField()
    exang=models.IntegerField()
    oldpeak=models.FloatField()
    slope=models.IntegerField()
    ca=models.IntegerField()
    thal=models.IntegerField()