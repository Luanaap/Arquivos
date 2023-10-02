import styles from './DetailsCar.module.css';

const DetailsCar = ({brand, km }) => {
    return (
      <div>
          <h2>Detalhes do carro</h2>
          <ul>
              <li className={styles.my_car}>Marca: {brand}</li>
              <li  className={styles.my_car}>Km: {km}</li>
          </ul>
      </div>
    )
  }
  
  export default DetailsCar