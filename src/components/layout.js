import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, 
    heading, 
    navLinks, 
    navLinkItem,
    navLinkText
} from '../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`query {
        site {
        siteMetadata {
            title
            description
            siteUrl
            iconUrl
        }
        }
    }`)
return (
<div className='container'>
    <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
    </header>

    <StaticImage src='../images/icon.png' alt='logotipo' width={100} height={100}/>
    <nav>
    <ul className={navLinks}>
        <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
        <li className={navLinkItem}><Link className={navLinkText} to="/sobremi">Sobre Mi</Link></li>
        <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
        <li className={navLinkItem}><Link className={navLinkText} to="/donde-estamos">Dónde Estamos</Link></li>
    </ul>
    </nav>
    <main>
    <h1 className={heading}>{pageTitle}</h1>
    {children}
    <footer><p className='footer'>&copy; Carolina {new Date().getFullYear() }
    < a className={navLinkText} href='https://github.com/carolinacc2323'>Github</a></p>
    </footer>
    </main>
</div>
)
}


export default Layout