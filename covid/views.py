from django.db import models
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

from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework import serializers
from .serializers import  AuthTokenSerializer
from .serializers import UserSerializer
from rest_framework import generics, authentication, permissions



class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""
    model = User.objects.all()
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for the user"""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage the authenticated user"""
    serializer_class = UserSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user  
          



class MedicalDataList(generics.CreateAPIView):
    queryset = MedicalData.objects.all()
    serializer_class = MedicalDataSerializer


class MedicalDataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MedicalData.objects.all()
    serializer_class = MedicalDataSerializer


