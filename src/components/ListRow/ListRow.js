import React from "react";
import './ListRow.css';

function ListRow(props) {

    return (
        <li>
            <label>{props.fruta}</label>
            <img src={props.imagen} width={200}/>
            </li>
    )
}

export default ListRow;