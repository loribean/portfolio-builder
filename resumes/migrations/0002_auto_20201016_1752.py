# Generated by Django 3.1.2 on 2020-10-16 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resumes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='content',
            field=models.JSONField(),
        ),
    ]
