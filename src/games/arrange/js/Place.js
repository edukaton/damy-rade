import React from 'react';

function Place(props) {
    let classes = "arrange-place";

    if (props.changable)
        classes += " changable";

    if (props.selecting && props.changable)
        classes += " selecting";

    return (
        <div onClick={props.selecting ? props.onClick : null} className={classes}>
            {props.text}
        </div>
    );
}

export default Place;