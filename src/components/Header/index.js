import {
  HeaderOutline,
  GameName,
  ScoreBg,
  ScoreHeading,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderOutline>
      <GameName>Rock Paper Scissors</GameName>
      <ScoreBg>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreBg>
    </HeaderOutline>
  )
}

export default Header
