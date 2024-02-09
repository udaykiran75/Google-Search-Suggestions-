import './index.css'

const Addsuggestion = props => {
  const {details,onaddsuggestion} = props
  const {suggestion} = details
  const quickSearh = () => {
    onaddsuggestion(suggestion)
  }
  return (
    <li>
      <div className="suggestion-item">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="icon" onClick={quickSearh}
        />
      </div>
    </li>
  )
}

export default Addsuggestion
