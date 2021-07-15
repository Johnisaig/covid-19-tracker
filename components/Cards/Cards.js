import React from 'react'

import styled from 'styled-components'

export default function Cards({
  title = 'TOTAL RECOVERED',
  content = '200,340',
  backgroundColor,
}) {
  return (
    <MainContainer backgroundColor={backgroundColor}>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-content">{content}</div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 400px;
  height: 250px;
  margin: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;

  .card-title {
    font-weight: bold;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    > h1 {
      color: #d6d6d6;
      font-size: 30px;
    }
  }

  .card-content {
    text-align: center;
    align-items: center;
    height: 50%;
    font-size: 50px;
    font-weight: bold;
    color: #e2e2e2;
  }
`
