// Control statements in JSX

const details1 = {
  name: "Raju",
  email: "example@gmail.com",
  phone: 9876543210
}

const details2 = {
  name: null,
  email: null,
  phone: 9876543210
}
const namer = function(details)
{
  if(details.name){
    return details.name
  } else{
    return "Unknown"
  }
}

const template1 = 
  <div>
    <h1>KnowIT Learnings Details Template 1</h1>
    <p>Name: {namer(details1)}</p>
    <p>Email: {details1.email ? details1.email : "Unknown"}</p>
    <p>Phone: {details1.phone}</p>
  </div>

const template2 = 
  <div>     
    <h1>KnowIT Learnings Details Template 2</h1>
    <p>Name: {namer(details2)}</p>
    <p>Email: {details2.email ? details2.email : "Unknown"}</p>
    <p>Phone: {details2.phone}</p>
  </div>

ReactDOM.render(template1, document.getElementById("root"))
ReactDOM.render(template2, document.getElementById("sub"))