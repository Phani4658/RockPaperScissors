import {
  ResultContainer,
  PlayerName,
  PlayerChoice,
  ChoiceCard,
  ChoiceContainer,
  DisplayText,
  PlayAgain,
} from './styledComponents'

const GameResult = props => {
  const {choices, displayText, updatePlayingState} = props

  return (
    <ResultContainer>
      <ChoiceContainer>
        <ChoiceCard>
          <PlayerName>You</PlayerName>
          <PlayerChoice src={choices[1].imageUrl} alt="your choice" />
        </ChoiceCard>
        <ChoiceCard>
          <PlayerName>Opponent</PlayerName>
          <PlayerChoice src={choices[0].imageUrl} alt="opponent choice" />
        </ChoiceCard>
      </ChoiceContainer>
      <DisplayText>{displayText}</DisplayText>
      <PlayAgain onClick={updatePlayingState}>Play Again</PlayAgain>
    </ResultContainer>
  )
}

export default GameResult
