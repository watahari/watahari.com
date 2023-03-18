import * as React from "react"
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Timeline />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>watahari.com</title>
