import { ConfigProvider, Table } from 'antd'
import React from 'react'
import { EditableRow } from './editablerow'
import { EditableCell } from './editablecell'

interface props {
  columns: any
  data: any
  rowKey?: any
  pageSize: number
  topLayer?: any
  gridStyles?: any
  gridHeight?: number
  handlePageSize?: (e: any, a: any) => void
  pageOption?: string[]
  footer?: any
  onRow?: (record: any) => { onClick: () => void }
}

const DatagridTemplate = ({
  rowKey,
  footer,
  columns,
  data,
  pageSize = 50,
  topLayer,
  gridStyles,
  gridHeight = 385,
  handlePageSize,
  pageOption = ['10', '20', '50', '100'],
  onRow,
}: props) => {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  }

  return (
    <div>
      {topLayer && topLayer}
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: '#E8F5F1',
              headerBorderRadius: 10,
              headerColor: ' #126B53',
              cellPaddingBlock: 20,
              borderRadius: 10,
            },
          },
        }}
      >
        <Table
          components={components}
          // rowClassName={() => "editable-row"}
          // bordered
          columns={columns}
          rowClassName={() => ' border-transparent'} // Remove row borders
          className=" border-transparent" // Remove table border
          dataSource={data}
          rowKey={rowKey ?? 'id'}
          style={{ ...gridStyles }}
          pagination={{
            pageSize: pageSize,
            onChange: handlePageSize,
            pageSizeOptions: pageOption,
            position: ['bottomRight'],
          }}
          scroll={{ y: gridHeight }}
          footer={footer}
          onRow={onRow}
        />
      </ConfigProvider>
    </div>
  )
}

export default DatagridTemplate
