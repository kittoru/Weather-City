import { Info, Temperature } from "../Shared";
import styles from './Card.module.scss'


export const Card = () => {
  return ( 
    <div className={styles.card}>
        <div className={styles.top}>
          <Temperature temp={'+26'} subtemp={{min: '+20', max: '+26'}} description={'moderate rain'} type={'Rain'} tempFeels={'+24'}/>
        </div>
        <div className={styles.bottom}>
          <Info speed={10} deg={'C'} humidity={60} pressure={778}/>
        </div>
    </div>
   );
}