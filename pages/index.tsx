import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'

export const runtime = 'experimental-edge'

export default function Index({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <Intro />
        <h1 className="font-bold">Welcome</h1>
      </Container>
    </Layout>
  )
}
