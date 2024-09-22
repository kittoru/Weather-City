import { Info, Temperature } from "../Shared";
import styles from './Card.module.scss'


export const Card = () => {
  const city = "Таганрог";
  return ( 
    <div className={styles.card}>
        <div className={styles.top}>
          <h1 className={styles.city}>{city}</h1>
          <p>погода сегодня:</p>
        </div>
        <div className={styles.bottom}>
          <Temperature temp={'+26'} subtemp={{min: '+20', max: '+26'}} description={'moderate rain'} type={'Rain'} tempFeels={'+24'}/>
          <Info speed={10} deg={'C'} humidity={60} pressure={778}/>
        </div>
    </div>
   );
}