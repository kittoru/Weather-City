import { Form } from "../Shared";
import { Card } from "../Widgets/Card";
import styles from './Home.module.scss';


export const Home = () => {
  return ( 
    <div className="container">
      <div className={styles.home}>
      <Form  />
      <Card />
      </div>
    </div>
   );
}