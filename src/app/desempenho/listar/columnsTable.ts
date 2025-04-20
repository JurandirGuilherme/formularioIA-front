import { TableProps } from "antd";

const columns: TableProps['columns'] = [
    {
        title: 'Nome',
        dataIndex:'nome',
        key:'nome'
    },
    {
        title: 'idade',
        dataIndex:'idade',
        key:'idade'
    },
    {
        title: 'etnia',
        dataIndex:'etnia',
        key:'etnia'
    },
]