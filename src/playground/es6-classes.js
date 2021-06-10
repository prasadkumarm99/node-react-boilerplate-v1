class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `Hi, I am ${this.name}.`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Visitor extends Person {
  constructor(name, age, homeLocation = '') {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let message = super.getGreeting()
    if (this.homeLocation) {
      message += ` I am from ${this.homeLocation}`
    }
    return message
  }
}

const me = new Visitor("Prasad Kumar", 20, "India")

const you = new Visitor()

const render = () => {
  const temp = 
    <div>
      {
        <div>
        <h1>Classes</h1>
        <p>{me.getGreeting()}</p>
        <p>{me.getDescription()}</p>
        <br></br>
        <p>{you.getGreeting()}</p>
        <p>{you.getDescription()}</p>
        </div>
      }
    </div>
  ReactDOM.render(temp, document.getElementById("root"))
}
render()