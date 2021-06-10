import React from "react"
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    isSelected: undefined,
    msg: "Enter some options to get started!"
  }
  onPick = () => {
    const index = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({ isSelected: this.state.options[index] }))
  }
  removeAll = () => {
    this.setState(() => ({options: [], msg: "Enter some options to get started!"}))
  }
  removeOption = (item) => {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return option !== item
        })
      }))
  }
  addOption = (option) => {
    if (option) {
      this.setState((prevState) => {
        if (prevState.options.indexOf(option) == -1) {
          return {
            options: prevState.options.concat(option)
          }
        }
        else {
          return {
          msg: "Option is already exists."
          }
        }
      })
    }
    else {
      this.setState(() => ({ msg: "Please fill the empty field." }))
    }
  }
  onOkay = () => {
    this.setState(() => ({ isSelected: undefined }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {

      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
      this.setState(() => ({msg: ""}))
    }
  }
  render() {
    const title = "Indecision App"
    const subtitle = "Welcome to decision maker."
    return (
      <div>
        <Header 
          title={title} 
          subtitle={subtitle} 
        />
        <Action 
          onPick={this.onPick}
          status={this.state.options.length >= 2}
        />
        <Options 
          msg = {this.state.msg}
          options={this.state.options} 
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption 
          addOption={this.addOption}
        />
        <OptionModal 
          isSelected={this.state.isSelected}
          onOkay={this.onOkay}
        />
      </div>
    )
  }
}