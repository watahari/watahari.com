import * as React from "react"
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import Me from '../components/me'
import GiveMe from '../components/giveMe'
import Sake from '../components/sake'
import { StaticImage } from "gatsby-plugin-image"
import type { HeadFC, PageProps } from "gatsby"

const imageStyles = {
  minWidth: "60%",
  maxWidth: "80%",
}

const IndexPage: React.FC<PageProps> = () => {
  const one = 1;
  return (
    <Layout>
      <StaticImage src="../images/top.jpeg" alt="eye-catch image" style={imageStyles} />
      <PageTitle pageTitle="watahari.com" />
      <hr style={{margin: "3rem"}}/>
      <Me />
      <GiveMe />
      <Sake />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>watahari.com</title>
