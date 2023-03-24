import cart from "../../img/cart.svg"

const ButtonAddCart = () => {
    return(
        <button id="AddCart">
            <img src={cart} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;