// {} importo algo dentro de algo
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='Mi página de inicio'>
    <p>Esta es la página de inicio de Aranjuez, ha cambiado de hora y hace frío</p>
    <StaticImage src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large' alt='imagen perrro'/>
    <StaticImage src='../images/shinchan.jpg' alt='programador'/>
  </Layout>
)
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />
// Step 3: Export your component
export default IndexPage



// <main>
  //   <h1>Welcome to my Gatsby site!</h1>
  //   <nav>
  //     <Link to='/'>Home</Link>
  //     <Link to='/sobremi'>Sobre Mi</Link>
  //     <Link to='/blog'>Blog</Link>
  //   </nav>
  //   <p>I'm making this by following the Gatsby Tutorial.</p>
  // </main>