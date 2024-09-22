import { Temperature } from "../Shared";
import styles from './Card.module.scss'


export const Card = () => {
  return ( 
    <div className={styles.card}>
        <div className="top">
          <Temperature temp={'+26'} subtemp={{min: '+20', max: '+26'}} type={'moderate rain'} tempFeels={'+24'}/>
        </div>
    </div>
   );
}