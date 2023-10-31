"use client"

import { useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
 } from '@tanstack/react-table'
import { useState } from 'react'

export default function BasicTable({data,columns}){

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

    
    const table=useReactTable({
      data,
      columns,
      getCoreRowModel:getCoreRowModel(),
      getPaginationRowModel:getPaginationRowModel(),
      getSortedRowModel:getSortedRowModel(),
      getFilteredRowModel:getFilteredRowModel(),
      state:{
        sorting:sorting,
        globalFilter:filtering
      },
      onSortingChange:setSorting,
      onGlobalFilterChange:setFiltering
    })
  
    return (
    <div>
      <input className='input m-5' type='text' value={filtering} onChange={e=>setFiltering(e.target.value)} placeholder='Filter'></input>
      <table className="table table-zebra">
        <thead>
        {table.getHeaderGroups().map(headerGroup=>(
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header=>(
            <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
              )}
              {
              {asc:'🔼',desc:'🔽'}[
                header.column.getIsSorted() ?? null
              ]
             }
            </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row =>(
            <tr key={row.id}>
              {row.getVisibleCells().map(cell=>(
                <td key={cell}>
                  {flexRender(cell.column.columnDef.cell,cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
        {table.getFooterGroups().map(footerGroup=>(
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header=>(
            <th key={header.id}>
            {flexRender(header.column.columnDef.header,header.getContext())}
            </th>
            ))}
          </tr>
        ))}
        </tfoot> */}
      </table>
      <div>
        <button className="btn" onClick={()=>table.setPageIndex(0)}>First Page</button>
        <button className="btn" disabled={!table.getCanPreviousPage()} onClick={()=>table.previousPage()}>Previous Page</button>
        <button className="btn" disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()}>Next Page</button>
        <button className="btn" onClick={()=>table.setPageIndex(table.getPageCount()-1)}>Last Page</button>
      
      </div>
    </div>
    )
  }