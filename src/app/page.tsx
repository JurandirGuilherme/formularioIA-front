"use client";
import React, { useEffect, useState } from "react";
import GraphPizza from "./components/GraphPizza";
import BarGraph from "./components/BarGraph";
import desempenho from "./api/desempenho";
import { treatDataForM } from "./service/treatDataForM";
import { treatDataMusic } from "./service/treatDataMusic";

function page() {
  const [alunos, setAlunos] = useState<[]>([]);

  useEffect(() => {
    desempenho.listar().then((data) => {
      setAlunos(data);
    });
  }, []);

  return (
    <div className="flex ">
      <BarGraph dataGraph={treatDataForM(alunos)} dataxAxis={'sexo'} />
      <BarGraph dataGraph={treatDataMusic(alunos)} dataxAxis={'aulaMusica'} />
      <GraphPizza dataGraph={alunos} />
    </div>
  );
}

export default page;
