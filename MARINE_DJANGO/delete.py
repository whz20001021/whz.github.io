# import pymysql
from app01.models import account

def orm(request):
    account.objects.all().delete()
    # account.objects.filter(id=1).delete()


# # 1.连接mysql
# conn = pymysql.connect(host="127.0.0.1",port=3306,user='root',passwd="123",charset='utf8',db='marine')
# cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

# # 2.发送指令 传入
# cursor.execute("delete from app01_account where account=%s",[17857308424,])
# conn.commit()

# # 3.关闭
# cursor.close()
# conn.close()