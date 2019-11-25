from rest_framework.views import APIView
from blog.models import Article, Category, Tag
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from blog.serializers import ArticleListSerializer, CategorySerializer


class Page(PageNumberPagination):
    page_size = 10
    page_query_param = 'page'
    page_size_query_param = 'pagesize'


def my_response(data=[], code=0, msg='请求成功', **kwargs):
    return Response({
        'code': code,
        'msg': msg,
        'data': data,
        **kwargs
    })

class CreateArticle(APIView):
    """
    id 更新文章
    发布文章
    """
    def get(self, request):
        return self.post(request)

    def post(self, request):

        post = request.POST
        has_id = False if post.get('id', None) is None else True

        try:
            category = Category.objects.get_or_create(name=post['category'])[0]

            defaults = {
                'title': post['title'],
                'content': post['content'],
                'url': None if post.get('url', None) == '' else post.get('url', None),
                'desc': post.get('desc', post['content'][0:100]),
                'category': category
            }

            article = Article.objects.update_or_create(defaults=defaults, title=post['title'])[0]
            tags = post.get('tags', None)

            if tags:
                tags = tags.split(',')
                for tag in tags:
                    tag = Tag.objects.get_or_create(name=tag)[0]
                    article.tags.add(tag)

            return Response({
                'code': 0,
                'msg': '创建成功' if has_id is False else '更新成功',
                'data': []
            })

        except Exception as err:
            return Response({
                'code': -1,
                'msg': err,
                'data': []
            })


class ArticleList(APIView):

    def get(self, request):
        return self.post(request)

    """
    文章列表
    """
    def post(self, request):

        post_data = request.POST

        # 判断是否是某个分类下的文章列表
        category = post_data.get('category', None)

        page_size = post_data.get('pagesize', 10)

        articleQuerySet = Article.objects.filter(is_delete=False, category__name=category) if category else Article.objects.filter(is_delete=False)

        page = Page()
        page.page_size = page_size
        try:
            filterSet = page.paginate_queryset(articleQuerySet, request, self)
            serias = ArticleListSerializer(filterSet, many=True)
            return my_response(serias.data, has_more=True if page.get_next_link() is not None else False)
        except Exception as err:
            return my_response(code=-1, msg=err.default_detail)

class CategoryList(APIView):

    def get(self, request):
        return self.post(request)

    """
    获取文章分类
    """
    def post(self, request):
        categorys = Category.objects.all()

        serias = CategorySerializer(categorys, many=True)
        print(serias.data)

        return Response(serias.data)

