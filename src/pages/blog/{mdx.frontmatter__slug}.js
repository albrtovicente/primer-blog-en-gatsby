import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
    return(
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <small>{data.mdx.frontmatter.date}</small>
            <div>{children}</div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
    frontmatter {
        title
        date
        }
    }
}
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default BlogPost