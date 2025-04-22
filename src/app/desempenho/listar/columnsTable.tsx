'use client'
import { Button, TableProps } from "antd";
import { EyeFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
const ButtonT = ()=>{
    return (<>

    </>)
}

export const columns: TableProps["columns"] = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Idade",
    dataIndex: "idade",
    key: "idade",
  },
  {
    title: "Etnia",
    dataIndex: "etnia",
    key: "etnia",
  }
];
