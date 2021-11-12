import '../../styles.css';

const ItemCounter = ({onAdd, onSumar, onRestar, count}) => {
    
    return (
        <div id="itemCount">
            <div className="seleccionCant">
                <button onClick={onRestar} className="controles">-</button>
                <p>{count}</p>
                <button onClick={onSumar} className="controles">+</button>
            </div>
            <button id="agregar" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter