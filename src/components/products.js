
import { Link } from "react-router-dom";
const productsList = [
    {
        id: 1,
        name: 'Televisor',
        price: 123,
        description: 'televisor-plano y grande', 
    },
    {
        id: 2,
        name: 'Computadora',
        price: 456,
        description: 'notebook, plana con memoria de 16 gb',

    },
    {
        id: 3,
        name: 'Celular',
        price: 899,
        description: ' iphone 13, memoria de 16 gb, PLUS',
    },
];

function Products(props) {
    let id = Number (props.match.params.id);
    let product = productsList.find(oneProduct => oneProduct.id === id);
    console.log(props.match.params.id);
    console.log(product);
    return (
        <div>
             <h2> Detalle de Productos </h2>
             <Link to="/products/1"> Producto-1 </Link>
             <Link to="/products/2"> Producto-2 </Link>
             <Link to="/products/3"> Producto-3 </Link>


             {
                 product &&
              <>
                <p><b>ID:</b> {product.id} </p>
                <p><b>Nombre:</b> {product.name} </p>
                <p><b>Precio:</b> {product.price} </p>
                <p><b>Descripcion:</b> {product.description} </p>
             </>
            }
            {
                !product && <p> No hay productos con ese Id </p>
            }
        </div>
    )
}

export default Products;
