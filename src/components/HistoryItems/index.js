import './index.css'

const HistoryItems = props => {
  const {historyDetails, onClickedDeleteBtn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickedDeleteButton = () => {
    onClickedDeleteBtn(id)
  }

  return (
    <li className="list">
      <div className="left-container">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="text-container">
          <img src={logoUrl} alt="domain logo" className="img" />
          <p className="text">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="right-container">
        <button
          type="button"
          data-testid="delete"
          className="btn"
          onClick={onClickedDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
