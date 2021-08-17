# Generated by Django 3.2 on 2021-08-16 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicaldata',
            name='Diabetes',
            field=models.CharField(choices=[('Yes', 'Yes'), ('No', 'No')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='medicaldata',
            name='HIV',
            field=models.CharField(choices=[('Yes', 'Yes'), ('No', 'No')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='medicaldata',
            name='Seizures',
            field=models.CharField(choices=[('Yes', 'Yes'), ('No', 'No')], max_length=20, null=True),
        ),
    ]
