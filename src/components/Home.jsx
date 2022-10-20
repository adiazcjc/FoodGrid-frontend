import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, getClean, filterDiet, orderForName, filterCreatedOrApi, orderForScore } from '../actions';
import { Link } from 'react-router-dom'
import Cards from "./Cards";
import Paginated from "./Paginated";
import Loading from "./Loading"
import NavBar from "./NavBar"
import styles from './Home.module.css'
import Footer from "./Footer"

export default function Home() {

    const dispatch = useDispatch()

    const allRecipes = useSelector((state) => state.recipes)
    const allDiets = useSelector((state) => state.dietsTypes)

    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState("")
    const [recipesForPage, setRecipesForPage] = useState(9)
    const indexLastRecipe = currentPage * recipesForPage;
    const indexFirstRecipe = indexLastRecipe - recipesForPage;
    const currentRecipes = allRecipes.slice(
        indexFirstRecipe,
        indexLastRecipe
    );

    if (currentPage > Math.ceil(allRecipes.length / recipesForPage) &&
        currentPage != 1
    ) {
        setCurrentPage(1)
    }

    const paginated = (numPage) => {
        setCurrentPage(numPage)
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])


    function handleForScore(e) {
        e.preventDefault();
        dispatch(orderForScore(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleFilterDiet(e) {
        e.preventDefault();
        dispatch(filterDiet(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterCreatedOrApi(e) {
        e.preventDefault();
        dispatch(filterCreatedOrApi(e.target.value))
        setCurrentPage(1)
    }

    function handleName(e) {
        e.preventDefault();
        dispatch(orderForName(e.target.value))
        setCurrentPage(1)
    }

    const handleReload = () => {
        window.location.reload();
    }

    function changePage(numPage) {
        setCurrentPage(numPage);
      }

    if (currentRecipes.length === 0) {
        return (
            <div class="container">
                <div>
                    <Loading />
                </div>
            </div>
        )
    } else {
        return (

            <div>

                <NavBar />
                
                <div class="container">
                    <div class="btn-group w-100 mt-3 ">

                        <select class="form-select me-3" aria-label=".form-select-lg example" onChange={e => { handleName(e) }}>
                            <option value='todos'>Order ⇅</option>
                            <option value='asc'>A - Z</option>
                            <option value='desc'>Z - A</option>
                        </select>

                        <select class="form-select me-3" aria-label=".form-select-lg example" onChange={e => handleForScore(e)}>
                            <option value="all">Sort by score</option>
                            <option value="max">Maximum</option>
                            <option value="min">Minimum</option>
                        </select>

                        <select class="form-select me-3" aria-label=".form-select-lg example" onChange={e => handleFilterDiet(e)}>
                            <option value="All">Filter by diets </option>
                            <option value="vegan"> Vegan </option>
                            <option value="dairy free"> Dairy free </option>
                            <option value="lacto ovo vegetarian"> Lacto ovo vegetarian </option>
                            <option value="lacto-Vegetarian"> Lacto-Vegetarian </option>
                            <option value="pescatarian"> Pescatarian </option>
                            <option value="primal"> Primal </option>
                            <option value="paleolithic"> Paleolithic </option>
                            <option value="fodmap friendly"> Fodmap friendly </option>
                            <option value="Ketogenic"> Ketogenic </option>
                            <option value="Whole30"> Whole30 </option>
                        </select>

                        <select class="form-select me-3" aria-label=".form-select-lg example" onChange={e => handleFilterCreatedOrApi(e)}>
                            <option value="recipes">Created or existing</option>
                            <option value="data_base">Created</option>
                            <option value="api">Existing</option>
                        </select>

                        <button class="btn btn-primary" style={{ backgroundColor: "#184374", borderColor: "#184374" }} onClick={e => { handleReload() }}>⟳</button>

                    </div>
                    <div class="mt-3
                    ">
                    <Paginated
                        recipesForPage={recipesForPage}
                        allRecipes={allRecipes.length}
                        paginated={paginated}
                        changePage={changePage}
                        currentPage={currentPage}
                        />
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 justify-content-center" >
                        {
                            currentRecipes?.map(el => {
                                
                                return (
                                    <div>
                                        
                                            <Cards
                                                id={el.id} 
                                                name={el.name}
                                                image={el.image}
                                                diets={el.diets}
                                                healthScore={el.healthScore}
                                                 />
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>

                    <Footer />
                </div>
            </div>
        )
    }
}