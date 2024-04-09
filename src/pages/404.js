import * as React from "react"
import Layout from "../components/layout"

const NotFoundPage = function () {

  return (
    <Layout>
      <h1>Página no encontrada</h1>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>No encontrada</title>
