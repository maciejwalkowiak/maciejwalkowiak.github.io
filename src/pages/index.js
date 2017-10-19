import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Toolbox from '../components/Toolbox'
import ArticleList from '../components/ArticleList'
import Container from '../components/Container'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PageTop from '../components/PageTop';

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        return (
            <div>
                <Helmet title={get(this, 'props.data.site.siteMetadata.title')}/>
                <PageTop>
                    <Hero text="Hi. My name is Maciej. <br/>I am a full stack software engineer living in&nbsp;Berlin."/>
                </PageTop>
                <Container>
                    <main>
                        <Toolbox/>
                        <ArticleList posts={posts}/>
                    </main>
                    <Footer />
                </Container>
            </div>

        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
        siteMetadata {
        title
    }
    }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
        node {
        excerpt
        frontmatter {
        path
        date(formatString: "DD MMMM, YYYY")
    }
        frontmatter {
        title
    }
    }
    }
    }
    }
    `
