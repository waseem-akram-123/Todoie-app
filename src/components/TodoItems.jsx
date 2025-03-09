import React from "react";

const TodoItems = (props)=> {
    return (
        <div class = "div-container1">
            {/* conditional rendering ... */}
            {/* {props.completed ? <></> :<p id = "para1"><input class = "checkbox1" type = "checkbox"/></p>} */}
            <p id = "para1"><input class = "checkbox1" type = "checkbox"/></p>
            <p id = "para2"> {props.text} </p>
            <p id = "para3"> ... </p>
        </div>
    );
}

export default TodoItems;