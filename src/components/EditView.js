import React from 'react';


export class EditView extends React.Component {
    render(){
    ///let listArray = this.props.listArr;
    //console.log(index);
        return (
            <div>
                <input
                    type="text"
                    defaultValue= {this.props.item}
                    onChange = { (e) => this.props.userInput(e.target.value)}
                    />
                <button onClick= { ()=> {
                    this.props.editArr(this.props.input);
                    this.props.editMode();}}>Save Changes</button>    
            </div>

        );
    }
}