function fontSize(res){
	let docEl = document.documentElement,
		clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if (!clientWidth) return;
	let fontSize = 80 * (clientWidth / 1920);
	return res*fontSize;
}

//各测区数量
(function () {
// 1. 实例化对象
var myChart = echarts.init(document.querySelector(".pie1  .chart"));
// 2. 指定配置项和数据
var option = {
// 图例
  legend: {
    type: 'scroll',//滚动图例
    pageIconColor: "#aaa",//翻页有效时颜色
    pageIconInactiveColor:'#aaa',//翻页无效时颜色
    pageTextStyle:{//页码样式
      color:"#000",
      fontSize:fontSize(0.2)
    },
    pageButtonPosition: 'end',//翻页按钮位置
    pageIconSize:fontSize(0.26),
    top: "80%",
    itemWidth: fontSize(0.2),
    itemHeight: fontSize(0.2),
    padding: 5,
    textStyle: {
      color:[
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff"
      ],
      fontSize: fontSize(0.2)
    }
  },
  //提示框组件
  tooltip: {
    trigger: "item",
    formatter: "{b}({d}%)"
  },
  // 注意颜色写的位置
  color: [
    "#006cff",
    "#60cda0",
    "#ed8884",
    "#ff9f7f",
    "#0096ff",
    "#9fe6b8",
    "#32c5e9",
    "#1d9dff"
  ],
  series: [
    {
      name: "",
      type: "pie",
      // 如果radius是百分比则必须加引号
      radius: ["10%", "80%"],
      center: ["50%", "42%"],
      roseType: "radius",
      data: [
        { value: 20, name: "测区1" },
        { value: 26, name: "测区2" },
        { value: 24, name: "测区3" },
        { value: 25, name: "测区4" },
        { value: 20, name: "测区5" },
        { value: 25, name: "测区6" },
        { value: 30, name: "测区7" },
        { value: 32, name: "测区8" }
      ],
      label:{
        // show:false,
        position:"inside",
        formatter: "{c}"
      },
    }
  ]
};

// 3. 配置项和数据给我们的实例化对象
myChart.setOption(option);
// 4. 当我们浏览器缩放的时候，图表也等比例缩放
window.addEventListener("resize", function () {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
});
})();

//本月完成测点数趋势折线图
(function () {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.querySelector(".line1 .chart"));

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#dddc6b"
      }
    }
  },
  legend: {
    top: "0%",
    right:"0%",
    itemWidth: fontSize(0.4),
    itemHeight: fontSize(0.25),
    textStyle: {
      color: "rgba(0,0,0,.5)",
      fontSize: fontSize(0.25)
    }
  },
  grid: {
    left: "5%",
    top: "15%",
    right: "5%",
    bottom: "5%",
    containLabel: true
  },

  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: "rgba(0,0,0,.6)",
          fontSize: fontSize(0.16)
        }
      },
      axisLine: {
        lineStyle: {
          color: "rgba(0,0,0,.2)"
        }
      },

      data: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30"
      ]
    },
    {
      axisPointer: { show: false },
      axisLine: { show: false },
      position: "bottom",
      offset: 20
    }
  ],

  yAxis: [
    {
      type: "value",
      axisTick: { show: true },
      axisLine: {
        lineStyle: {
          color: "rgba(0,0,0,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(0,0,0,.6)",
          fontSize: fontSize(0.15)
        }
      },

      splitLine: {
        lineStyle: {
          color: "rgba(0,0,0,.1)"
        }
      }
    }
  ],
  series: [
    {
      name: "日新增",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: fontSize(0.1),
      showSymbol: false,
      lineStyle: {
        normal: {
          color: "#00FFFF",
          width: fontSize(0.03)
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 255, 255, 0.4)"
              },
              {
                offset: 0.8,
                color: "rgba(0, 255, 255, 0.1)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 255, 255, 0.1)"
        }
      },
      itemStyle: {
        normal: {
          color: "#00FA9A",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: fontSize(0.20)
        }
      },
      data: [
        30,
        40,
        30,
        40,
        30,
        40,
        30,
        60,
        20,
        40,
        20,
        40,
        30,
        40,
        30,
        40,
        30,
        40,
        30,
        60,
        20,
        40,
        20,
        40,
        30,
        60,
        20,
        40,
        20,
        40
      ]
    },
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {
  myChart.resize();
});
})();

