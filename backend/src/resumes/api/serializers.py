from rest_framework import serializers
from resumes.models import Resume,Comment


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ('id','title','content','user')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('resume','name','userid','body','created_on')




