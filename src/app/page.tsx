"use client";
import React, { useEffect, useState } from "react";
import GraphPizza from "./components/GraphPizza";
import BarGraph from "./components/BarGraph";
import desempenho from "./api/desempenho";
import { treatDataForM } from "./service/treatDataForM";
import { treatDataMusic } from "./service/treatDataMusic";
import { treatDataAula } from "./service/treatDataAula";
import { treatDataEsport } from "./service/treatDataSport";
import { treatDataVolunt } from "./service/treatDataVolunt";
import { treatDataExtra } from "./service/treatDataExtra";

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
      <BarGraph dataGraph={treatDataAula(alunos)} dataxAxis={'aulasParticulares'} />
      <BarGraph dataGraph={treatDataEsport(alunos)} dataxAxis={'esportes'} />
      <BarGraph dataGraph={treatDataVolunt(alunos)} dataxAxis={'voluntariado'} />
      <BarGraph dataGraph={treatDataExtra(alunos)} dataxAxis={'extraCurriculares'} />



      <GraphPizza dataGraph={alunos} />
    </div>
  );
}

export default page;
