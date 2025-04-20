import desempenho from '@/app/api/desempenho'
import TableList from '@/app/tools/TableList'
import React, { useEffect, useState } from 'react'

function App() {
  const [dataTable, setDataTable] = useState();
  useEffect( ()=>{
    const data = desempenho.listar();
    setDataTable(data)
  }, [])
  return (
    <div>
      <TableList/>
    </div>
  )
}

export default App