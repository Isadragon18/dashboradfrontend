import ReactECharts from "echarts-for-react";

const data = [
  {
    month: "May",
    hours: 216,
    cost: 2137405.5066475
  },
  {
    month: "Jun",
    hours: 131.5,
    cost: 1621039.6914991667
  },
  {
    month: "Jul",
    hours: 11.5,
    cost: 136565.16015228152
  }
];

function IssuesBarChartSub() {


  const option = {
    title: {
      text: "What is the financial impact of these NPTs?",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#78808c", fontFamily: "Aptos Narrow" },
    },
    grid: { left: 60, right: 60, top: 50, bottom: 0 },
    xAxis: {
        type: "category",
        show: true, // removes x-axis values entirely
        data: data.map((d) => d.month),
        axisTick: { show: true },
        axisLine: { show: true },
        splitLine: {show: false}
    },
    yAxis: {
      type: "value",
      name: "Hours (hr)",
      nameLocation: "end",
      nameGap: 0,
      nameRotate: 90,
      nameTextStyle: { fontSize: 11, color: "#6b7280", align: "right" },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false},
      splitLine: {show: false}
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.hours),
        itemStyle: { color: "#7A1E63"},
        barWidth: 45,
        label: {
          show: true,
          position: "top",
          formatter: (params) => `${params.value}hrs`,
          fontSize: 11,
          fontWeight: 600,
        },
      },
    ],
    tooltip: { trigger: "axis", formatter: (params) => `${params[0].axisValue}: $${params[0].value}M` },
  };

  return <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />;
}

export default IssuesBarChartSub;