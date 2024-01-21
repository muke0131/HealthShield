from django.contrib import admin
from .models import Diabetes,HeartDisease

# Register your models here.
admin.site.register(Diabetes)
admin.site.register(HeartDisease)