import React from 'react';
import SWAPI from '../assets/Images/SWAPI_SS.png';
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects';

const Portfolio = () => {

  const styles = {

    image: {
      height: '300px',
      width: '250px'
    },

    background: {
      backgroundColor: 'orange'
    }

  }

    return (

    <div style={styles.background}>

        
        <h1 className="headers">Some Of My Work</h1>
    
       
        <section className="row row-cols-1 row-cols-lg-3 g-4 m-4">


          <Projects
            image={SWAPI}
            imageAlt={"SWAPI"}
            title={"SWAPI Project"}
            description={"Star Wars API"}
            deployedLink={"/bhavipatel21.github.io/starwarsIndex/"}
            serviceLink={"/github.com/zakklikeslamps/starwarsIndex"}
          />

          <Projects
            image={SWAPI}
            imageAlt={"SWAPI"}
            title={"SWAPI Project"}
            description={"Star Wars API"}
            deployedLink={"/bhavipatel21.github.io/starwarsIndex/"}
            serviceLink={"/github.com/zakklikeslamps/starwarsIndex"}
          />

          <Projects
            image={SWAPI}
            imageAlt={"SWAPI"}
            title={"SWAPI Project"}
            description={"Star Wars API"}
            deployedLink={"/bhavipatel21.github.io/starwarsIndex/"}
            serviceLink={"/github.com/zakklikeslamps/starwarsIndex"}
          />
        
        
        </section>
        
    </div>


 );
};

export default Portfolio;