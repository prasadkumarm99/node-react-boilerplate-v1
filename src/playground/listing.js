let count = 0
let list = []

const add = () => {
  let text = document.getElementById("item").value
  if (text.length != 0)
  { list.push(text) }
  else
  { alert("Please fill the empty field.") }
  count = list.length
  document.getElementById("item").value = ""
  render()
}

const onEnter = (e) => {
  if (e.keyCode == 13) {
    add()
  }
}

const pick = () => {
  const picker = Math.round(Math.random() * (count-1))
  alert("You have got " + list[picker])
}

const reset = () => {
  count = 0;
  list = []
  render()
}

const render = () => {
  let template = 
    <div>
      <h2>The listing app</h2>
      <h3>{count != 0 ? "The number of elements are: " + count : "No elements"}</h3>
      <ol>
        {
          list.map((element, c=0) => {
            const temp = c
            c++
            return <li key = {temp}>{element}</li>
          })
        }
      </ol>
      <input type="text" id="item" onKeyUp={onEnter}></input>
      <button onClick={add}>Add </button>
      <button disabled={list.length>0 ? false : true} onClick={reset}>Reset</button>
      <br></br>
      <button disabled={list.length>=2 ? false : true} onClick={pick}>Pick Item</button>
    </div>

    ReactDOM.render(template, document.getElementById("root"))
}
render()