import React from 'react'

const AddBtn = () => {
  return (
    <div className='fixed-ation-btn'>
        <a href="#add-log-modal" className='btn-floating btn-large waves-effect waves-light blue modal-trigger'>
            <i className='large material-icons'>add</i>
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="#developer-list-modal" className='btn-floating green modal-trigger'>
                    <i className='material-icons'>person</i>
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp;

                <a href="#developer-modal" className='btn-floating red modal-trigger'>
                    <i className='material-icons'>person_add</i>
                </a>
      
    </div>
  )
}

export default AddBtn
