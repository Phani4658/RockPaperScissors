import {Component} from 'react'
import {BackgroundContainer, ButtonContainer} from './styledComponents'
import Header from '../Header'
import OptionContainer from '../OptionContainer'
import RulesPopup from '../RulesPopup'
import GameResult from '../GameResult'

class HomePage extends Component {
  state = {score: 0, isPlaying: true, choices: [], displayText: ''}

  decideGameResults = playerChoice => {
    const {choicesList} = this.props
    const {score} = this.state
    const computerChoice = Math.floor(Math.random() * 3)
    const computerOption = choicesList[computerChoice].id
    const selectedId = playerChoice.id
    const playerWonCases =
      (selectedId === 'ROCK' && computerOption === 'SCISSORS') ||
      (selectedId === 'PAPER' && computerOption === 'ROCK') ||
      (selectedId === 'SCISSORS' && computerOption === 'PAPER')

    let currentScore = score
    const currentChoices = [choicesList[computerChoice], playerChoice]
    let currentText = ''

    if (playerWonCases) {
      currentScore += 1
      currentText = 'YOU WON'
    } else if (selectedId === computerOption) {
      currentScore += 0
      currentText = 'IT IS DRAW'
    } else {
      currentScore -= 1
      currentText = 'YOU LOSE'
    }

    this.setState({
      score: currentScore,
      isPlaying: false,
      choices: currentChoices,
      displayText: currentText,
    })
  }

  updatePlayingState = () => {
    this.setState({isPlaying: true})
  }

  render() {
    const {score, isPlaying, choices, displayText} = this.state
    const {choicesList} = this.props
    return (
      <BackgroundContainer>
        <Header score={score} />
        {isPlaying && (
          <OptionContainer
            choicesList={choicesList}
            decideGameResults={this.decideGameResults}
          />
        )}
        {!isPlaying && (
          <GameResult
            choices={choices}
            displayText={displayText}
            updatePlayingState={this.updatePlayingState}
          />
        )}
        <ButtonContainer>
          <RulesPopup />
        </ButtonContainer>
      </BackgroundContainer>
    )
  }
}

export default HomePage
