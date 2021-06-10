class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.onPick = this.onPick.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.addOption = this.addOption.bind(this)
    this.removeOption = this.removeOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
    const options = JSON.parse(json)
    console.log(options)
    if (options) {
      this.setState(() => ({ options }))
    }
  } catch (e) {}

    
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      console.log(json)
      localStorage.setItem("options", json)
    }
  }
  onPick() {
    const index = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[index])
  }
  removeAll() {
    this.setState(() => ({options: []}))
  }
  removeOption(item) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return option !== item
        })
      }))
  }
  addOption(option) {
    if (option) {
      this.setState((prevState) => {
        if (prevState.options.indexOf(option) == -1) {
            return {
              options: prevState.options.concat(option)
            }
        }
        else {
          alert("Option is already exists.")
        }
      })
    }
    else {
      alert("Please fill the empty field.")
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
          options={this.state.options} 
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ["First Option", "Second Option"]
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.onPick}
        disabled={!props.status}
      >
        What should I pick
      </button>
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button 
        onClick={(e) => {
          props.removeOption(props.option)
        }}
      >
        Remove
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.removeAll}>Remove All</button>
    {
      props.options.map((option) => (
        <Option 
          key={option} 
          removeOption={props.removeOption}
          option={option}
        />
      ))
    }
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
  }
  add(e) {
    if (e.keyCode == undefined) {
      const option = document.getElementById("option").value
      this.props.addOption(option)
      document.getElementById("option").value = ""
    }
    else if (e.keyCode == 13) {
      const option = document.getElementById("option").value
      this.props.addOption(option)
      document.getElementById("option").value = ""
    }
  }
  render() {
    return (
      <div>
        <input
          id="option"
          type="text"
          onKeyUp={this.add}
        ></input>
        <button onClick={this.add}>Add Option</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"))