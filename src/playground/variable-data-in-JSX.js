// Using variables in JSX

let name_ = "Raju"
let email = "raju.m@gmail.com"
let phone = 9876543210

const template = 
  <div>
    <h1>KnowIT Learnings Details</h1>
    <p>Name: {name_}</p>
    <p>Email: {email}</p>
    <p>Phone number: {phone}</p>
  </div>

const target = document.getElementById("root")
ReactDOM.render(template, target)