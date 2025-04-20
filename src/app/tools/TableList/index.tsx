import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';



const TableList= (columns: TableProps['columns'], data:any[]) => <Table columns={columns} dataSource={data} />;

export default TableList;