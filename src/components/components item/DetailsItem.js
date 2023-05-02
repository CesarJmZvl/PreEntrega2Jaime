import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css"
import AddQtyCart from "./AddQtyCart";
import ButtonDetails from "./ButtonDetails";
import fetchSimulation from "../utils/fetchSimulation";
import productos from "../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {
        fetchSimulation(productos.filter( filter => filter.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])

    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                    <>
                        <div className="leftContainer">
                            <Image 
                                imagen={items.imageProduct.firstImage} 
                            />
                        </div>
                        <div className="rightContainer">
                                <Description 
                                    title= {items.title}
                                    paragraph= {items.description}
                                    cantidad= {items.stock}
                                    precio= {items.price} 
                                />
                            <div className="buttons">
                                    <AddQtyCart 
                                        cantidad={1} 
                                    />
                                    <ButtonDetails 
                                        txt="Agregar al carrito" 
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;