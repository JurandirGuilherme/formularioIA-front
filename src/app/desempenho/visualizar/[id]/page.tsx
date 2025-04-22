'use client'
import desempenho from '@/app/api/desempenho';
import TableForm from '@/app/components/TableForm';
import { useParams } from 'next/navigation'
import {use, useEffect, useState} from 'react'

function page() {
    const {id} = useParams();

  return (
  <TableForm alunoId={Number(id)} mode='view'/>
  )
}

export default page