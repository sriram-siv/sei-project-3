import React from 'react'

const QuestForm = (props) => {
  const { name, theme, estTime } = props.questFormData
  const { handleQuestFormChange, handleQuestSubmit, themes } = props


  return (
    <>
      <form className="form-container quest">
        <h5>Quest Details</h5>
        <div className="quest-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={handleQuestFormChange}
              placeholder="Quest Name"/>
          </div>
          <div className="form-group">
            <select className="form-control" id="theme" value={theme} onChange={handleQuestFormChange}>
              <option disabled value="theme">Theme</option>
              {themes.map(theme => 
                <option key={theme} value={theme}>{theme}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="estTime"
              value={estTime}
              onChange={handleQuestFormChange}
              placeholder="Est. Duration (minutes)"/>
          </div>
        </div>
        <div className="btn-submit-quest">
          <button onClick={handleQuestSubmit}>Save Quest</button>
        </div>
      </form>
    </>
  )
}

export default QuestForm