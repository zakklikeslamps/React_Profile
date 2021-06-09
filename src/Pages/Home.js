import React from 'react';
import IMG from '../assets/Images/Me.jpeg';


const Home = () => {

    const styles = {
        container: {
            
            
            width: '99%',
            border: '3px solid blue',
            fontSize: 75,
            backgroundColor: 'orange',
            padding: '3px',
            margin: '3px'
            
            
        },
        image: {
            height: '380px',
            width: '350px',
            float: 'left',
        },

        Hi: {

            justifyContent: 'center',
            fontFamily: ''
            
        }


    }

  

    return (
        <div>
            <div style={styles.container}>
                <img style={styles.image} src={IMG} alt='Me' />
                <h1 style={styles.Hi}>Hi! I'm Zakk!</h1>
            </div>
            <br></br>
            <div>

            </div>
        </div>
        
        
        

           
        

    );
};

export default Home;