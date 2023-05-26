import React from 'react'
import styles from './Title.module.css';

type Props = {
 
};


const Title: React.FC<Props> = (props) => {
  return (
    <h1 className={styles.list__name}>todos</h1>
  )
}

export default Title