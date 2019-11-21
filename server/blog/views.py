from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework import viewsets
from django.db.models import Q

from blog.models import Test

from blog.serializers import UserSerializer, TestSerializer

from rest_framework.renderers import JSONRenderer


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


def index(request):

    objs = Test.objects.all().filter(Q(id__exact=1) | ~Q(name='ok'))


    test = TestSerializer(objs, many=True)


    print(test)

    return JsonResponse({
        'code': 200,
        'msg': 'Ok',
        'data': test.data
    }, safe=False)

