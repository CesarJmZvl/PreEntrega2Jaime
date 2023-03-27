import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Amplificadores">
                    {props.itemOne}
                </Link>
            </li>
            <li>
                <Link to="category/Bocinas">
                    {props.itemTwo}
                </Link>
            </li>
            <li>
                <Link to="category/Tornamesas">
                    {props.itemThree}
                </Link>
            </li>
            <li>
                <Link to="category/Ecualizadores">
                    {props.itemFour}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;