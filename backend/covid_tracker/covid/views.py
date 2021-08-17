from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
# Create your views here.
from .models import MedicalData
from .serializers import MedicalDataSerializer, UserSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView

from django.contrib.auth.models import User

from django.contrib.auth import get_user_model # If used custom user model

from .serializers import UserSerializer


class CreateUserView(CreateAPIView):

    model =User.objects.all()
    
    serializer_class = UserSerializer

class MedicalDataList(generics.CreateAPIView):
    queryset = MedicalData.objects.all()
    serializer_class = MedicalDataSerializer


class MedicalDataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MedicalData.objects.all()
    serializer_class = MedicalDataSerializer


