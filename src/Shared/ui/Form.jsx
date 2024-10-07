import { useState } from 'react';
import styles from './Form.module.scss';
import { useDispatch } from 'react-redux';
import { fetchCity } from '../../App/Store/weather.module.slice/weatherSlice';


export const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handelClick = (e) => {
    e.preventDefault();
    dispatch(fetchCity(value));
    setValue('');
  }

  return ( 
    <form onSubmit={handelClick} className={styles.form}>
      <div className={styles.search}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" width='24' height='24'>
          <path d="M16.927 17.0401L20.4001 20.4001M19.2801 11.4401C19.2801 15.77 15.77 19.2801 11.4401 19.2801C7.11019 19.2801 3.6001 15.77 3.6001 11.4401C3.6001 7.11019 7.11019 3.6001 11.4401 3.6001C15.77 3.6001 19.2801 7.11019 19.2801 11.4401Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <input type="text" value={value} placeholder='City...' className={styles.input} onInput={(e)=>{setValue(e.target.value)}}/>
      </div>
      
      <button type='submit' className={styles.button}>Find</button>
    </form>
   );
}