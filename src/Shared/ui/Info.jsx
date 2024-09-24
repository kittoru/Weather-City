import { Icon } from './Icon';
import styles from './Info.module.scss';

export const Info = ( { data } ) => {
  return ( 
    <ul className={styles.info}>
      <li className={styles.item}>
        <Icon id='wind'/>
        <span className={styles.wind}>{data.windSpeed} m/s </span>
      </li>
      <li className={styles.item}>
        <Icon id="humidity" />
        <span>{data.humidity}%</span>
      </li>
      <li className={styles.item}>
        <Icon id='pressure' />
        <span>{Math.round(data.pressure * 0.75)} mm Hg</span>
      </li>
    </ul>
   );
}