import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import Projects from '../components/projects'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
  </Layout>
)

export default IndexPage
