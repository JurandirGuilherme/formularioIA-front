import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      type="default"
      icon={<ArrowLeftOutlined />}
    >
      Voltar
    </Button>
  );
}

export default BackButton;
