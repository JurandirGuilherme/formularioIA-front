import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { useRouter } from "next/navigation";
import { EyeFilled } from "@ant-design/icons";

const TableList = ({
  columns,
  data,
}: {
  columns: TableProps["columns"];
  data: any[];
}) => {
  const router = useRouter();
  return (
    <Table
      columns={[
        ...(columns || []),
        {
          title: "Ação",
          key: "acao",
          render: (_, { id }) => {
            return (
              <Button
                key={id}
                type="link"
                style={{ color: "black" }}
                icon={<EyeFilled />}
                onClick={() => {
                  router.push(`/desempenho/visualizar/${id}`);
                }}
              />
            );
          },
        },
      ]}
      dataSource={data}
    />
  );
};

export default TableList;
