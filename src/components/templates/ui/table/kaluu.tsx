import * as React from 'react'
import Box from '@mui/joy/Box'
import Table from '@mui/joy/Table'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import Checkbox from '@mui/joy/Checkbox'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link'
import Tooltip from '@mui/joy/Tooltip'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import { visuallyHidden } from '@mui/utils'
import { ArrowDown, ArrowLeft2, ArrowRight2, Filter, SearchNormal, Trash } from 'iconsax-react'
import { Button, TextField } from '@mui/material'
import InputsTemplateNew from '../input/input'

interface Data {
  [key: string]: number | string | any
}

interface Column {
  id: string
  label: string
  numeric?: boolean
  render?: (row: any) => React.ReactNode
}

interface TableProps {
  columns: Column[]
  data: Data[]
  title?: string
  type?: string
  search?: boolean
  filter?: boolean
}

interface EnhancedTableToolbarProps {
  numSelected: number
  title: string | undefined
  searchQuery: string
  setSearchQuery: (query: string) => void
  type: string | undefined
  search?: boolean | undefined
  filter?: boolean
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, title = '', searchQuery, setSearchQuery, type = 'text', filter, search = true } = props
  return (
    <Box
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          py: 2,
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          borderTopLeftRadius: 'var(--unstable_actionRadius)',
          borderTopRightRadius: 'var(--unstable_actionRadius)',
        },
        numSelected > 0 && {
          bgcolor: 'background.level1',
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} component="div">
          {numSelected} selected
        </Typography>
      ) : (
        // <Typography level="body-lg" sx={{ flex: '1 1 100%' }} id="tableTitle" component="div">
        //   {title}
        // </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          {/* <TextField
            type={type}
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            sx={{ marginRight: '16px', width: '200px' }}
          /> */}
          {search && (
            <InputsTemplateNew
              classname="rounded-lg"
              afterIcon={<SearchNormal size={18} />}
              placeholder="Search"
              currentValue={searchQuery}
              handleChange={(e) => setSearchQuery(e.target.value)}
              height={35}
            />
          )}
          {filter && (
            <Tooltip title="Filter list">
              <IconButton size="sm" variant="outlined" color="neutral">
                <Filter />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      )}
      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton size="sm" color="danger" variant="solid">
            <Trash size={18} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

