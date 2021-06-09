import React from 'react';
import IMG from '../assets/Images/Me.jpeg';


const Home = () => {

    const styles = {
        container: {
            
            height: '100%',
            width: '100%',
            border: '3px solid blue',
            fontSize: 75
            
        },
        image: {
            height: '300px',
            width: '250px',
            float: 'left',
        },

        Hi: {

            justifyContent: 'center'

        }


    }

  

    return (
        <div>
            <div style={styles.container}>
                <img style={styles.image} src={IMG} alt='Me' />
                <h1 style={styles.Hi}>Hi! I'm Zakk!</h1>
            </div>
        </div>
        
        
        

           
        

    );
};

export default Home;