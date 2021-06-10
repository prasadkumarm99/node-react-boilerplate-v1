import React from "react"

const Option = (props) => (
  <div name="1" className="container">
    <div name="2" className="panel option--panel">
      <p className="label">{props.option}</p>
      <button 
        className="button button--link"
        onClick={(e) => { props.removeOption(props.option) }}
      >
        Remove
      </button>
    </div>
  </div>
)

export default Option