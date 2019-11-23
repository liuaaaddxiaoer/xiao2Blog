from django.contrib.auth.models import User
from rest_framework import serializers

from blog.models import Article, Category, Tag

class TagSeralizer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class ArticleListSerializer(serializers.ModelSerializer):

    category = CategorySerializer()
    tags = TagSeralizer(many=True)

    class Meta:
        model = Article
        exclude = ['is_delete']