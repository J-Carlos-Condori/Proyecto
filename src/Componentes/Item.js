import { Link } from "react-router-dom";

const Item = ({ nombre, portada, precio, id }) => {
    return (
        <div className="col s12 m3">
            <Link to={`/item/${id}`}>
                <div className="card">
                    <div className="card indigo">
                        <div className="card-image">
                            <img src={portada}></img>
                        </div>
                        <div className="card-content white-text">
                            <span className="card-title">{nombre}</span>
                            <h5>{precio}$</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default Item;