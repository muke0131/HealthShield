from . import views
from django.urls import path
urlpatterns = [
    path('predict/',views.predict,name='predict'),
    path('heartDisease_predict/',views.heartDiseasePredict,name='heartDiseasePredict')
]