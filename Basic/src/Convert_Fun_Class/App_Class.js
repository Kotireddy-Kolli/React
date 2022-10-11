import react from "react"
import App from "./App_fun"
/* State is similar to props, but it is private and fully controlled by the component.

Converting a Function to a Class
You can convert a function component like Clock to a class in five steps:

1.  Create an ES6 class, with the same name, that extends React.Component.
2.  Add a single empty method to it called render().
3.  Move the body of the function into the render() method.
4.  Replace props with this.props in the render() body.
5.  Delete the remaining empty function declaration.
*/

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Clock />);
/* Adding Local State to a Class
We will move the date from props to state in three steps:
1. Replace this.props.date with this.state.date in the render() method: 
2. Add a class constructor that assigns the initial this.state: 
3. Note how we pass props to the base constructor:
4. Remove the date prop from the <Clock /> element:

https://reactjs.org/docs/state-and-lifecycle.html */
export default App;
