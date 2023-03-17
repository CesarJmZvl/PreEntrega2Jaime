import cart from "../../img/cart.svg"

const CarWidget = () => {
    return(
        <div className="containerCarrito">
            <img src={cart} alt="cart"></img>
            <span className="cartQty">
                1
            </span>
        </div>
    )
}

export default CarWidget;