# import pymysql
from app01.models import account

def orm(username_reg,password_reg1,password_reg2,email):
        account.objects.create(account=username_reg,password=password_reg1,email=email)
        # account.objects.all().delete()
    
# account = "17857308424"
# password = "123"
# email = "2395918245@qq.com"

# # 1.连接mysql
# conn = pymysql.connect(host="127.0.0.1",port=3306,user='root',passwd="123",charset='utf8',db='marine')
# cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

# # 2.发送指令 传入
# sql = "insert into app01_account(account,password,email) values(%s,%s,%s)"
# cursor.execute(sql,[account,password,email])
# conn.commit()

# # 3.关闭
# cursor.close()
# conn.close()