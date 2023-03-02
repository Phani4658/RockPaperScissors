import styled from 'styled-components'

export const ResultContainer = styled.div`
  margin: 250px auto;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin: 120px auto;
  }
`

export const PlayerName = styled.h1`
  color: #fff;
`

export const PlayerChoice = styled.img`
  width: 50%;
`

export const ChoiceCard = styled.div`
  text-align: center;
`

export const ChoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DisplayText = styled.p`
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
`

export const PlayAgain = styled.button`
  outline: none;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  width: 140px;
  font-family: 'Bree serif';
  padding: 5px 15px;
  margin: auto;
  cursor: pointer;
`
