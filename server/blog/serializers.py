from django.contrib.auth.models import User
from rest_framework import serializers

from blog.models import Article, Category, Tag

class TagSeralizer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    articles = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    def get_articles(self, obj):
        return ArticleListSerializer(obj.category.all(), many=True).data

class ArticleListSerializer(serializers.ModelSerializer):

    created_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    category = serializers.CharField(source='category.name')
    tags = TagSeralizer(many=True)

    class Meta:
        model = Article
        exclude = ['is_delete']