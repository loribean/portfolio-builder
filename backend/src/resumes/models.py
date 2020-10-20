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

class Comment(models.Model):
    resume = models.ForeignKey(Resume,on_delete=models.CASCADE,related_name='comments')
    name = models.CharField(max_length=80,default=DEFAULT_ID)
    userid = models.CharField(max_length=50,default=DEFAULT_ID)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Comment {} by {}'.format(self.body, self.name)