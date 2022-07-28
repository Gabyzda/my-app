import React from "react";
import './List.css';

import ListRow from "../ListRow/ListRow";

function List(props) {

    return (
        <ul>
            <ListRow
             fruta={props.fruta}
             imagen={props.imagen} />
        </ul>
    )
}

export default List;