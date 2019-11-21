from django.contrib.auth.models import User
from rest_framework import serializers

from blog.models import Test


class UserSerializer(serializers.HyperlinkedModelSerializer):


    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class TestSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Test
        fields = ['id', 'name']
