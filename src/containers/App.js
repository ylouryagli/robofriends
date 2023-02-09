import React, { Component} from 'react';
import Cardlist from '../component/Cardlist.js';
import Searchbox from '../component/Searchbox.js';
import Scroll from '../Scroll.js';
import errorboundary from '../component/errorboundary.js';
import '../containers/App.css';


class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots : users })} );
    }

onSearchChange=(event)=> {
    this.setState({searchfield : event.target.value})
    // console.log(event.target.value);
  
        
}


render() {
    const { robots, searchfield }= this.state;
    const filteredRobots= this.state.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return !robots.length?
        <h1>Loading</h1> :
        ( 
             <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <errorboundary>
                    <Cardlist robots = {filteredRobots}/>
                    </errorboundary>
                </Scroll>
                    
            </div>
            );
        }
    }
 ;
  

export default App;