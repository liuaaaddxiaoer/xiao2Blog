# Generated by Django 2.2.7 on 2019-11-28 19:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20191123_1542'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['id']},
        ),
    ]