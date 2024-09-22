import { Icon } from './Icon';
import styles from './Info.module.scss';

export const Info = ( { speed, deg,  humidity, pressure } ) => {
  return ( 
    <ul className={styles.info}>
      <li className={styles.item}>
        <Icon id='wind'/>
        <span className={styles.wind}>{speed} м/с, {deg}</span>
      </li>
      <li className={styles.item}>
        <Icon id="humidity" />
        <span>{humidity}%</span>
      </li>
      <li className={styles.item}>
        <Icon id='pressure' />
        <span>{pressure} мм рт. ст.</span>
      </li>
    </ul>
   );
}