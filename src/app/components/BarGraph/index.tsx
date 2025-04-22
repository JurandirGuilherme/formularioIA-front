"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { DataGraph } from "@/app/types/dataGraph";
import { useEffect } from "react";
import { treatData } from "@/app/service/treatData";
import { treatDataForM } from "@/app/service/treatDataForM";

export default function BarGraph({ dataGraph, dataxAxis }: any) {

  console.log(dataGraph)
  return (
    <BarChart
    dataset={dataGraph}
      series={[
        {dataKey:'A', label:'A'},
        {dataKey:'B', label:'B'},
        {dataKey:'C', label:'C'},
        {dataKey:'D', label:'D'},
        {dataKey:'F', label:'F'},

      ]}
      height={290}
      xAxis={[{ scaleType:'band', dataKey: dataxAxis}]}
    />
  );
}
