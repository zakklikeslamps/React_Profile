import React from 'react'

function Wrapper (props) {
    return (
        <>
       <main className="container-fluid bg-light flex-shrink-0 mt-3">
           {props.children}
       </main>
        </>
    )
}

export default Wrapper 
