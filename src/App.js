
import { Component } from 'react';
import './App.css';
import Compo from './component/Compo'
import AddCompo from './component/AddCompo'

class App extends Component {
  constructor() {
    super();
    this.state={
      projects:[], 
    };
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title:'Project 1 Finish this project',
          category:'important',
        },
        {
          title:'Projet 2 Finish a series on netflix ',
          category:'not important',
        },
      ],
    })
  }
  handleAddCompo(project){
    let projects=this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render(){
  return( 
    <div className=" App">
     <AddCompo addCompo={this.handleAddCompo.bind(this)}/>
     <Compo projects={this.state.projects}/>

    </div>
)
  }
}




export default App;
