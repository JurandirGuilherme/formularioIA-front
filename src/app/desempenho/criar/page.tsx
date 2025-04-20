import React from "react";
import TableForm from "@/app/components/TableForm";

function page() {
  return (
    <div className="w-full flex items-center flex-col ">
        <h1 className="mb-7 text-xl">Formulário Socio-informativo do Aluno</h1>
      <div className="96">
        <TableForm />
      </div>
    </div>
  );
}

export default page;
