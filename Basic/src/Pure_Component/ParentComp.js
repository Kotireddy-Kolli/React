import {Component,PureComponent} from "react"
//import RegComp from "./RegComp";
//import PureComp from './PureComp';
import MemoComp from "./MemoComp";

class ParentComp extends Component {
//class ParentComp extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            name : "Koti"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : "Koti"
            })
        },5000)
    }

    render(){
        console.log("*********Parent Component render*********")
        return (
            <div>
            Parent Component
            <MemoComp name={this.state.name} />
            {/*<RegComp name={this.state.name}/> */}
            {/*<PureComp name={this.state.name}/> */}
            </div>)
    }
}

export default ParentComp 

/* 
1. Regular component will not impliment shouldComponentUpdate() method. It always return true by default
2. Pure component will impliment shouldComponentUpdate() with a shallow state and prop comparision
    SC of prevState with currentState
    Sc of prevProps with currentProps
    Only, when SC indicates their is a difference component will re-render

    In our case, The props name(string) primitive data type is same as prev prop name. So, pure component dont rerender

    Same is the case with state, If we make parent as pure component, It checks that previous state with 
    current state and sees that their is no difference. So, No  re-render.
    Note: If parent don't re-render then their is no child re-render.

    we should not mutate object or arrays in prop or state. As referencing won't change component won't rerender
    Always retrun a new object/array. If you push an element to array, refrencing won't change and component won't re-render

Shallow comparision(sc)

1. Primitive Types,
    a (sc) b returns true if a and b have the same value and are of same type
2. Complex Types,
    a (sc) b returns true if a and b reference the exact same object
*/