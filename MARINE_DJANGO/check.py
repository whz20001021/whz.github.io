# import pymysql
from app01.models import account

def orm(request):
        data_list=account.objects.all()
        # data_list=account.objects.filter(id=1)
        # obj=account.objects.filter(id=1).first()
        for obj in data_list:
            print(obj.id,obj.account,obj.password,obj.email)



# # 1.连接mysql
# conn = pymysql.connect(host="127.0.0.1",port=3306,user='root',passwd="123",charset='utf8',db='marine')
# cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

# # 2.发送指令 
# cursor.execute("select * from app01_account")
# data_list = cursor.fetchall()

# print("app01_account表中的数据如下")
# print(data_list) 

# print("app01_account表中的各行数据如下")
# for row_dict in data_list:
#     print(row_dict)


# # 3.关闭
# cursor.close()
# conn.close()