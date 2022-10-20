import React, { useState, useEffect } from 'react';
import { postRecipe, getDiets } from '../actions'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import NavBarPersonalized from './NavBarPersonalized';
import Footer from './Footer';
import Swal from "sweetalert2";

export default function RecipeCreate() {
    const history = useHistory();
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets)
    console.log(diets)

    const [input, setInput] = useState({
        name: "",
        image: "",
        healthScore: 0,
        summary: "",
        steps: "",
        diets: []
    })

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e) {
        if (!input.diets.includes(e.target.value)) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    }

    function handleSubmit(e) {

        if (!input.name || input.name.length <= 2 || input.name.length > 50) {
            e.preventDefault();
            return Swal.fire("You must enter a name that contains between 2 and 50 characters")
        } else if (!input.diets.length) {
            e.preventDefault();
            return Swal.fire('Select at least one type of diet')
        } else if (input.image.length === 0) {
            e.preventDefault();
            return Swal.fire('You must enter the URL of the image')
        } else if (!(/https:\/\/[a-zA-Z./-]+/gm).test(input.image)) {
            e.preventDefault();
            return Swal.fire('You must enter a valid URL')
        } else if (!input.healthScore || input.healthScore.length <= 0 || input.healthScore.length >= 100) {
            e.preventDefault();
            return Swal.fire('You must assign a Health Score level between 1 and 100!')
        } else if (!input.summary || input.summary.length <= 0 || input.summary.length < 20) {
            e.preventDefault();
            return Swal.fire('The summary of the dish must contain at least 20 characters!')
        } else if (!input.steps || input.steps.length <= 0 || input.steps.length < 20) {
            e.preventDefault();
            return Swal.fire('The step by step field must contain at least 20 characters!')
        }
        dispatch(postRecipe(input))
        Swal.fire("Success", "Recipe created successfully", "success")
        setInput({
            name: "",
            image: "",
            healthScore: 0,
            summary: "",
            steps: "",
            diets: []
        })
        history.push("/home");
        document.location.reload();
    }

    function handleClear() {
        document.getElementById("miForm").reset();
        setInput({
            name: "",
            image: "",
            healthScore: 0,
            summary: "",
            steps: "",
            diets: []
        })
    }

    let handleDelete = (diet) => {
        setInput({
            ...input,
            diets: input.diets.filter(el => el !== diet)
        })
    }

    const wrapper = {
        maxWidth: '1000px',
        width: '100%',
        border: '1px solid #333',
        margin: '30px auto',
        padding: '20px',
    }

    return (
        <div>
            <NavBarPersonalized />
            <div class="container">
                <div style={wrapper} class="mt-5" >
                    <h2>Create your recipe</h2>
                    <hr />
                    <form id="miForm" onSubmit={(e) => handleSubmit(e)}>
                        <div class="container w-50">
                            <div class="mb-3 row">
                                <label
                                    for="inputName"
                                    class="col-sm-2 col-form-label">
                                    Name
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control"
                                        maxlength="50"
                                        id='7'
                                        value={input.name}
                                        name="name"
                                        placeholder='Name of your recipe'
                                        onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputDiets"
                                    class="col-sm-2 col-form-label">
                                    Diets
                                </label>
                                <div class="col-sm-10">
                                    <select
                                        id='8'
                                        class="form-select me-3"
                                        aria-label=".form-select-lg example"
                                        onChange={(e) => handleSelect(e)}>
                                        {console.log(diets)}
                                        <option
                                            value=""
                                            hidden name="diets">
                                            I chose the types of diets
                                        </option>
                                        {
                                            diets?.map(el => {
                                                return (<option value={el.name} key={el.id}>{el.name}</option>)

                                            })
                                        }

                                    </select>
                                </div>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        {
                                            input.diets.map(el =>
                                                <div>
                                                    <br />
                                                    <h5>
                                                        {diets?.find(p => p.name === el)?.name + " "} 
                                                        <button class="btn btn-danger" onClick={() => handleDelete(el)}>X</button>
                                                    </h5>
                                                </div>
                                            )
                                        }
                                    </li>
                                </ul>
                                {

                                }
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputImage"
                                    class="col-sm-2 col-form-label">
                                    Image
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        type="url"
                                        id='9'
                                        class="form-control"
                                        value={input.image}
                                        name="image"
                                        placeholder='Enter the URL of an image...'
                                        onChange={(e) => handleChange(e)} />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label
                                for="inputImage"
                                class="col-form-label">
                                Healthy food level</label>
                            <div class="col-sm-15">
                                <input
                                    type="range"
                                    name="healthScore"
                                    onChange={handleChange}
                                    class="form-range w-50"
                                    min="1"
                                    max="100"
                                    required
                                />
                                <h5>{input.healthScore + '%'}</h5>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        <div class="mb-3 row">
                            <label
                            class="col-form-label"
                                for="inputSummary">
                                Dish summary
                            </label>
                            <div class="col-sm-15">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="summary"
                                    onChange={handleChange}
                                    style={{ height: '100px' }}
                                    min="20"
                                    max="500" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label
                            class="col-form-label"
                                for="inputSteps">
                                Steps
                            </label>
                            <div class="col-sm-15">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="steps"
                                    onChange={handleChange}
                                    style={{ height: '100px' }}
                                    min="20"
                                    max="500" />
                            </div>
                        </div>
                        
                    </form>
                    <button id='submit' type='submit' class="btn btn-primary me-3" style={{ backgroundColor: "#184374", borderColor: "#184374" }} onClick={(e) => handleSubmit(e)}>Create</button>
                    <button type="reset" class="btn btn-secondary" onClick={(e) => handleClear(e)}>Clean</button>
                </div>
            </div>
            <Footer/>
        </div>
    )


}
