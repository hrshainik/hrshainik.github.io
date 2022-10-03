import React from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/Seo"

const NotFound = () => {
  return (
    <Layout>
      <h1>Not Found</h1>
    </Layout>
  )
}

export default NotFound

export const Head = () => <SEO title="Not Found - Habibur Rahman" />
