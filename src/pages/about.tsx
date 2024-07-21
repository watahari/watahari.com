import * as React from "react"
import Layout from '../components/layout'
import License from '../components/license'
import Timeline from '../components/timeline'
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <License />
      <Timeline />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>watahari.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes" />
  </>
)
