import React from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails, getClean } from "../actions";
import Loading from './Loading'
import styles from "./Details.module.css"
import NavBarPersonalized from "./NavBarPersonalized";
import Footer from "./Footer";


export default function Detail() {
   const dispatch = useDispatch()
   const { id } = useParams()

   const myRecipe = useSelector(state => state.detail)

   useEffect(() => {
      dispatch(getDetails(id))
      return () => {
         dispatch(getClean())
      }
   }, [dispatch])


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
      maxWidth: '500px',
      width: '100%',
   }

   if (myRecipe.length > 0) {
      return (
         <div>
            <NavBarPersonalized />
            <div class="container">

               <div style={wrapper} class="mt-5" >
                  <h1>{myRecipe[0].name && myRecipe[0].name}</h1>
                  <hr />
                  <div style={wrapperContent}>
                     <img style={image} src={myRecipe[0].image} lt="no se encontro la imagen" />
                  </div>
                  <br />
                  <hr />
                  <div>
                     <h3 class="">Specification</h3>
                     <div>
                        <span className='lead' >
                           <p class='d-flex mb-0'>
                              <b>Tipe of diets </b>
                              : {myRecipe[0].diets && myRecipe[0].diets.map(el => el.name + ", ")}
                           </p>
                        </span>
                        <span className='lead'>
                           <p class='d-flex mb-0'>
                              <b>Health Score </b>
                              : {myRecipe[0].healthScore + "%"}
                           </p>
                        </span>
                        <span className='lead'>
                           <p class='d-flex mb-0'>
                              <b>Dish type </b>
                              : {myRecipe[0].dishTypes ? myRecipe[0].dishTypes?.map((e) => { return <p>{e}</p>; }) : 'There is no type of dish'}
                           </p>
                        </span>
                     </div>
                     <div>
                        <hr />
                        <h3>Summary</h3>
                        <p className='lead'> <div dangerouslySetInnerHTML={{ __html: myRecipe[0].summary }} /></p>
                        <hr />
                        <h3>Steps</h3>
                        <p className='lead'>{myRecipe[0].steps}</p>
                        <hr />
                     </div>
                  </div>
                  <Link to='/home'>
                     <button type="button" class="btn btn-primary" style={{ backgroundColor: "#184374", borderColor: "#184374" }}>Return</button>
                  </Link>
               </div>

            </div>
            <Footer />
         </div>
      )
   } else {
      return (
         <div class="container">
            <div>
               <Loading />
            </div>
         </div>
      )
   }
}