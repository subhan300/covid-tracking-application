from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class MedicalData(models.Model):

    hospitalChoice = [
        ('Aga Khan','Agha Khan'),
        ('Liaquat National','Liaquat National'),
        ('Essa Lab','Essa Lab'),
        ('South City','South City'),

    ]
    fits = [
        ('Yes','Yes'),
        ('No','No'),
    ]
    Answer = [
        ('Yes','Yes'),
        ('No','No'),
    ]
    status = [
        ('Pending','Pending'),
        ('Positive','Positive'),
        ('Negative','Negative'),
    ]
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    user = models.ForeignKey(User,null=True,on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50)
    lastName= models.CharField(max_length=50)
    hospital = models.CharField(max_length=50,null=True,choices=hospitalChoice)
    Fits = models.CharField(max_length=50,null=True,choices=fits)
    Diabetes = models.CharField(max_length=50,null=True,choices=Answer)    
    Seizures = models.CharField(max_length=50,null=True,choices=Answer)    
    HIV = models.CharField(max_length=50,null=True,choices=Answer) 
    covidStatus = models.CharField(max_length=50,null=True,blank=True,default='Pending',choices=status)

    def __str__(self):

        return self.firstName
     
    

