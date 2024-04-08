import React from 'react'


function Catalogcard(props) {
   
  return (
    <div>
        <div className="card w-full mb-3">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="/" className="btn btn-primary">Go to {props.title}</a>
  </div>
</div>
      
    </div>
  )
}

export default Catalogcard
