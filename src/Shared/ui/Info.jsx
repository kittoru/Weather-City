import { Icon } from './Icon';
import styles from './Info.module.scss';

export const Info = ( { data } ) => {
  return ( 
    <ul className={styles.info}>
      <li className={styles.item}>
        <div className={styles.icon}>
          <svg  viewBox="0 0 24 24" fill="none" width='24px' height='24px'>
            <path d="M9.02097 4.7963C9.38093 3.88579 10.2429 3.24463 11.249 3.24463C12.5787 3.24463 13.6567 4.36459 13.6567 5.74613C13.6567 7.12767 12.5787 8.24763 11.249 8.24763H2.3999M14.024 19.2035C14.3839 20.114 15.2459 20.7551 16.252 20.7551C17.5817 20.7551 18.6597 19.6352 18.6597 18.2536C18.6597 16.8721 17.5817 15.7521 16.252 15.7521H7.4029M16.7835 8.54855C17.1575 7.63804 18.0531 6.99688 19.0984 6.99688C20.4799 6.99688 21.5999 8.11684 21.5999 9.49838C21.5999 10.8799 20.4799 11.9999 19.0984 11.9999H4.9014" stroke="#b9b9b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span className={styles.wind}>{data.windSpeed} m/s </span>
      </li>
      <li className={styles.item}>
        <div className={styles.icon}>
          <svg  viewBox="0 0 24 24" fill="none" width='24px' height='24px'>
            <path d="M15.6 14.3999C15.0643 16.0763 13.7176 17.4167 12 17.9999M12.0001 21.5999C8.03005 21.5999 4.80005 18.5578 4.80005 14.8186C4.80005 9.5999 12.0002 2.3999 12.0002 2.3999C12.0002 2.3999 19.2 9.5999 19.2 14.8186C19.2 18.5579 15.9702 21.5999 12.0001 21.5999Z" stroke="#b9b9b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span>{data.humidity}%</span>
      </li>
      <li className={styles.item}>
        <div className={styles.icon}>
          <svg  viewBox="0 0 24 24" fill="none" width='24px' height='24px'>
            <path d="M12 17.3999H12.0563M16.2 17.3999C16.2 19.7195 14.3196 21.5999 12 21.5999C9.68045 21.5999 7.80005 19.7195 7.80005 17.3999C7.80005 15.9727 8.51196 14.7117 9.60005 13.9527V4.79833C9.60005 3.47285 10.6746 2.3999 12 2.3999C13.3255 2.3999 14.4 3.47442 14.4 4.7999V13.9527C15.2593 14.7218 16.2 16.156 16.2 17.3999Z" stroke="#b9b9b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span>{Math.round(data.pressure * 0.75)} mm Hg</span>
      </li>
    </ul>
   );
}