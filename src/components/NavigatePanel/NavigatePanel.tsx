import NavigateButton from './NavigateButton/NavigateButton'
import styles from './NavigatePanel.module.scss'

const NavigatePanel = () => {

  const navigateButtons = ['НАПРАВЛЕНИЯ', 'ОБУЧЕНИЕ', 'ПАРТНЕРАМ', 'ОБ ИНСТИТУТЕ', 'КОНТАКТЫ']

  return (
    <div className={styles.button_container}>
      {
        navigateButtons.map((e) => {
          return <NavigateButton name={e} />
        })
      }
    </div>
  )
}

export default NavigatePanel