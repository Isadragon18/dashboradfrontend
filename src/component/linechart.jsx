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

function IssueLineChart() {
  const option = {
    title: {
      text: "How are our NPT hours trending month-over-month?",
      left: "center",
      top: 10,
      textStyle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#78808c",
        fontFamily: "Aptos Narrow",
        width: 260,        // forces wrap onto two lines like the image
        overflow: "break",
        lineHeight: 22,
      },
    },
    grid: { left: 0, right: 30, top: 70, bottom: 10, containLabel: true },
    xAxis: [{
      type: "category",
      data: data.map((d) => d.month),
      boundaryGap: false,       // line starts/ends flush with the axis edges
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "#333" } },
      axisLabel: { fontSize: 9, fontWeight: 600, color: "#374151" },
      splitLine: {
        show: false,
      },
    },{
        type: "value",
      show: false,               // hidden — exists only to draw extra gridlines
      min: 0,
      max: data.length - 1,
      splitNumber: (data.length - 1) * 3, // adds 2 extra lines between each pair of points
      splitLine: {
        show: true,
        lineStyle: { color: "#eee" },
      },
    }],
    yAxis: {
      type: "value",
      show: false,              // no y-axis values, matching the image
      splitLine: { show: false },
    },
    series: [
      {
        type: "line",
        xAxisIndex: 0,            // uses the first x-axis (the category one)
        data: data.map((d) => d.hours),
        smooth: false,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { color: "#7A1E63", width: 3 },
        itemStyle: { color: "#7A1E63" },
        areaStyle: { color: "#C77FE0", opacity: 0.2 },
        label: {
          show: true,
          position: "top",
          formatter: (params) => (params.value).toFixed(1),
          fontSize: 9,
          fontWeight: 700,
          color: "#1f2937",
        },markLine: {
        symbol: "none",
        silent: true,
        lineStyle: { color: "#eee", type: "solid", width: 1 },
        label: { show: false },
        data: [
          { xAxis: 0.5 }, // vertical line between May and Jun
          { xAxis: 1.5 }, // vertical line between Jun and Jul
        ],
      },
      },
    ],
    tooltip: { trigger: "axis", formatter: (params) => `${params[0].axisValue}: ${params[0].value}hrs`},
  };

  return <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />;
}

export default IssueLineChart;