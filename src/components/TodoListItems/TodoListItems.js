import React, { Component } from 'react';

import classes from './TodoListItems.module.css';

const todoListItems = ( props ) => {

    function clickHandler(itemId) {
        // console.log("TodoLIstItems, itemId: ", itemId);
        props.remove(itemId);
    }

    return (
        <div className={ classes.TodoListItems }>
            <ol>                
                {props.itemsList.map(
                    (todoItem) => <li>                        
                        {todoItem.todoItem}
                        <button 
                            onClick={() => clickHandler(todoItem.id)}>
                                Finish
                        </button>
                    </li>
                )}
            </ol>
        </div>  
    );
};

export default todoListItems;
