import Brand from "./Brand";
import CarWidget from "./CartWidget";
import ItemListContainer from "./ItemsListContainer";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>
            <nav className="containerItemList">
                <ItemListContainer 
                    itemOne = "Amplificadores"
                    itemTwo = "Bocinas"
                    itemThree = "Tornamesas"
                    itemFour = "Ecualizadores"
                />
            </nav>
            <div className="containerCart">
                <CarWidget />
            </div>
        </header>
    )
}

export default NavBar;