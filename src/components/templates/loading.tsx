import { Flex, Spin } from 'antd'

export default function Loading() {
  return (
    <Flex justify="center" align="center" style={{ height: '100vh', width: '100vw' }}>
      <Spin tip="Loading" size="large" />
    </Flex>
  )
}
