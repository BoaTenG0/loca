import React from 'react'
import { Form } from 'antd'

export const EditableContext = React.createContext<any>(null)
export const EditableRow = ({ index, ...props }: any) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}
