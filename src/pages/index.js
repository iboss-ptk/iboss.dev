import React from "react"
import SEO from "../components/seo"

import { Link, graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <SEO title="Home" />
      <h1>I'Boss blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogIndex
