from django.db import models
from django.conf import settings
# Create your models here.
DEFAULT_ID = 1
class Resume(models.Model):
    title = models.CharField(max_length=120)
    content = models.JSONField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        default=DEFAULT_ID,
    )
    

    def __str__(self):
        return self.title
    