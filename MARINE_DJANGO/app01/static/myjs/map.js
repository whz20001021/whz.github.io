function fontSize(res){
	let docEl = document.documentElement,
		clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if (!clientWidth) return;
	let fontSize = 80 * (clientWidth / 1920);
	return res*fontSize;
}

//会员班级分布
(function () {
// 1. 实例化对象
var myChart = echarts.init(document.querySelector(".pie1  .chart"));
// 2. 指定配置项和数据
var option = {
  legend: {
    type: 'scroll',
    pageIconColor: "#fff",
    show:false,
    pageTextStyle:{
      color:"#fff",
      fontSize:fontSize(0.20)
    },
    pageButtonPosition: 'end',
    pageIconSize:fontSize(0.26),
    top: "80%",
    itemWidth: fontSize(0.20),
    itemHeight: fontSize(0.20),
    padding: 5,
    textStyle: {
      color:[
        "#f845f1",
        "#ad46f3",
        "#5045f6",
        "#4777f5",
        "#44aff0",
        "#45dbf7",
        "#f6d54a",
        "#f69846"
      ],
      fontSize: fontSize(0.26)
    }
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  // 注意颜色写的位置
  color: [
    "#f845f1",
    "#ad46f3",
    "#5045f6",
    "#4777f5",
    "#44aff0",
    "#45dbf7",
    "#f6d54a",
    "#f69846",
    "#ff4343",
    "#ff1111"
  ],
  series: [
    {
      name: "人数统计",
      type: "pie",
      // 如果radius是百分比则必须加引号
      radius: ["50%", "72%"],
      center: ["50%", "42%"],
      roseType: "radius",
      data: [
        { value: 20, name: "地信191" },
        { value: 20, name: "地信192" },
        { value: 30, name: "地信201" },
        { value: 30, name: "地信202" },
        { value: 30, name: "地信203" },
        { value: 32, name: "地信211" },
        { value: 32, name: "地信212" },
        { value: 32, name: "地信213" },
        { value: 15, name: "测绘191" },
        { value: 15, name: "测绘201" },
        { value: 15, name: "测绘211" }
      ],
      // 修饰饼形图文字相关的样式 label对象
      label: {
        fontSize: fontSize(0.25)
      },
      // 修饰引导线样式
      labelLine: {
        // 连接到图形的线长度
        length: 1,
        // 连接到文字的线长度
        length2: 7
      }
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

//近15天社团活跃度趋势
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
      color: "rgba(255,255,255,.5)",
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
          color: "rgba(255,255,255,.6)",
          fontSize: fontSize(0.23)
        }
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },

      data: [
        "15",
        "14",
        "13",
        "12",
        "11",
        "10",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "今",
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
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: fontSize(0.23)
        }
      },

      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }
  ],
  series: [
    {
      name: "当日活跃度",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: fontSize(0.1),
      showSymbol: false,
      lineStyle: {
        normal: {
          color: "#0184d5",
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
                color: "rgba(1, 132, 213, 0.9)"
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.2)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        }
      },
      itemStyle: {
        normal: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: fontSize(0.20)
        }
      },
      data: [
        2500,
        1100,
        1120,
        1180,
        1200,
        1780,
        2030,
        2300,
        2750,
        2500,
        2450,
        2380,
        2900,
        4000,
        3900,
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

//本周最活跃成员
(function () {
  const total = 1200;
  const count = "zeze";
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  // 指定配置和数据
  var option = {
    backgroundcolor: ["#2f89cf"],
    grid: {
      left: "25%",
      right: "25%",
      containLabel: true
    },

    series: [

      {
        type: 'pie',
        radius: ['79%', '80%'],
        emptyCircleStyle: {
          color: '#285D73',
        },
        label: {
          show: false,
        },
      },
      {
        type: 'pie',
        radius: ['79%', '90%'],
        startAngle: 60,
        emphasis: {
          scale: true,
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return dataIndex % 2 === 0 ? 'yellow' : 'transparent';
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
          color: '#142B34',
        },
        label: {
          show: true,
          position: 'center',
          formatter: `{count|${count}}\n{desc|本月活跃之星}\n{totalDesc|活跃度}{total|${total}}`,
          rich: {
            count: {
              color: '#ff5e00',
              fontSize: fontSize(0.6),
              fontWeight: 'bold',
              textAlign: 'center',
              padding: [0, 0, 0, 0],
            },
            desc: {
              color: '#FFFFFF',
              fontSize: fontSize(0.3),
              padding: [fontSize(0.1), 0, fontSize(0.1), 0],
            },
            totalDesc: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: fontSize(0.3),
            },
            total: {
              fontSize:fontSize(0.5),
              color: '#ff5e00',
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

//会员地区分布排行
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var titlename = ["丽水", "衢州", "杭州", "嘉兴", "舟山","金华", "宁波", "平湖", "绍兴"];
  var valdata = [33, 22, 15, 11, 11,11, 8, 8, 7];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

  option = {
    //图标位置
    grid: {
      top: "0%",
      left: "15%",
      right: "10%",
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
          color: "#fff",
          fontSize:fontSize(0.22),
          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
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
            color: "darkorange"
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
        barCategoryGap: "20%",
        data: [40, 40, 40, 40, 40,40, 40, 40, 40, 40],
        barWidth: fontSize(0.2),
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "gray",
            borderWidth: fontSize(0.),
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

//近30天社团活跃趋势
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


  
 