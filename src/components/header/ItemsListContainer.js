const ItemListContainer = (props) => {
    return(
        <ul>
            <li>{props.itemOne}</li>
            <li>{props.itemTwo}</li>
            <li>{props.itemThree}</li>
            <li>{props.itemFour}</li>
        </ul>
    )
}

export default ItemListContainer;