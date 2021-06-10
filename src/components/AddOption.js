import React from "react"

export default class AddOption extends React.Component {
  add = (e) => {
    if (e.keyCode == undefined) {
      const option = document.getElementById("option").value.trim()
      this.props.addOption(option)
      document.getElementById("option").value = ""
    }
    else if (e.keyCode == 13) {
      const option = document.getElementById("option").value.trim()
      this.props.addOption(option)
      document.getElementById("option").value = ""
    }
  }
  render() {
    return (
      <div className="container">
        <div className="panel panel--add">
          <input
            className="input"
            id="option"
            type="text"
            onKeyUp={this.add}
          ></input>
          <button 
            className="button"
            onClick={this.add}
          >
            Add Option
          </button>
        </div>
      </div>
    )
  }
}