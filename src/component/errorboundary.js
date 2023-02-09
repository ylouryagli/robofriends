import React,{Component} from "react";

class errorboundary extends Component {
    constructor (props) {
        super (props);
        this.state = {
            hasError: false 
        }
    }

    componentDidCatch(error, info){
        this.setState ({ hasError: true})
    }

    render (){
        if ( this.state.hasError){
            return <h1>Ooooops thats is not good </h1> 
        }
        return this.props.children
    }
}

export default errorboundary ;