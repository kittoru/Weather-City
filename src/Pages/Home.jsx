import { useDispatch, useSelector } from "react-redux";
import { Form } from "../Shared";
import { Card } from "../Widgets/Card";
import styles from './Home.module.scss';
import { useEffect } from "react";
import { fetchCity, fetchWeather } from "../App/Store/weather.module.slice/weatherSlice";


export const Home = () => {
  const loading = useSelector(state => state.weather.isLoading);
  const status = useSelector(state => state.weather.status);
  let result = <p className={styles.text}>Please enter the city name in the field.</p>;
  if(loading && status === 'OK') {
    result = <Card />
  } else if (status === 'Loading') {
    result = <p className={styles.text}>Loading...</p>
  } else if (status === 'NoName') {
    result = <p className={styles.text}>This city name does not exist. Please try again.</p>
  }
   else if(status === 'Error') {
    result = <p className={styles.text}>Something went wrong. Please try again later.</p>
  }

  return ( 
    <div className="container">
      <div className={styles.home}>
      <Form  />
      {/* {loading && status === 'OK'? <Card /> : <p className={styles.text}>Please enter the city name in the field.</p>} */}
      {result}
      
      </div>
    </div>
   );
}