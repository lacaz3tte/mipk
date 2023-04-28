import TelegramIcon from '../../../icons/TelegramIcon'
import WhatsupIcon from '../../../icons/WhatsupIcon'
import VKIcon from '../../../icons/VKIcon'

const Links = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex justify-center">
        <TelegramIcon />
        <WhatsupIcon />
        <VKIcon />
      </div>
    </div>
  )
}

export default Links