from django.shortcuts import redirect, render ,HttpResponse 
import register
# Create your views here.




def index(request):
    return HttpResponse("欢迎使用")

#TODO :从数据库获取数据
def screen(request):
    # count1 = "1"
    # count2 = ["1","2","3","4","5","6","7","8"]
    count3 = {"已入库数":1,"测区类型数":2,"测量方法数量":3,"取样方式数量":4,"经度最大":5,"纬度最大":6,"经度最小":7,"纬度最小":8,}
    table = [
        {"测点":"测点1","入库时间":"2021-10-03","测点类型":"沉积物","所在测区":"zone1"},
        {"测点":"测点2","入库时间":"2021-10-04","测点类型":"沉积物","所在测区":"zone2"},
        {"测点":"测点3","入库时间":"2021-10-05","测点类型":"沉积物","所在测区":"zone3"},
        {"测点":"测点4","入库时间":"2021-10-06","测点类型":"沉积物","所在测区":"zone4"},
        {"测点":"测点5","入库时间":"2021-10-07","测点类型":"沉积物","所在测区":"zone5"},
        {"测点":"测点6","入库时间":"2021-10-08","测点类型":"沉积物","所在测区":"zone6"},
        {"测点":"测点7","入库时间":"2021-10-09","测点类型":"沉积物","所在测区":"zone7"},
        {"测点":"测点8","入库时间":"2021-10-10","测点类型":"沉积物","所在测区":"zone8"},
        {"测点":"测点9","入库时间":"2021-10-11","测点类型":"沉积物","所在测区":"zone9"},
        {"测点":"测点10","入库时间":"2021-10-12","测点类型":"沉积物","所在测区":"zone10"},
        {"测点":"测点11","入库时间":"2021-10-13","测点类型":"沉积物","所在测区":"zone11"},
        {"测点":"测点12","入库时间":"2021-10-14","测点类型":"沉积物","所在测区":"zone12"},
        {"测点":"测点13","入库时间":"2021-10-15","测点类型":"沉积物","所在测区":"zone13"},
        {"测点":"测点14","入库时间":"2021-10-16","测点类型":"沉积物","所在测区":"zone14"},
        {"测点":"测点15","入库时间":"2021-10-17","测点类型":"沉积物","所在测区":"zone15"},
        {"测点":"测点16","入库时间":"2021-10-18","测点类型":"沉积物","所在测区":"zone16"},
    ]
    return render(request,"screen.html",{"count3":count3,"table":table})


def map(request):
    return render(request,"map.html")    

# def news(request):
    # 定义一些新闻字典或列表
    # 向网络地址发送请求
    # 第三方模块:requests(pip install requests)
    # import requests 
    # res = requests.get("https://www.chinaunicom.cn/api/article/NewsByIndex/2/2022/07/news")
    # data_list = res.json()
    # print (res.text)
    # return render(request,"news.html")    

def something(request):
    # request是一个对象，封装了用户通过浏览器发送过来的所有数据

    # 1.获取请求方式
    print(request.method)

    # 2.获取在URL上传递的值 
    print(request.GET)

    # 3.获取在请求体中提交的数据
    print(request.POST)


    # 4.HttpResponse("返回请求")，内容字符串内容返回给请求者
    return HttpResponse ("返回内容")

    # 5.将页面返回给请求者
    return render (request,"something.html",{"title":"来了"})

    # 6.页面重定向响应（直接返回网址，与本网站无关）
    return redirect ("https://www.baidu.com")

def login (request):
    # count1 = "1"
    # count2 = ["1","2","3","4","5","6","7","8"]
    count3 = {"已入库数":1,"测区类型数":2,"测量方法数量":3,"取样方式数量":4,"经度最大":5,"纬度最大":6,"经度最小":7,"纬度最小":8,}
    table = [
        {"测点":"测点1","入库时间":"2021-10-03","测点类型":"沉积物","所在测区":"zone1"},
        {"测点":"测点2","入库时间":"2021-10-04","测点类型":"沉积物","所在测区":"zone2"},
        {"测点":"测点3","入库时间":"2021-10-05","测点类型":"沉积物","所在测区":"zone3"},
        {"测点":"测点4","入库时间":"2021-10-06","测点类型":"沉积物","所在测区":"zone4"},
        {"测点":"测点5","入库时间":"2021-10-07","测点类型":"沉积物","所在测区":"zone5"},
        {"测点":"测点6","入库时间":"2021-10-08","测点类型":"沉积物","所在测区":"zone6"},
        {"测点":"测点7","入库时间":"2021-10-09","测点类型":"沉积物","所在测区":"zone7"},
        {"测点":"测点8","入库时间":"2021-10-10","测点类型":"沉积物","所在测区":"zone8"},
        {"测点":"测点9","入库时间":"2021-10-11","测点类型":"沉积物","所在测区":"zone9"},
        {"测点":"测点10","入库时间":"2021-10-12","测点类型":"沉积物","所在测区":"zone10"},
        {"测点":"测点11","入库时间":"2021-10-13","测点类型":"沉积物","所在测区":"zone11"},
        {"测点":"测点12","入库时间":"2021-10-14","测点类型":"沉积物","所在测区":"zone12"},
        {"测点":"测点13","入库时间":"2021-10-15","测点类型":"沉积物","所在测区":"zone13"},
        {"测点":"测点14","入库时间":"2021-10-16","测点类型":"沉积物","所在测区":"zone14"},
        {"测点":"测点15","入库时间":"2021-10-17","测点类型":"沉积物","所在测区":"zone15"},
        {"测点":"测点16","入库时间":"2021-10-18","测点类型":"沉积物","所在测区":"zone16"},
    ]
    if request.method == "GET":
        return render(request,"login.html",{"erro_msg":""})
    
    #如果是POST请求，获取用户提交的数据
    print(request.POST)
    username = request.POST.get("user")
    password = request.POST.get("pwd")
    username_reg = request.POST.get("username_reg")
    password_reg1 = request.POST.get("password_reg1")
    password_reg2 = request.POST.get("password_reg2")
    email = request.POST.get("email")
    print(request.POST.get("username"))
#TODO :完善登录机制
    if username :
        if username == "whz" and password == "123":
            return render(request,"screen.html",{"count3":count3,"table":table})
        return render(request,'login.html',{"erro_msg":"用户名或密码错误"})
        # return redirect ("http://127.0.0.1:8000/screen/")
        
#TODO :完善注册机制,把密码判断移动至js
    else:
        if password_reg1==password_reg2:
            register.orm(username_reg,password_reg1,password_reg2,email)
            return render(request,'login.html',{"erro_msg":"注册成功，可以登录了"})
  

