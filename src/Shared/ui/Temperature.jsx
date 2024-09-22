import styles from './Temperature.module.scss';

export const Temperature = ( { temp, icon, subtemp, type, description, tempFeels } ) => {
  return ( 
    <div className={styles.temperature}>
      <div className={styles.main}>
        <div className={styles.temp}>
          {temp}
          {/* {icon} */}
        </div>
        <div className={styles.subtemp}>
          <div className={styles.min}>{subtemp.min}</div>
          ...
          <div className={styles.max}>{subtemp.max}</div>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.group}>
           <div className={styles.type}>
            {type}
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </div>
       
        <div className={styles.feels}>
          Ощущается как  
          <span className={styles.subFeels}> {tempFeels}</span>
        </div>
      </div>
    </div>
   );
}