import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import PageTop from '../components/PageTop'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Hero from '../components/Hero'
import styled from 'styled-components';

const Paragraph = styled.p`
    line-height: 1.5rem;
    font-size: 1rem;
    color: #212121;
`;

const Date = styled.p`
  font-size: 0.8rem;
  display: block;
  margin: 10px 0;
  color: #757575;
  
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
        <div>
            <PageTop>
                <Hero text={post.frontmatter.title} />
            </PageTop>
      <Container>

        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Date>
          {post.frontmatter.date}
        </Date>
        <Paragraph dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <Bio />
          <Footer />
      </Container>
        </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
