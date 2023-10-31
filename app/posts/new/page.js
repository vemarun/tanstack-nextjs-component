import mData from '../../MOCK_DATA.json'
import BasicTable from '@/components/BasicTable'
import { useMemo } from 'react'

const Page = () => {
  const data= useMemo(()=>mData,[])
    /** @type import('@tanstack/react-table).ColumnDef<any> */
    const columns=[
      {
        header:'ID',
        accessorKey:'id',
        footer:'ID'
      },
      {
        header:'First Name',
        accessorKey:'first_name',
        footer:'First Name'
      },
      {
        header:'Last Name',
        accessorKey:'last_name',
        footer:'Last Name'
      },
      {
        header:'Email',
        accessorKey:'email',
        footer:'Last Name'
      },
      {
        header:'Gender',
        accessorKey:'gender',
        footer:'Gender'
      },
      {
        header:'IP Address',
        accessorKey:'ip_address',
        footer:'IP Address'
      }
    ]
  
  return (
    <div>
      <BasicTable data={data} columns={columns}></BasicTable>
    </div>
  )
}

export default Page