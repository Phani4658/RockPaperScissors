import {OptionButton, OptionImage} from './styledComponents'

const OptionCard = props => {
  const {choice, decideGameResults} = props
  const {id, imageUrl} = choice

  const onClickOptionCard = () => {
    decideGameResults(choice)
  }
  return (
    <OptionButton
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onClickOptionCard}
    >
      <OptionImage src={imageUrl} alt={id} />
    </OptionButton>
  )
}

export default OptionCard
