import { Info, Temperature } from "../Shared";
import styles from './Card.module.scss'
import { useSelector } from "react-redux";


export const Card = () => {
  const info = useSelector(state => state.weather);

  return ( 
    <div className={styles.card}>
        <div className={styles.top}>
          <h1 className={styles.city}>{info.data.name}</h1>
          <p>weather today:</p>
        </div>
        <div className={styles.bottom}>
          <Temperature data={info.data.main} />
          <Info data={info.data.sub} />
        </div>
    </div>
   );
}