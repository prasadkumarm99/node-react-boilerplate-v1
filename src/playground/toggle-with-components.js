class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.state = {
      button: "Show Data",
      data: "!",
      status: false
    }
  }

  onToggle() {
    this.setState((prevStatus) => {
      if (prevStatus.status) {
        return {
          data: "!",
          status: !prevStatus.status,
          button: "Show Data"
        }
      }
      else {
        return {
          data: "Hi, There you have it.",
          status: !prevStatus.status,
          button: "Hide Data"
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onToggle}>{this.state.button}</button>
        <p>{this.state.data}</p>
      </div>
    )
  }
}

ReactDOM.render(<Toggle/>, document.getElementById("root"))