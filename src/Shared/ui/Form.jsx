import { useState } from 'react';
import styles from './Form.module.scss';
import { Icon } from './Icon';


export const Form = () => {
  const [value, setValue] = useState('');

  const handelClick = (e) => {
    e.preventDefault();

    setValue('');
  }
  return ( 
    <form onSubmit={handelClick} className={styles.form}>
      <div className={styles.search}>
        <div className={styles.icon}>
          <Icon id="search"/>
        </div>
        <input type="text" placeholder='Введите название города' className={styles.input} onInput={()=>{setValue(e.target.value)}}/>
      </div>
      
      <button type='submit' className={styles.button}>Найти</button>
    </form>
   );
}