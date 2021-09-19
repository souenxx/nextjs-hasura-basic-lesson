import { VFC } from 'react'
import { CreateUser } from '../components/CreateUser'
import { Layout } from '../components/Layout'

const Hooksmemo: VFC = () => {
  return (
    <Layout title="Hools memo">
      <CreateUser />
    </Layout>
  )
}

export default Hooksmemo
