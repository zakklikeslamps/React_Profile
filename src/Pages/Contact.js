import React from 'react';
//import Wrapper from '../Wrapper';

const Contact = () => {

    const styles = {

       
       background: {

        backgroundColor: 'Gold'

        }

    }

    return (

    <div style={styles.background}>
        <h1 class="headers">Contact Me</h1>
    
       
        <div>
            <h2 class="headers">Phone</h2>
            <ul>
                <p id="phone">267-402-7888</p>
            </ul>
            
            <h2 class="headers">email me</h2>
            
                <p>personal: <a href="mailto:zakklikeslamps@gmail.com">zakklikeslamps@gmail.com</a></p>
                <p >LEGO: <a href="mailto:zakkhavokbuilds@gmail.com">zakkhavokbuilds@gmail.com</a></p>
                
            
        </div>
        
        <div>
            <ul>
                <p class="p">I can be found on both Xbox & Nintendo Switch. For inquires about adding me or playing
                    something
                    together please email or direct-message me on Facebook.</p>
            </ul>
        </div>
    </div>


 );
};

export default Contact;