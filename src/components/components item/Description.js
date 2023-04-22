const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>
            <div className="description">
                <span className="descriptionTitle">Descripción:</span>
                <p className="paragraph">
                    {props.parrafo}
                </p>
            </div>
            <span className="qty">
                Cantidad: {props.cantidad}
            </span>
            <span className="price">
                ${props.precio}
            </span>

        </div>
    )
}

export default Description;