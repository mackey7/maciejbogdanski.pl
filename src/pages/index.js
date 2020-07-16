import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
