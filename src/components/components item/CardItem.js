import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image imagen={props.imagen}/>
            <Description 
                title= {props.title}
                cantidad= {props.cantidad}
                precio= {props.precio}
                />
            <div className="buttons">
                <Link to={ `/item/${props.id}` }>
                    <ButtonDetails txt="Ver Detalles" />
                </Link>
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;