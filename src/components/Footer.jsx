import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYouTube } from '@fortawesome/free-brands-svg-icons'


export default function NavBar() {

  return (
    <footer className='row p-5 mt-5 justify-content-around mx-0 position-relative fixed-bottom' style={{ backgroundColor: "#184374" }}>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
          <FontAwesomeIcon
            icon={['fas', 'phone-alt']}
            className='h2'
            style={{ color: '#E1E3EC' }}
          />
        </div>
      </div>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
          <FontAwesomeIcon
            icon={['fas', 'clock']}
            className='h2'
            style={{ color: 'DodgerBlue' }}
          />
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <div className=''>
          <FontAwesomeIcon
            icon={'fa-brands fa-facebook'}
            className='h2 me-4'
            
          />
          <FontAwesomeIcon
            icon={"fa-brands fa-twitter"}
            className='h2 me-4'
            style={{ color: 'DodgerBlue' }}
          />
          <FontAwesomeIcon
            icon={'fa-brands fa-instagram'}
            className='h2'
            style={{ color: 'DodgerBlue' }}
          />

        </div>
      </div>
      <p class="text-center" style={{ color: '#E1E3EC' }}>Copyright © 2022 - Alejandro Díaz</p>
    </footer>
  )
}