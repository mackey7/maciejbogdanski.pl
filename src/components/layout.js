import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <Navigation />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
