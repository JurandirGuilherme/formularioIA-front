import { TableProps } from "antd";

export const columns: TableProps['columns'] = [
    {
        title: 'Nome',
        dataIndex:'nome',
        key:'nome'
    },
    {
        title: 'Idade',
        dataIndex:'idade',
        key:'idade'
    },
    {
        title: 'Etnia',
        dataIndex:'etnia',
        key:'etnia'
    },
    {
        title: 'Ação',
        dataIndex:'etnia',
        key:'etnia',
    }
]