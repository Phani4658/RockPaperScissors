import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {RulesButton, PopupContainer, PopupImage} from './styledComponents'

const RulesPopup = () => (
  <div>
    <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
      {close => (
        <PopupContainer>
          <RiCloseLine onClick={() => close()} />
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupContainer>
      )}
    </Popup>
  </div>
)

export default RulesPopup
