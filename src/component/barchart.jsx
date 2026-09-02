import ReactECharts from "echarts-for-react";

const data = [
  { name: "Cementing", hours: 1.5 },
  { name: "Wellhead", hours: 4 },
  { name: "Mud / Solids", hours: 11 },
  { name: "Mechanical", hours: 70.5 },
  { name: "Equipment Failure", hours: 132 },
  { name: "Human Error", hours: 140 },
];

function IssuesBarChart() {
  // data = [{ name: "Mechanical", hours: 70.5 }, ...]

  const option = {
    title: {
      text: "What is the financial impact of these NPTs?",
      left: "center",
      textStyle: { fontSize: 14, fontWeight: "bold", color: "#78808c", fontFamily: "Aptos Narrow" },
    },
    grid: { left: 120, right: 40, top: 50, bottom: 0 },
    xAxis: {
        type: "value",
        show: true, // removes x-axis values entirely
        name: "Hours (hr)",
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: { fontSize: 11, color: "#6b7280" },
        axisLabel: { show: false},
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: {show: false}
    },
    yAxis: {
      type: "category",
      data: data.map((d) => d.name),
      axisTick: { show: true },
      axisLine: { show: true },
      axisLabel: { fontSize: 10 },
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.hours),
        itemStyle: { color: "#7A1E63"},
        barWidth: 25,
        label: {
          show: true,
          position: "right",
          formatter: (params) => `${params.value}hrs`,
          fontSize: 8,
          fontWeight: 600,
          color: "#374151",
          backgroundColor: "#F5DBF3",  
          borderColor: "#d1c7db",     
          borderWidth: 1,            
          padding: [4, 8],
        },
      },
    ],
    tooltip: { trigger: "axis" },
  };

  return <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />;
}

export default IssuesBarChart;