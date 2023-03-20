from django.db import models
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'MARINE_DJANGO.settings'

# Create your models here.
# class UserInfo(models.Model):
#     account = models.CharField(max_length=32)
#     password = models.CharField(max_length=64)
#     email = models.CharField(max_length=64)

class account(models.Model):
    account = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    # data = models.IntegerField(null=True,blank=True)
 

# 新建数据  相当于 insert into app01_account(password)values("123")
# account.objects.create(password="123")
# 新建数据  相当于 insert into app01_account(account,password,email)values("123","17857308424"，"2395918245@qq.com")
# account.objects.create(account="17857308424",password="123",email="2395918245@qq.com")
