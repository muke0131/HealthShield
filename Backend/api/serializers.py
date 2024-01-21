from rest_framework import serializers
from .models import Diabetes,HeartDisease

class DiabetesSerializers(serializers.ModelSerializer):
    class Meta:
        model=Diabetes
        fields='__all__'

class HeartDiseaseSerializers(serializers.ModelSerializer):
    class Meta:
        model=HeartDisease
        fields='__all__'