//各元素数量
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  var titlename = ["O", "Si", "Al", "Fe", "Ca","O", "Si", "Al", "Fe", "Ca"];
  var valdata = [500, 400, 300, 200, 100,500, 400, 300, 200, 100];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

  option = {
    //图标位置
    grid: {
      top: "0%",
      left: "15%",
      right: "20%",
      bottom:"0%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#000",
          fontSize:fontSize(0.22),
          rich: {
            lg: {
              backgroundColor: "#000000",
              color: "#000",
              borderRadius: fontSize(0.2),
              align: "center",
              width: fontSize(0.25),
              height: fontSize(0.25)
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize:fontSize(0.23),
            color: "#000"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: valdata,

        barWidth: fontSize(0.15),
        itemStyle: {
          normal: {
            barBorderRadius: fontSize(0.25),
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: false,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: "10%",
        data: [500, 500, 500, 500, 500,500, 500, 500, 500, 500],
        barWidth: fontSize(0.2),
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: fontSize(0.02),
            barBorderRadius: fontSize(0.2)
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//本月累计完成航次
(function () {
  const total = 1200;
  const count = 750;
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  // 指定配置和数据
  var option = {
    backgroundcolor: ["#DCDCDC"],
    grid: {
      left: "25%",
      right: "25%",
      containLabel: true
    },

    series: [

      {
        type: 'pie',
        radius: ['79%', '82%'],
        emptyCircleStyle: {
          color: '#DCDCDC',
        },
        label: {
          show: false,
        },
      },
      {
        type: 'pie',
        radius: ['70%', '78 %'],
        startAngle: 60,
        emphasis: {
          scale: false,
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return dataIndex % 2 === 0 ? '#56B4D9' : 'transparent';
          },
        },
        data: [{ value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }],
      },

      // 使用仪表盘展示数据
      {
        type: 'pie',
        radius: ['70%'],
        animation: true,
        itemStyle: {
          color: '#838B8B',
        },
        label: {
          show: true,
          position: 'center',
          formatter: `{count|${count}}\n{desc|本月计划航次}\n{totalDesc|总数 }{total|${total}}`,
          rich: {
            count: {
              color: '#FFB55B',
              fontSize: fontSize(0.5),
              fontWeight: 'bold',
              textAlign: 'center',
              padding: [0, 0, 0, 0],
            },
            desc: {
              color: '#FFFFFF',
              fontSize: fontSize(0.3),
              padding: [fontSize(0.2), 0, fontSize(0.1), 0],
            },
            totalDesc: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: fontSize(0.3),
            },
            total: {
              fontSize:fontSize(0.3),
              color: '#AACBFF',
            },
          },
        },
        data: [100],
      },
    ],
  };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 各航线测区数量排名
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#00ff88"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "2%",
      top: "10px",
      right: "0%",
      bottom: "10%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "一",
          "二",
          "三",
          "四",
          "五",
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,0.5)",
            fontSize: fontSize(0.2)
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,0.5)",
            fontSize: fontSize(0.2)
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,.2)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,0,0,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "测区数量",
        type: "bar",
        barWidth: "35%",
        data: [1500, 900, 300, 300, 200],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();

//各取样方式中不同测区测点占比
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie3 .chart"));
  var names = ['测区1', '测区2', '测区3', '测区4', '测区5', '测区6'];
  var values = [300, 200, 150, 120, 100, 50];
  var colorList = ['#03acd1', '#04cab7', '#03c781', '#fce348', '#fc2d8a', '#0292fe'];
  var data = [];
  for (var i = 0; i < names.length; i++) {
    data.push({
      name: names[i],
      value: values[i]
    })
  }
  data.reverse();
  // 公用调整
  var itemStyle = {
    normal: {
      bordercolor: ["#2f89cf"],
      borderWidth: 5,
      color: function (params) {
        return colorList[params.dataIndex]
      }
    }
  }
  var Center1 = ['10%', '50%'],
    Center2 = ['29%', '50%'],
    Center3 = ['49%', '50%'],
    Center4 = ['69%', '50%'],
    Center5 = ['89%', '50%'],
    radius1 = ['25%', '45%'], // 饼图
    radius3 = ['60%', '61%'], // 线圈
    // 公用调整-end

    // 指定配置和数据
    option = {
      // backgroundColor: '#0A1934',
      color: ["#2f89cf"],
      tooltip: {
        trigger: 'item',
      },
      grid:{
        bottom:'5%'
      },
      title: [
        {
          text: '下潜',
          x: '8%',
          y: '43%',
          textStyle: {
            color: '#559dbd',
            fontSize: fontSize(0.28)
          }
        },
        {
          text: '箱式',
          x: '27%',
          y: '43%',
          textStyle: {
            color: '#559dbd',
            fontSize: fontSize(0.28)
          }
        },
        {
          text: '探测',
          x: '47%',
          y: '43%',
          textStyle: {
            color: '#559dbd',
            fontSize: fontSize(0.28)
          }
        },
        {
          text: '浅钻',
          x: '67%',
          y: '43%',
          textStyle: {
            color: '#559dbd',
            fontSize: fontSize(0.28)
          }
        },
        {
          text: '摄像',
          x: '87%',
          y: '43%',
          textStyle: {
            color: '#559dbd',
            fontSize: fontSize(0.28)
          }
        }
      ],
      series: [
        // 饼图1
        {
          // 饼图圈
          type: 'pie',
          startAngle: 60,
          zlevel: 3,
          radius: radius1,
          center: Center1,
          itemStyle: itemStyle,
          labelLine: {
            show: false,
            normal: {
              length: 5,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            normal: {
              formatter: params => {
                return '●';
              },
              fontSize: fontSize(0.25)
            },

          },
          data: data,
        },
        {
          // 最外圆圈
          type: 'pie',
          startAngle: 60,
          zlevel: 1,
          silent: true, //取消高亮
          radius: radius3,
          center: Center1,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            show: true,
            fontSize: fontSize(0.2)
          },
          data: data,
        },

        // 饼图2
        {
          // 饼图圈
          type: 'pie',
          zlevel: 3,
          radius: radius1,
          center: Center2,
          itemStyle: itemStyle,
          labelLine: {
            show: false,
            normal: {
              length: 5,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            normal: {
              formatter: params => {
                return '●';
              },
              fontSize: fontSize(0.2)
            }
          },
          data: data,
        },
        {
          // 线圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: radius3,
          center: Center2,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            show: true,
            fontSize: fontSize(0.2)
          },
          data: data,
        },
        // 饼图3
        {
          // 饼图圈
          type: 'pie',
          zlevel: 3,
          radius: radius1,
          center: Center3,
          itemStyle: itemStyle,
          labelLine: {
            show: false,
            normal: {
              length: 5,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            normal: {
              formatter: params => {
                return '●';
              },
              fontSize: fontSize(0.2)
            }
          },
          data: data,
        },
        {
          // 最外圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: radius3,
          center: Center3,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            show: true,
            fontSize: fontSize(0.2)
          },
          data: data,
        },

        // 饼图4
        {
          // 饼图圈
          type: 'pie',
          zlevel: 3,
          radius: radius1,
          center: Center4,
          itemStyle: itemStyle,
          labelLine: {
            show: false,
            normal: {
              length: 5,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            normal: {
              formatter: params => {
                return '●';
              },
              fontSize: fontSize(0.2)
            }
          },
          data: data,
        },
        {
          // 最外圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: radius3,
          center: Center4,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            show: true,
            fontSize: fontSize(0.2)
          },
          data: data,
        },

        // 饼图5
        {
          // 饼图圈
          type: 'pie',
          zlevel: 3,
          radius: radius1,
          center: Center5,
          itemStyle: itemStyle,
          labelLine: {
            show: false,
            normal: {
              length: 5,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            normal: {
              formatter: params => {
                return '●';
              },
              fontSize: fontSize(0.2)
            }
          },
          data: data,
        },
        {
          // 最外圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: radius3,
          center: Center5,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          label: {
            show: true,
            fontSize: fontSize(0.2)
          },
          data: data,
        },

      ]
    };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//累计航测路程
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));
  
  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  };
  
  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      right: "4%",
      top:"5%",
      itemWidth: fontSize(0.4),
      itemHeight: fontSize(0.25),
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: fontSize(0.23)
      }
    },
    grid: {
      top: "20%",
      left: "2%",
      right: "4%",
      bottom: "6%",
      show: true,
      borderColor: "rgba(255,255,255,0)",
      containLabel: true
    },
  
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)",
        fontSize: fontSize(0.23)
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false
      },
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)",
        fontSize: fontSize(0.23)
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        name: "航线一",
        type: "line",
        stack: "路程",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "航线二",
        type: "line",
        stack: "路程",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  
  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  })();
  

  
 
  
 