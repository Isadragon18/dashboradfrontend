import ReactECharts from "echarts-for-react";

const data = [
  { name: "SMS Joy", value: 153, color: "#8B2FC9" },
  { name: "Geowell", value: 140, color: "#D178C9" },
  { name: "TBD", value: 48.5, color: "#7A1E63" },
  { name: "Clinton", value: 11, color: "#0E6E6E" },
  { name: "MultiChase", value: 3.5, color: "#5FA82B" },
  { name: "Mega Field", value: 2, color: "#A6197A" },
  { name: "Ulla", value: 4, color: "#123A52" },
];

function Treemap() {
  const option = {
    title: {
      text: "Who contributed to NPT?",
      left: "center",
      top: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#374151",
        fontFamily: "Aptos Narrow",
      },
    },
    legend: {
      top: 45,
      left: "center",
      icon: "rect",
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 20,
      textStyle: { fontSize: 12, color: "#374151" },
      data: data.map((d) => d.name),
    },tooltip: {
    trigger: "item",
    formatter: (params) => `${params.name}: ${params.value} hrs`,
    backgroundColor: "#fff",
    borderColor: "#d1c7db",
    borderWidth: 1,
    textStyle: { color: "#374151", fontSize: 12 },
  },
    series: [
      {
        type: "treemap",
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        roam: false,
        breadcrumb: { show: false },
        upperLabel: { show: false },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 2,
          gapWidth: 2,
        },
        label: {
          show: true,
          position: "insideBottomLeft",
          formatter: (params) => `{name|${params.name}}\n{value|${params.value}}`,
          rich: {
            name: { fontSize: 13, color: "#fff", lineHeight: 18 },
            value: { fontSize: 13, color: "#fff", lineHeight: 18 },
          },
        },
        data: data.map((d) => ({
          name: d.name,
          value: d.value,
          itemStyle: { color: d.color },
        })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />;
}

export default Treemap;