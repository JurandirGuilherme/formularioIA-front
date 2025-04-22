"use client";
import desempenho from "@/app/api/desempenho";
import {
  Button,
  CheckboxOptionType,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Tag,
} from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { ArrowLeftOutlined } from "@ant-design/icons";
import BackButton from "../BackButton";
import { AlunoType } from "../../types/AlunoType";

function TableForm({
  alunoId,
  mode = "create",
}: {
  alunoId?: number;
  mode?: "create" | "edit" | "view";
}) {
  const [form] = Form.useForm();
  const [aluno, setAluno] = useState<AlunoType>();
  const router = useRouter();

  useEffect(() => {
    desempenho.encontrar(alunoId).then((data) => {
      form.setFieldsValue(data);
      setAluno(data);
      console.log(form.getFieldValue("notaFinal"));
    });
  }, []);
  const levelFeedback = [
    { value: 0, label: "Nenhum" },
    { value: 1, label: "Baixo" },
    { value: 2, label: "Moderado" },
    { value: 3, label: "Alto" },
    { value: 4, label: "Muito Alto" },
  ];
  const radioTrueorFalseOption = [
    { value: 1, label: "Sim" },
    { value: 0, label: "Não" },
  ];
  const askWithTrueOrFalse: Array<{ name: string; label: string }> = [
    { name: "aulasParticulares", label: "Aulas Particulares" },
    { name: "extraCurriculares", label: "Extras Curriculares" },
    { name: "esportes", label: "Esportes" },
    { name: "aulaMusica", label: "Músicas" },
    { name: "voluntariado", label: "Voluntariado" },
  ];
  const RadioTrueOrFalse = (
    nameItem: string,
    labelItem: string,
    radioOptions: CheckboxOptionType<any>[]
  ) => {
    return (
      <Form.Item name={nameItem} label={labelItem} key={nameItem}>
        <Radio.Group options={radioOptions} />
      </Form.Item>
    );
  };
  const onSubmit = () => {
    desempenho
      .criar(form.getFieldsValue())
      .then(() => {
        router.back();
      })
      .catch(() => {
        console.log("Error");
      });
  };

  const viewMode = () => {
    return mode == "view";
  };
  const chooseColorTag = () => {
    switch (aluno?.notaFinal) {
      case "A":
        return "green";
      case "B":
        return "gold";
      case "C":
        return "orange";
      case "D":
        return "volcano";
      case "F":
        return "red";
      default:
        return "red";
    }
  };
  return (
    <div className="flex  items-center flex-col">
      <div className="w-xl mb-5">
        <BackButton />
      </div>
      <Form
        name="formulario"
        onFinish={onSubmit}
        disabled={viewMode()}
        form={form}
      >
        <Form.Item name="nome" label={"Nome"}>
          <Input placeholder="Informe a idade" />
        </Form.Item>
        <Form.Item name="idade" label="Idade">
          <InputNumber placeholder="Informe a idade" />
        </Form.Item>
        <Form.Item name="sexo" label="Sexo">
          <Select
            placeholder="Informe o sexo"
            options={[
              { value: 0, label: "Masculino" },
              { value: 1, label: "Feminino" },
            ]}
          />
        </Form.Item>
        <Form.Item name="etnia" label="Etnia">
          <Select
            placeholder="Informe a etnia"
            options={[
              { value: 0, label: "Caucasiano" },
              { value: 1, label: "Afro-americano" },
              { value: 2, label: "Asiático" },
              { value: 3, label: "Outros" },
            ]}
          />
        </Form.Item>
        <Form.Item name="educacaoPais" label="Educação dos Pais">
          <Select
            placeholder="Informe o nível de escolaridade"
            options={[
              { value: 0, label: "Nenhum" },
              { value: 1, label: "Ensino Médio" },
              { value: 2, label: "Faculdade Incompleta" },
              { value: 3, label: "Bacharelado" },
              { value: 4, label: "Superior" },
            ]}
          />
        </Form.Item>
        <Form.Item name="tempoEstudoSemanal" label="Tempo de Estudo Semanal">
          <InputNumber
            maxLength={2}
            max={20}
            placeholder="Informe o tempo de estudo semanal"
          />
        </Form.Item>
        <Form.Item name="faltas" label="Número de Faltas">
          <InputNumber
            maxLength={2}
            max={30}
            placeholder="Informe o numero de faltas"
          />
        </Form.Item>
        <Form.Item name="apoioPais" label="Apoio dos Pais">
          <Radio.Group options={levelFeedback} />
        </Form.Item>
        {askWithTrueOrFalse.map(({ name, label }) =>
          RadioTrueOrFalse(name, label, radioTrueorFalseOption)
        )}

        {viewMode() ? (
          <>
            <Form.Item className="flex justify-center w-full space-y-3">
                <Tag
                  style={{height:"15vh", width: '20vh', fontSize: "40px", display:'flex', alignItems:"center", justifyContent:"center"}}
                  color={chooseColorTag()}
                >
                  <div className="flex justify-center pb-5 items-center flex-col">
                    <h1 className="text-sm mb-5">Predição da Nota Final</h1>
                    <h1>{aluno?.notaFinal}</h1>
                  </div>
                </Tag>
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item className="flex flex-row-reverse">
              <Button htmlType="submit" type="primary">
                Enviar
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
    </div>
  );
}

export default TableForm;
