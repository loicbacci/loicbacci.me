import Link from 'next/link'
import Layout from '../components/Layout'

const Custom404 = () => {
  return (
    <Layout noHeader>
      <div className="m-auto p-0 text-center align-middle">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Custom404