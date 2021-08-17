from django.db.models import fields
from rest_framework import serializers
from .models import MedicalData
from django.contrib.auth.models import User

from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model # If used custom user model


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):

        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model = User
        # Tuple of serialized model fields (see link [2])
        fields = ( "id", "username", "password", )
        extra_kwargs={'password':{'write_only':True , 'required':True}}


class MedicalDataSerializer(serializers.ModelSerializer):
    class Meta : 
        model = MedicalData
        fields = [
            'pk',
            'firstName',
            'lastName',
            'Age',
            'hospital',
            'Gender',
            'Diabetes',
            'Seizures',
            'HIV',
        ]

