"use client";
import React, { useEffect, useState } from "react";
import GraphPizza from "./components/GraphPizza";
import BarGraph from "./components/BarGraph";
import desempenho from "./api/desempenho";

function page() {
  const [alunos, setAlunos] = useState<[]>([]);

  useEffect(() => {
    desempenho.listar().then((data) => {
      setAlunos(data);
    });
  }, []);

  return (
    <div className="flex ">
      <BarGraph dataGraph={alunos} />
      <GraphPizza dataGraph={alunos} />
    </div>
  );
}

export default page;
