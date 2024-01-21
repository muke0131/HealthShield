from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
import joblib
import os
from .serializers import DiabetesSerializers,HeartDiseaseSerializers
# Create your views here.
model_path=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','Model','trained_model.pkl')
scaler_path=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','Model','scaler.pkl')
heart_disease_model_path=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','Model','Heart_Disease_model.pkl')


model=joblib.load(model_path)
scaler=joblib.load(scaler_path)
heart_model=joblib.load(heart_disease_model_path)

@api_view(['POST'])
def predict(request):

    if request.method=='POST':
        serializer=DiabetesSerializers(data=request.data)
        if serializer.is_valid():
            input_data=tuple(serializer.validated_data.values())
            input_data_as_numpy_array=np.asarray(input_data)
            input_data_reshaped=input_data_as_numpy_array.reshape(1,-1)
            global std_data
            std_data = scaler.transform(input_data_reshaped)
            print(std_data)

            prediction=model.predict(std_data)
            print("Prediction=",prediction)
            return Response(prediction)
        else:
            print("request :",request.data)
            return Response(0)
        
@api_view(['POST'])
def heartDiseasePredict(request):
    if request.method=='POST':
        serializer=HeartDiseaseSerializers(data=request.data)
        if serializer.is_valid():
            input_data=tuple(serializer.validated_data.values())
            input_data_as_numpy_array=np.asarray(input_data)
            input_data_reshaped=input_data_as_numpy_array.reshape(1,-1)
            # global std_data
            # std_data = scaler.transform(input_data_reshaped)
            # print(std_data)

            prediction=heart_model.predict(input_data_reshaped)
            print("request:",request.data)
            print("Prediction=",prediction)
            return Response(prediction)
        else:
            print("request :",request.data)
            return Response(0)

            
        