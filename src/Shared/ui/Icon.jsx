import styles from './Icon.module.scss'
import Icons from '../assets/sprite.svg';

export const Icon = ( { id } ) => {
  return ( 
    <svg className={styles.icon} height={24} width={24}>
      <use href={Icons + "#icon-" + id} />
    </svg>
   );
}