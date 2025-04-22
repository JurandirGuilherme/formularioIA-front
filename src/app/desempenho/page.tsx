'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'antd';
import '@ant-design/v5-patch-for-react-19';


function Desempenho() {
    const router = useRouter();
    const navigate = (path:string) =>{
        router.push(path)
    }
    const pages = [
        {name: 'Criar', href: '/desempenho/criar'},
        {name: 'Listar', href: '/desempenho/listar'}
    ]
  return (
    <>
    <div className=' space-x-3'>
    {pages.map(({name, href})=>
    (
        <Button key={name} className='bg-amber-600' onClick={()=>{navigate(href)}}>{name}</Button>
    ))}
    </div>
    </>
  )
}

export default Desempenho