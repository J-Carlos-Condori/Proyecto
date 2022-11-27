import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <div className="col s12 m3">
            <Link to={`/item/${item.id}`}>
                <div className="card">
                    <div className="card indigo">
                        <div className="card-image">
                            <img src={item.portada} alt=""></img>
                        </div>
                        <div className="card-content white-text">
                            <span className="card-title">{item.nombre}</span>
                            <h5>{item.precio}$</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default Item;
