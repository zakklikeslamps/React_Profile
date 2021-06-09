import React from 'react';
//import Wrapper from '../Wrapper';

const Contact = () => {

    const styles = {

       
       background: {

        backgroundColor: 'orange',
        justifyContent: 'center'

        },

        header: {
            fontSize: '70px'
        },

        options: {
            fontSize: '40px'
        },

        info: {
            fontSize: '25px'
        }

    }

    return (

    <div style={styles.background}>
        <h1 style={styles.header}class="headers">Contact Me</h1>
    
       
        <div>
            <h2 style={styles.options}>Phone</h2>
            <ul>
                <p id="phone">267-402-7888</p>
            </ul>
            
            <h2 style={styles.options}>email me</h2>
            
                <p style={styles.info}>personal: <a href="mailto:zakklikeslamps@gmail.com">zakklikeslamps@gmail.com</a></p>
                <p style={styles.info}>LEGO: <a href="mailto:zakkhavokbuilds@gmail.com">zakkhavokbuilds@gmail.com</a></p>
                
            
        </div>
        
        <div>
        
                <p style={styles.info}>I can be found on both Xbox & Nintendo Switch. For inquires about adding me or playing
                    something
                    together please email or direct-message me on any social media platform.</p>
            
        </div>
    </div>


 );
};

export default Contact;