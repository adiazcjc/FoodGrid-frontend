import React from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails, getClean } from "../actions";
import Loading from './Loading'
import styles from "./Details.module.css"
import NavBarPersonalized from "./NavBarPersonalized";
import Footer from "./Footer";
import imagen from "../images/about.png"

export default function About() {


    const wrapper = {
        maxWidth: '1000px',
        width: '100%',
        border: '1px solid #333',
        margin: '30px auto',
        padding: '20px',
    }
    const wrapperContent = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
    const image = {
        maxWidth: '200px',
        width: '100%',
    }

    return (
        <div>
            <NavBarPersonalized />
            <div class="container">

                <div style={wrapper} class="mt-5" >
                    <h1>About FoodGrid</h1>
                    <hr />
                    <div style={wrapperContent}>
                        <img style={image} src={imagen} lt="no se encontro la imagen" />
                    </div>
                    <br />
                    <hr />
                    <div>
                        <p className='lead'>FoodGrid is a SPA that consumes data from an API (https://spoonacular.com/food-api) through
                            a Back-End developed with NodeJS. The Front-End is developed with React and
                            Redux as state management.
                            FoodGrid shows us in its Home section a grid with a wide variety of cooking recipes. These recipes can be sorted and filtered in different ways.
                            We can also see the detail of each recipe.
                            For the creatives, we have the New Recipe section, where we can create our fully customized recipe.</p>
                    </div>
                    <Link to='/home'>
                        <button type="button" class="btn btn-primary" style={{ backgroundColor: "#184374", borderColor: "#184374" }}>Return</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )

}