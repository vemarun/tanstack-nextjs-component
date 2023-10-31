"use client"

import { useReactTable,getCoreRowModel,flexRender,getPaginationRowModel } from '@tanstack/react-table'

export default function BasicTable({data,columns}){
    
    const table=useReactTable({
      data,
      columns,
      getCoreRowModel:getCoreRowModel(),
      getPaginationRowModel:getPaginationRowModel()
    })
  
    return (
    <div>
      <table class="table table-zebra">
        <thead>
        {table.getHeaderGroups().map(headerGroup=>(
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header=>(
            <th key={header.id}>
            {flexRender(header.column.columnDef.header,header.getContext())}
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
        <button class="btn" onClick={()=>table.setPageIndex(0)}>First Page</button>
        <button class="btn" disabled={!table.getCanPreviousPage()} onClick={()=>table.previousPage()}>Previous Page</button>
        <button class="btn" disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()}>Next Page</button>
        <button class="btn" onClick={()=>table.setPageIndex(table.getPageCount()-1)}>Last Page</button>
      
      </div>
    </div>
    )
  }