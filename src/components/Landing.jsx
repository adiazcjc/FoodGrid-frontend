import React from "react";
import imagen from "../images/logo.png"
import { Link } from "react-router-dom";
import "./Landing.css"

export default function Landing() {
    return (
        <div class="containerLanding" >
            <div>
                <h1 style={{color: "#E7F0F9"}}>Welcome</h1>
            </div>
            <div class="px-4 py-5 my-5 text-center"  >
                <img class="d-block mx-auto mb-4" src={imagen} alt="" width="140" height="100"></img>
                <h1 class="display-5 fw-bold">Welcome to FoodGrid</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">FoodGrid is an application where you can find a wide variety of cooking recipes and you can even create your own!</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to='/home'>
                            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" style={{ backgroundColor: "#184374", borderColor: "#184374" }}>Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}