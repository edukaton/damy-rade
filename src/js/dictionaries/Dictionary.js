import React, { Component } from 'react';
import '../../css/Dictionary.css';

function Dictionary(props) {
    return (
        <div className="dictionary">
            <h1 className="dictionary-title"></h1>
            <p className="dictionary-p"></p>
            <h2 className="dictionary-subtitle"></h2>
            <img className="dictionary-image" />
        </div>
    );
}

export default Dictionary;