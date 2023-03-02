import styled from 'styled-components'

export const OptionButton = styled.button`
  color: black;
  background-color: transparent;
  outline: none;
  border: none;
  width: 40%;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`

export const OptionImage = styled.img`
  width: 100%;
`
