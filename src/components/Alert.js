import React from 'react'

function Alert(props) {
    /*const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }*/
  return (
    <div style={{height:'50px'}}>
     {props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        {props.alert}
      </div>}
      </div>
  )
}

export default Alert