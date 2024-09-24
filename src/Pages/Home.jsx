import { useDispatch, useSelector } from "react-redux";
import { Form } from "../Shared";
import { Card } from "../Widgets/Card";
import styles from './Home.module.scss';
import { useEffect } from "react";
import { fetchCity, fetchWeather } from "../App/Store/weather.module.slice/weatherSlice";


export const Home = () => {
  const loading = useSelector(state => state.weather.isLoading);
  const status = useSelector(state => state.weather.status);

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchWeather());
  }, [dispatch])
  return ( 
    <div className="container">
      <div className={styles.home}>
      <Form  />
      {loading && status === 'OK'? <Card /> : <p className={styles.text}>Please enter the city name in the field.</p>}
      
      </div>
    </div>
   );
}