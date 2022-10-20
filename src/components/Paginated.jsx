import React from "react";

import './Paginated.css'
export default function Paginated({ recipesForPage, allRecipes, paginated, changePage, currentPage }) {
    const numPage = []
    for (let i = 1; i <= Math.ceil(allRecipes / recipesForPage); i++) {
        numPage.push(i)
    }

    function handlePrevious(){
        if(currentPage>1){
            changePage(currentPage-1)
        }
    }
    function handleNext(){
        if(currentPage<numPage.length){
            changePage(currentPage+1)
        }
    }

    const stylePaginated = {
        color:"#184374",
        
    }

    return (
        <nav aria-label="...">
            <ul class="pagination justify-content-center" >
            
                {numPage.map((number) => (
                    <li class='page-item' key={number} >
                        <button a class="page-link"  style={{ color: "#184374" }} onClick={() => paginated(number)}>{number}</button>
                    </li>
                ))}
                
            </ul>
        </nav>
        
        // <nav>
        //     <ul className={styles.paginated}>
        //         {numPage &&
        //         numPage.map(number =>(
        //                 <li className={styles.nro} key={number}>
        //                 <a onClick={() => paginated(number)}>{number}</a>
        //             </li>
        //         ))}
        //     </ul>
        // </nav>
    )
}