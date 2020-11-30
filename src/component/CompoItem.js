
import { Component } from 'react';
import './CompoItem.css';

class  CompoItem extends Component {
    render(){

    console.log(this.props);
    return( 
    <li className="CompoItem" >
        {  this.props.project.title} - {  this.props.project.category} 
    </li>
)
    }
}




export default CompoItem;
