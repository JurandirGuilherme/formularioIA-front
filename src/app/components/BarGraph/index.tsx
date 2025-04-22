'use client'
import { BarChart } from "@mui/x-charts/BarChart";
import { DataGraph } from "@/app/types/dataGraph";
import { useEffect } from "react";
import { treatData } from "@/app/service/treatData";
import { arrayNotas } from "@/app/service/arrayNotas";

export default function BarGraph({ dataGraph }: DataGraph) {
  console.log(arrayNotas(dataGraph))

//   const arr = ['A': {1,2}, 'B', 'C', 'D', 'F']
  return (
    <BarChart
      series={[
        ...(arrayNotas(dataGraph))
      ]}
      height={290}
      xAxis={[{ data: ["Masculino", "Feminino"], scaleType: "band" }]}
    />
  );
}
