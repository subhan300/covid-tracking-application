# Generated by Django 3.2 on 2021-08-16 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0002_auto_20210816_0449'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicaldata',
            name='Age',
            field=models.IntegerField(null=True),
        ),
    ]
