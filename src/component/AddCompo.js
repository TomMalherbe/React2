
import { Component } from 'react';
import './AddCompo.css';

class  AddCompo extends Component {
    constructor(){
        super();
        this.state={
            newProject: {},
        }
    }
    
    static defaultProps ={
        categories: ['More important','Less important','not important'],
    };
    handleSubmit(e){
        this.setState(
            {
            newProject:{
                title:this.refs.title.value,
                category:this.refs.category.value,
            },
        },
        
        function(){
            this.props.addCompo(this.state.newProject);
            }
        )
        e.preventDefault();
    };
    render(){
        let selectOptions = this.props.categories.map(category=>{
            return(
                <option key={category} value={category}>
                    {category}
                </option>
        )
        })
    return( 
    <div >
           <h3>Projects</h3>

           <form onSubmit={this.handleSubmit.bind(this)}>
               <div>
                   <label for="titre">Title</label>
                    
                   <input type="text" ref="title" id="titre"></input>
                   </div>

                   <div>
                       <label>Category:</label>
                       <select ref="category">
                           {selectOptions}
                       </select>
                   </div>
                   <input type="Submit" Value="Send" />  
                    </form>

    </div>
)
    }
}




export default AddCompo;
