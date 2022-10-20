import React from "react";
// import styles from './Cards.module.css'
import { Link } from "react-router-dom";
import "./Cards.css";


export default function Cards({ id, name, image, diets, healthScore }) {
    return (
        
        <div class="containerCards">

        <div class="card h-100">
            
            <img src={image} alt='Image not found' class="card-img-top"></img>
            <div class="card-body p-2 m-2">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Diets: {diets.map(el => { return el.name + " - " })}</p>
                <p class="card-text">Health Score: {healthScore + "%"}</p>
                <Link to={"/recipes/" + id} style={{ textDecoration: 'none' }}>
                    <a href="#" class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x m-1" style={{ backgroundColor: "#184374", borderColor: "#184374" }}>Go to details</a>
                </Link>
            </div>
        </div>
        </div>
        
    )
}