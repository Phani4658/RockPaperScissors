import styled from 'styled-components'

export const HeaderOutline = styled.div`
  border: 2px solid #fff;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin: 2em auto 0 auto;
  }
`

export const GameName = styled.h1`
  color: #fff;
  width: 100px;
  font-family: 'Bree Serif';
  font-weight: 700;
  font-size: 28px;
`

export const ScoreBg = styled.div`
  background-color: #fff;
  border-radius: 13px;
  width: 200px;
  padding: 10px;
  text-align: center;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Bree Serif';
  margin-bottom: 3px;
`

export const Score = styled.p`
  text-align: center;
  margin: 3px;
  font-size: 36px;
  color: #223a5f;
  font-weight: 600;
  font-family: 'Roboto';
`
