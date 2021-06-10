const uname = "Prasad Kumar"

const firstName = (name) => name.split(" ")[0]

const template = 
  <div>
    <h2>{firstName(uname)}</h2>
  </div>

ReactDOM.render(template, document.getElementById("root"))