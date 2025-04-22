import React from "react";
import TableForm from "@/app/components/TableForm";

function page() {
  return (
    <div className="w-full">
        <h1 className="mb-7 text-xl flex items-center flex-col">Formulário Socio-informativo do Aluno</h1>
      <div >
        <TableForm />
      </div>
    </div>
  );
}

export default page;
