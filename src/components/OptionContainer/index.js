import {OptionsContainer} from './styledComponent'
import OptionCard from '../OptionCard'

const OptionContainer = props => {
  const {choicesList, decideGameResults} = props

  return (
    <OptionsContainer>
      {choicesList.map(choice => (
        <OptionCard
          key={choice.id}
          choice={choice}
          decideGameResults={decideGameResults}
        />
      ))}
    </OptionsContainer>
  )
}

export default OptionContainer
