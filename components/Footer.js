import style from '../styles/Footer.module.scss' 

const Footer  = () => {
  return(
    <div className={style.footer}>
        <h2>
          <span>PROFLIX </span> 
         v1.0
        </h2>
        <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148">
          {" "}
          Designed by Dev. <span>Chex</span>
        </a>
        <p>All rights reserved</p>
    </div>
    )
}

export default Footer 