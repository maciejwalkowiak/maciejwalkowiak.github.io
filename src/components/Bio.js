import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  line-height: 1.2rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    border-radius: 50%;
  }
  
  p {
    margin-bottom: 0;
  }
`

class Bio extends React.Component {
    render() {
        return (
            <Container>
                <img
                    src="https://pbs.twimg.com/profile_images/453170120819351552/HzuP1CoL_400x400.jpeg"
                    alt={`Kyle Mathews`}
                    style={{
                        float: 'left',
                        marginBottom: 0,
                        marginRight: 20,
                        width: 80,
                        height: 80
                    }}
                />
                <p>
                    Written by <strong>Maciej Walkowiak</strong> who lives and works in Berlin building useful things.{' '}
                    <br/>
                    <a href="https://twitter.com/kylemathews">
                        You should follow him on Twitter
                    </a>
                </p>
            </Container>
        )
    }
}

export default Bio
