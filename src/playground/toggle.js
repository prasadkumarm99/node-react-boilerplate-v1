const title = "Visibility toggle"
let status = "show"

const show = () => {
  if (status == "hide")
    status = "show"
  else
    status = "hide"
  render()
}

const render = () => {
  const job = 
    <div>
      <h1>{title}</h1>
      <button onClick={show}>
        {status == "show" ? "Show Details" : "Hide Details"}
      </button>
      {status == "hide" && (
        <div>
          <p>Hello, This is quoted text</p>
        </div>
      )}
    </div>
  ReactDOM.render(job, document.getElementById("root"))
}
render()