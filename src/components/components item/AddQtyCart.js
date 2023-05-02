const AddQtyCart = (props) => {
    return(
        <div className="addQtyCart">
            <div>
                <button id="decrease">-</button>
                <span className="qtyTxt"> {props.cantidad} unidades</span>
                <button id="increase">+</button>
            </div>
        </div>
    )   
}

export default AddQtyCart; 