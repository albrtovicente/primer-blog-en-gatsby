import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const SobreMi = () => {
return (
    <Layout pageTitle='Sobre mi'>
        <p>Soy Aries obviamente</p>
    </Layout>
)
}


export const Head = () => <Seo title="Sobre mí" />

export default SobreMi