from django.db.models import fields
from rest_framework import serializers
from .models import MedicalData
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model 
from django.utils.translation import ugettext_lazy as _
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):

        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model = User
        # Tuple of serialized model fields (see link [2])
        fields = ( "id","username", "password", )
        extra_kwargs={'password':{'write_only':True , 'required':True}}

class AuthTokenSerializer(serializers.Serializer):
    """Serializer for User Authentication""" 
    username = serializers.CharField()
    password = serializers.CharField(
        style = {'input_type':'password'},
        trim_whitespace = False
    )

    def validate(self, attrs):
        """Validate And Authenticate The User"""
        username = attrs.get('username')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username = username ,
            password = password
        )      

        if not user :
            msg = {'Unable to authenticate'}

            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs



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

