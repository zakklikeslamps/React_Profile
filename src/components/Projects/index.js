import React from "react";
import {Link} from "react-router-dom";



function Projects(props) {

  const styles = {

    container: {

      height: '500px',
      width: '300px'

    },

    image: {

      height: '300px',
      width: '250px'

    }

  }

  return (

      <div>
        <section style={styles.container}className="col">
          <section className="card text-center h-100 localCard lh-base">
            <img style={styles.image} src={props.image} className="card-img-top h-60" alt={props.imageAlt}/>
            <section className="card-body">
              <h5 className="card-title fw-bold fs-5">{props.title}</h5>
              <h3 className="card-text">{props.description}</h3>
              <Link to={props.deployedLink} className="btn btn-dark myBtn m-2">Deployed App</Link>
              <Link to={props.githubLink} className="btn btn-dark myBtn m-2">Github Repo</Link>
            </section>
          </section>
        </section>  

      </div>



    
    
  );
}
 
export default Projects;