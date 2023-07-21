import React from 'react'
import "../assets/css/SnackBar.css";
import { Slide } from "react-awesome-reveal";

const SnackBar = ({ message }) => {
  return (
    <>
    <Slide>
    <div className='snackbar ms-5'>
      <p className='mb-0 text-center fs-5'><i className="bi bi-check2-circle pe-2"></i>{message}</p>
      </div>
      </Slide>
    </>
  )
}

export default SnackBar