const GenericTable: React.FC<TableProps> = ({ columns, data, title, type, search, filter }) => {
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = React.useState<string>(columns[0]?.id)
  const [selected, setSelected] = React.useState<readonly string[]>([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n[columns[0].id].toString())
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected)
  }

  const handleChangePage = (newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
    setRowsPerPage(parseInt(newValue!.toString(), 10))
    setPage(0)
  }

  const filteredRows = data.filter((row) => {
    return Object.values(row).some((value) => String(value).toLowerCase().includes(searchQuery.toLowerCase()))
  })

  const getComparator = (order: 'asc' | 'desc', orderBy: string) => {
    return order === 'desc'
      ? (a: Data, b: Data) => (b[orderBy] < a[orderBy] ? -1 : 1)
      : (a: Data, b: Data) => (a[orderBy] < b[orderBy] ? -1 : 1)
  }

  const sortedRows = [...filteredRows].sort(getComparator(order, orderBy))
  const displayedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Sheet variant="outlined" invertedColors sx={{ width: '100%', border: 'none', px: 2 }}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        title={title}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        type={type}
        search={search}
        filter={filter}
      />

      <Table
        aria-labelledby="tableTitle"
        //   borderAxis="bothBetween"
        //   stripe="odd"
        // hoverRow
        stickyHeader
        sx={{
          '& thead th:first-of-type': {
            borderRadius: '10px 0 0 0',
            width: '40px',
            paddingLeft: '8px',
            paddingRight: '0px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '8px',
              backgroundColor: '#E8F5F1',
              borderTopLeftRadius: '8px',
            },
          },
          '& thead th:last-of-type': {
            borderRadius: '0 10px 0 0',

            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '8px',
              backgroundColor: '#E8F5F1',
              borderTopRightRadius: '8px',
            },
          },
          '& thead th': {
            backgroundColor: '#E8F5F1',
            color: '#126B53',
            fontFamily: 'Poppins',
            fontWeight: 500,
            padding: '10px 0px 10px 5px',
            fontSize: 10,
            // textAlign: "center",

            zIndex: 0,
          },

          '& tbody td:first-of-type': {
            width: '40px',
            paddingLeft: '8px',
            paddingRight: '0px',
          },
          '& tbody td': {
            padding: '10px',
            fontFamily: 'Poppins',
            fontWeight: 300,
            // textAlign: "center",
            fontSize: 10,
          },
        }}
        // sx={(theme) => ({
        //   '& > thead th': {
        //     backgroundColor: '#E8F5F1',
        //   },
        //   '& th': {
        //     fontFamily: 'Poppins',
        //     padding: '15px',
        //   },
        //   '& thead th:first-of-type': {
        //     width: '40px',
        //     paddingLeft: '15px',
        //     paddingRight: '0px',
        //   },
        //   '& tbody td:first-of-type': {
        //     width: '40px',
        //     paddingLeft: '15px',
        //     paddingRight: '0px',
        //   },
        //   '& td': {
        //     padding: '15px',
        //     fontFamily: 'Poppins',
        //     // textAlign: "center"
        //   },
        // })}
      >
        <thead>
          <tr style={{ borderRadius: 10 }}>
            <th>
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < filteredRows.length}
                checked={filteredRows.length > 0 && selected.length === filteredRows.length}
                onChange={handleSelectAllClick}
                slotProps={{
                  input: {
                    'aria-label': 'select all items',
                  },
                }}
                size="sm"
                sx={{
                  verticalAlign: 'sub',
                  '& .MuiSvgIcon-root': { fontSize: 10 },
                }}
              />
            </th>
            {columns.map((column) => (
              <th key={column.id} aria-sort={orderBy === column.id ? (order === 'asc' ? 'ascending' : 'descending') : undefined}>
                <Link
                  underline="none"
                  style={{ color: '#126B53' }}
                  component="button"
                  onClick={(event) => handleRequestSort(event, column.id)}
                >
                  {column.label}
                  {orderBy === column.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {displayedRows.map((row, index) => {
            const isItemSelected = selected.includes(row[columns[0].id].toString())
            return (
              <tr key={index} onClick={() => handleClick(row[columns[0].id].toString())} role="checkbox" aria-checked={isItemSelected}>
                <th scope="row">
                  <Checkbox checked={isItemSelected} onChange={() => handleClick(row[columns[0].id].toString())} size="sm" />
                </th>
                {columns.map((column) => (
                  <td key={column.id}>{column.render ? column.render(row) : row[column.id]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length + 1} style={{ backgroundColor: '#fff', paddingBlock: 15 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
                <FormControl orientation="horizontal" size="sm">
                  <FormLabel sx={{ paddingRight: 1, fontSize: 12, color: '#5B5B5B', fontFamily: 'Poppins' }}>Show:</FormLabel>
                  <Select
                    onChange={handleChangeRowsPerPage}
                    value={rowsPerPage}
                    sx={{
                      width: 70,
                      borderRadius: 10,
                      '& .MuiSelect-select': {
                        paddingY: '4px',
                      },
                    }}
                  >
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                  </Select>
                  <FormLabel sx={{ paddingLeft: 1, fontSize: 12, color: '#5B5B5B', fontFamily: 'Poppins' }}>Entries</FormLabel>
                </FormControl>
                <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                  <IconButton
                    size="sm"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ borderRadius: '4px' }}
                  >
                    <ArrowLeft2 size={16} />
                  </IconButton>
                  {Array.from({ length: Math.ceil(filteredRows.length / rowsPerPage) }, (_, i) => (
                    <IconButton
                      key={i}
                      size="sm"
                      variant={page === i ? 'solid' : 'outlined'}
                      color={page === i ? 'primary' : 'neutral'}
                      onClick={() => handleChangePage(i)}
                      sx={{
                        borderRadius: '4px',
                        minWidth: '32px',
                        backgroundColor: page === i ? '#199675' : '#808080',
                        // color: page === i ? "#199675" : "#808080"
                      }}
                    >
                      {i + 1}
                    </IconButton>
                  ))}
                  <IconButton
                    size="sm"
                    variant="outlined"
                    disabled={page >= Math.ceil(filteredRows.length / rowsPerPage) - 1}
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ borderRadius: '4px' }}
                  >
                    <ArrowRight2 size={16} />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot>
        {/* <tfoot>
          <tr>
            <td colSpan={columns.length + 1} style={{backgroundColor: "#fff", paddingBlock: 15}}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
                <FormControl orientation="horizontal" size="sm">
                  <FormLabel sx={{paddingRight: 1, fontSize: 12, color: "#5B5B5B", fontFamily: "Poppins"}}>Show:</FormLabel>
                  <Select onChange={handleChangeRowsPerPage} value={rowsPerPage} sx={{width: 70, borderRadius: 20}}>
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                  </Select>
                  <FormLabel sx={{paddingLeft: 1, fontSize: 12, color: "#5B5B5B", fontFamily: "Poppins"}}>Entries</FormLabel>
                </FormControl>
                <Typography>
                  {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredRows.length)} of {filteredRows.length}
                </Typography>
                <Box>
                  <IconButton size="sm" variant="outlined" disabled={page === 0} onClick={() => handleChangePage(page - 1)}>
                    <ArrowLeft2 />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page >= Math.ceil(filteredRows.length / rowsPerPage) - 1}
                    onClick={() => handleChangePage(page + 1)}
                  >
                    <ArrowRight2 />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot> */}
      </Table>
    </Sheet>
  )
}

export default GenericTable
