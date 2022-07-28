import React from "react";
import './ListRow.css';

function ListRow(props) {

    return (
        <li>
            <label>{props.fruta}</label>
            <img src={props.imagem}/>
            </li>
    )
}

export default ListRow;