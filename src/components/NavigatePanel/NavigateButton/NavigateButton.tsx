import styles from './NavigateButton.module.scss'

interface Data {
  name:string
}

const NavigateButton = ({name}:Data) => {
  return (
    <button className={styles.button }>{name}</button>
  )
}

export default NavigateButton