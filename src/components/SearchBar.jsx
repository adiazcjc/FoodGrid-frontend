import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchName } from '../actions'
// import styles from './SearchBar.module.css'
import Swal from "sweetalert2";

export default function SearchBar() {

    const dispatch = useDispatch(); 
    const [name, setName] = useState(''); 

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(searchName(name))
        setName('')
    }

    return (
        <div>
            <form class="d-flex" role="search">
                <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="Search for a recipe" 
                    aria-label="Search"
                    onChange={(e) => handleInputChange(e)}
                    />
                <button 
                    class="btn btn-light" 
                    type="submit"
                    onClick={(e) => handleSubmit(e)}>🔍︎
                    </button>
            </form>
        </div>
    )

}