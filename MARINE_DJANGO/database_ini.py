import pymysql

# 1.连接mysql
conn = pymysql.connect(host="127.0.0.1",port=3306,user='root',passwd="123",charset='utf8',db='marine')
cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

# 2.发送指令 写死
# cursor.execute("insert into app01_account(account,password,email) values('17857308424','123','2395918245@qq.com')")
# conn.commit()

# 2.发送指令 占位
# sql = "insert into app01_account(account,password,email) values(%s,%s,%s)"
# cursor.execute(sql,["17857308424","123","2395918245@qq.com"])
# conn.commit()

# 2.发送指令 变量占位
sql = "insert into app01_account(account,password,email) values(%(n1)s,%(n2)s,%(n3)s)"
cursor.execute(sql,{"n1":"17857308424","n2":"123","n3":"2395918245@qq.com"})
conn.commit()

# 3.关闭
cursor.close()
conn.close()