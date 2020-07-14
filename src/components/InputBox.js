import React from 'react';

export class InputBox extends React.Component {
    render() {
        return (
            <div>
              
                 <input 
                    id="MyInput"
                    placeholder="Enter task..."
                    type="text"
                    onChange={ (e) => this.props.userInput(e.target.value)}
                    />
                <button onClick = { ()=> this.props.addList()}> Add</button>
                
            </div>            
        );
    }
}

