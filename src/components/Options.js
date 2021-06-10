import React from "react"
import Option from "./Option"

const Options = (props) => (
  <div className="container">
    <div className="panel">
      <p className="label">Your Options</p>
      <button 
        className="button button--link"
        onClick={props.removeAll}
      >
        Remove All
      </button>
    </div>
      { props.msg === "Enter some options to get started!" && <p className="label label--msg">{props.msg}</p> }
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            removeOption={props.removeOption}
            option={option}
          />
        ))
      }
      { props.msg === "Option is already exists." && <p className="label label--msg">{props.msg}</p> }
      { props.msg === "Please fill the empty field." && <p className="label label--msg">{props.msg}</p> }
  </div>
)

export default Options