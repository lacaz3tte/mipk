import styles from '../NavigatePanel.module.scss'

interface Data {
  name:string
}

const NavigateButton = ({name}:Data) => {
  return (
    <button className={styles.button}>{name}</button>
  )
}

export default NavigateButton