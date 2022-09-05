from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializer
# Create your views here.
from .models import Task

@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'list':'/task-list/',
        'Detail View': '/task-detail/<str:id>/',
        'Create': '/task-create/',
        'Update' : '/task-update/<str:id',
        'Delete' : '/task-delete/<str:id',
    }
    return Response(api_urls )

@api_view(['GET'])
def taskList(reqtust):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)    

    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(reqtust,id):
    tasks = Task.objects.get(id=id)
    serializer = TaskSerializer(tasks, many=False)    

    return Response(serializer.data)    

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()    

    return Response(serializer.data)   

@api_view(['POST'])
def taskUpdate(request,id):
    task = Task.objects.get(id=id)
    serializer = TaskSerializer(instance=task,data=request.data)

    if serializer.is_valid():
        serializer.save()    

    return Response(serializer.data)    

@api_view(['DELETE'])
def taskDelete(request,id):
    task = Task.objects.get(id=id)
    task.delete()    

    return Response("Item successfully deleted")         