import { useState } from 'react';
import styles from './Form.module.scss';
import { Icon } from './Icon';
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
          <Icon id="search"/>
        </div>
        <input type="text" value={value} placeholder='City...' className={styles.input} onInput={(e)=>{setValue(e.target.value)}}/>
      </div>
      
      <button type='submit' className={styles.button}>Find</button>
    </form>
   );
}