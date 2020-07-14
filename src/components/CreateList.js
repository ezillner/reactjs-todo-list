import React from 'react';

export class CreateList extends React.Component {

    
    render() {
        return (
            <div>
                <ol>
                    {this.props.listArr.map( (item, index) =><li key={index}>{item}  
                    <button className="delete" onClick = { ()=> this.props.delete(index)}>Delete</button>
                    <button className="edit" onClick = { () =>{
                         ///this.renderEditView(index);
                         this.props.editMode(index);}}>
                        Edit</button>
                        <input type="checkbox"  class="filled-in"/>
                    </li>)}
                </ol> 
            </div>

        );
    }
}