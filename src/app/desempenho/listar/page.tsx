"use client";
import desempenho from "@/app/api/desempenho";
import TableList from "@/app/tools/TableList";
import React, { useEffect, useState } from "react";
import { columns } from "./columnsTable";

function App() {
  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    desempenho.listar().then((data) => setAlunos(data));
  }, []);
  return (
    <div>
      <TableList columns={columns} data={alunos} />
    </div>
  );
}

export default App;
