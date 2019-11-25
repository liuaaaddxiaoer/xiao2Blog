from django.urls import path, re_path
from blog.views import CreateArticle, ArticleList, CategoryList

urlpatterns = [
    path('createArticle/l', CreateArticle.as_view()),  # 创建/更新文章
    re_path('articleList/?', ArticleList.as_view()),  # 获取文章列表
    re_path('categoryList/?', CategoryList.as_view()),  # 获取文章列表
]