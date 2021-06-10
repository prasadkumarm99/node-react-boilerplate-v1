import React from "react"

const Action = (props) => (
  <div className="container">
    <button 
      onClick={props.onPick}
      disabled={!props.status}
      className="action__button"
    >
      What Should I Pick
    </button>
  </div>
)

export default Action