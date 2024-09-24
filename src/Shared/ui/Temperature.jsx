import styles from './Temperature.module.scss';

export const Temperature = ( { data } ) => {
  return ( 
    <div className={styles.temperature}>
      <div className={styles.main}>
        <div className={styles.temp}>
          <span className={styles.text}>{data.temp > 0? `+${data.temp}` : `${data.temp}`}</span>
          <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="icon" className={styles.icon} />
        </div>
        <div className={styles.subtemp}>
          <div className={styles.min}>{data.min > 0? `+${data.min}` : `${data.min}`}</div>
          ...
          <div className={styles.max}>{data.max > 0? `+${data.max}` : `${data.max}`}</div>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.group}>
           <div className={styles.type}>
            {data.type}
          </div>
          <div className={styles.description}>
            {data.description}
          </div>
        </div>
       
        <div className={styles.feels}>
          Feels like  
          <span className={styles.subFeels}> {data.feels > 0? `+${data.feels}` : `${data.feels}`}</span>
        </div>
      </div>
    </div>
   );
}