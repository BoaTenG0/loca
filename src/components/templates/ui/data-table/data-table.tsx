// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   Paper,
// } from '@mui/material';

// interface Props {
//   columns: Array<{ id: string; label: string }>;
//   data: Array<any>;
//   rowKey?: string;
//   pageSize?: number;
//   topLayer?: React.ReactNode;
//   gridStyles?: React.CSSProperties;
//   gridHeight?: number;
//   handlePageSize?: (page: number, rowsPerPage: number) => void;
//   pageOption?: number[];
//   footer?: React.ReactNode;
//   onRowClick?: (record: any) => void;
// }

// const DatagridTemplate: React.FC<Props> = ({
//   rowKey = 'id',
//   footer,
//   columns,
//   data,
//   pageSize = 50,
//   topLayer,
//   gridStyles,
//   gridHeight = 385,
//   handlePageSize,
//   pageOption = [10, 20, 50, 100],
//   onRowClick,
// }) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//     handlePageSize && handlePageSize(newPage, rowsPerPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     setPage(0);
//     handlePageSize && handlePageSize(0, newRowsPerPage);
//   };

//   return (
//     <div>
//       {topLayer && topLayer}
//       <TableContainer component={Paper} style={{ maxHeight: gridHeight }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   style={{ background: '#E8F5F1', color: '#126B53', padding: '20px' }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//               <TableRow
//                 key={row[rowKey]}
//                 onClick={() => onRowClick && onRowClick(row)}
//                 hover
//                 style={{ cursor: 'pointer' }}
//               >
//                 {columns.map((column) => (
//                   <TableCell key={column.id} style={{ padding: '20px' }}>
//                     {row[column.id]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={pageOption}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         style={{ justifyContent: 'flex-end' }}
//       />
//       {footer && <div>{footer}</div>}
//     </div>
//   );
// };

// export default DatagridTemplate;

import React from 'react'
import { DataGrid, GridColDef, GridPaginationModel, GridRenderCellParams } from '@mui/x-data-grid'

interface Column {
  id: string
  label: string
  renderCell?: (params: GridRenderCellParams) => React.ReactNode
}

interface Props {
  columns: Column[]
  data: Array<any>
  rowKey?: string
  pageSize?: number
  topLayer?: React.ReactNode
  gridStyles?: React.CSSProperties
  gridHeight?: number
  handlePageSize?: (page: number, rowsPerPage: number) => void
  pageOption?: number[]
  footer?: React.ReactNode
  onRowClick?: (record: any) => void
}

const DatagridTemplate: React.FC<Props> = ({
  columns = [],
  data = [],
  rowKey = 'id',
  pageSize = 50,
  topLayer,
  gridStyles,
  gridHeight = 385,
  handlePageSize,
  pageOption = [10, 20, 50, 100],
  onRowClick,
  footer,
}) => {
  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({
    page: 0,
    pageSize: pageSize,
  })

  const handlePageChange = (newPage: number) => {
    setPaginationModel((prev) => ({ ...prev, page: newPage }))
    handlePageSize && handlePageSize(newPage, paginationModel.pageSize)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPaginationModel({ page: 0, pageSize: newPageSize })
    handlePageSize && handlePageSize(0, newPageSize)
  }

  const dataGridColumns: GridColDef[] = React.useMemo(() => {
    if (!columns || columns.length === 0) {
      console.warn('No columns provided to DatagridTemplate')
      return []
    }
    return columns.map((column) => ({
      field: column.id,
      headerName: column.label,
      headerClassName: 'text-locaGreen border-none bg-locaGreen/10',
      flex: 1,
      renderCell: column.renderCell,
    }))
  }, [columns])

  const rows = React.useMemo(() => {
    if (!data || data.length === 0) {
      console.warn('No data provided to DatagridTemplate')
      return []
    }
    return data.map((row) => ({
      id: row[rowKey],
      ...row,
    }))
  }, [data, rowKey])

  if (!columns || columns.length === 0) {
    return <div>Error: No columns provided</div>
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>
  }

  return (
    <div>
      {topLayer && <div>{topLayer}</div>}
      <DataGrid
        columns={dataGridColumns}
        checkboxSelection
        rows={rows}
        pageSizeOptions={pageOption}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => {
          handlePageChange(model.page)
          handlePageSizeChange(model.pageSize)
        }}
        pagination
        onRowClick={(params) => onRowClick && onRowClick(params.row)}
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            fontWeight: 'bold',
            borderRadius: '120px',
            textAlign: 'center',
          },
          '&.Mui-checked': {
            color: 'green',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-cell': {
            // paddyY: "40rem",
          },
          '& .MuiCheckbox-root': {
            color: 'green',
          },
          '& .Mui-checked': {
            color: 'green',
          },
          '& .MuiDataGrid-row': {
            cursor: 'pointer',
            height: '13rem',
            // marginBottom: '10px',
            // marginTop: '10px',
            '&:hover': {
              backgroundColor: 'dovegray',
            },
            '& .MuiDataGrid-cell': {
              backgroundColor: 'transparent',
            },
          },
          ...gridStyles,
        }}
        style={{ height: gridHeight, fontSize: '17px', color: 'gray' }}
      />
      {/* {footer && <div>{footer}</div>} */}
    </div>
  )
}

export default DatagridTemplate
