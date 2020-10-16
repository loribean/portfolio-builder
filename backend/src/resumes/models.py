from django.db import models

# Create your models here.

class Resume(models.Model):
    title = models.CharField(max_length=120)
    content = models.JSONField()
    

    def __str__(self):
        return self.title
    