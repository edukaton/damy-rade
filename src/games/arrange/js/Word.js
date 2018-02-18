import React from 'react';

function Word(props) {
    let classes = "arrange-word";

    if (props.selected)
        classes += " selected"; 

    return (
        <div onClick={props.onClick} className={classes}>
            {props.text}
        </div>
    );
}

export default Word;