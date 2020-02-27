import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoadableOsc from "../components/loadableosc"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p />
    <LoadableOsc freq="152.4"/>
    <p />
    <LoadableOsc freq="203.2"/>
    <p />
    <LoadableOsc freq="101.6"/>
    <p />
  </Layout>
)

export default IndexPage
