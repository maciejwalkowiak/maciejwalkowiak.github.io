import React from 'react'
import styled from 'styled-components'
import Link from "gatsby-link"

const Container = styled.ul`
  padding-left: 20px;
  line-height: 1.25rem;
  
  li {
    margin-bottom: 10px;
    font-weight: normal;
    color: #0288D1;
    
    time {
      display: block;
      color: #757575;
      font-size: 0.75rem;
    }
  }
`;

const ArticleList = ({posts}) => (
    <article>
        <h3>Recent blog posts</h3>

        <Container>
            {posts.map(post => {
                if (post.node.path !== '/404/') {
                    return (
                        <li key={post.node.frontmatter.path}>
                            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
                            <time data-datetime={post.node.frontmatter.date}>{post.node.frontmatter.date}</time>
                        </li>
                    )
                }
            })}
        </Container>
    </article>
);

export default ArticleList;