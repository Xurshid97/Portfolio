import React from 'react'
import './Title.scss'

function Title({titleName}) {
  return (
    <div className='titleClass'>
        <p>
            <span>#</span>
            {titleName}
        </p>
        <hr />
    </div>
  )
}

export default Title