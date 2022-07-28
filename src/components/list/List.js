import React from "react";
import './List.css';

import ListRow from "../ListRow/ListRow";

function List(props) {

    return (
        <ul>
            <ListRow
             fruta={props.fruta}
             imagem={props.imagem} />
        </ul>
    )
}

export default List;