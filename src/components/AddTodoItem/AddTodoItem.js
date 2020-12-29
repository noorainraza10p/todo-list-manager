import React from 'react';

import classes from './AddTodoItem.module.css';

const addTodoItem = ( props ) => {

    let textInput = React.createRef();

    function clickHandler() {
        props.add(textInput.current.value); 
        textInput.current.value='';
        textInput.current.focus();
    }

    return (
        <div className={ classes.AddTodoItem }>
            <input 
                ref={textInput} 
                type="text" 
                size="70"
                placeholder="Please enter todo item:" />
            <button 
                onClick={clickHandler} >
                Add Todo Item
            </button>
        </div>  
    );
};

export default addTodoItem;
