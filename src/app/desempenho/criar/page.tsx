"use client";
import { Button, Checkbox, CheckboxOptionType, Form, Input, Radio, Select } from "antd";


function App() {

  const [form] = Form.useForm();

  const levelFeedback = [
    {value: 0, label:'Nenhum'},
    {value: 1, label:'Baixo'},
    {value: 2, label:'Moderado'},
    {value: 3, label:'Alto'},
    {value: 4, label:'Muito Alto'},
  ]
  const radioTrueorFalseOption = [
    {value:1, label: 'Sim'},
    {value:0, label: 'Não'}
    ]
  const askWithTrueOrFalse: Array<{name: string, label: string}> = [
    {name: 'aulasParticulares', label: 'Aulas Particulares'},
    {name: 'extraCurriculares', label: 'Extras Curriculares'},
    {name: 'esportes', label: 'Esportes'},
    {name: 'musicas', label: 'Músicas'},
    {name: 'volutariado', label: 'Voluntariado'},
  ]
  const RadioTrueOrFalse = (nameItem:string, labelItem:string, radioOptions: CheckboxOptionType<any>[]) =>
  {
    return(
      <Form.Item name={nameItem} label={labelItem} key={nameItem}>
        <Radio.Group options={radioOptions}/>
      </Form.Item>
    )
  }

  const onSubmit = () =>{
    console.log(form.getFieldsValue())
  }

  return (
    <>
      <Form name="formulario" onFinish={onSubmit} form={form}>
        <Form.Item name="nome" label={"Nome"}>
          <Input />
        </Form.Item>
        <Form.Item name="idade" label="Idade">
          <Input type="number" />
        </Form.Item>
        <Form.Item name="sexo" label="Sexo">
          <Select
          placeholder='Informe o sexo'
            options={[
              { value: 0, label: "Masculino" },
              { value: 1, label: "Feminino" },
            ]}
          />
        </Form.Item>
        <Form.Item name='etnia' label='Etnia'>
        <Select
          placeholder='Informe a etnia'
            options={[
              { value: 0, label: "Caucasiano" },
              { value: 1, label: "Afro-americano" },
              { value: 2, label: "Asiático" },
              { value: 3, label: "Outros" },
            ]}
          />
        </Form.Item>
        <Form.Item name='educacaoPais' label='Eduação dos Pais'>
            <Select options={[
              {value: 0, label:'Nenhum'},
              {value: 1, label:'Ensino Médio'},
              {value: 2, label:'Faculdade Incompleta'},
              {value: 3, label:'Bacharelado'},
              {value: 4, label:'Superior'}
            ]}/>
        </Form.Item>
        <Form.Item name='tempoEstudoSemanal' label='Tempo de Estudo Semanal'>
          <Input type="number" maxLength={2} max={20}/>
        </Form.Item>
        <Form.Item name='faltas' label='Número de Faltas'>
          <Input type="number" maxLength={2} max={30}/>
        </Form.Item>
        <Form.Item name='apoioPais' label='Apoio dos Pais' >
          <Radio.Group options={levelFeedback}/>
        </Form.Item>
        {askWithTrueOrFalse.map(({name, label})=>(
          RadioTrueOrFalse(name, label, radioTrueorFalseOption)
        ))}
        <Button htmlType="submit" type="primary">Enviar</Button>
      </Form>
    </>
  );
}

export default App;
