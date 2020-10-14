from rest_framework.generics import ListAPIView,RetrieveAPIView
from resumes.models import Resume
from .serializers import ResumeSerializer

class ResumeListView(ListAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

class ResumeDetailView(RetrieveAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer