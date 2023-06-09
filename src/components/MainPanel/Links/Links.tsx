import TelegramIcon from './Buttons/TelegramIcon'
import WhatsupIcon from './Buttons/WhatsupIcon'
import VKIcon from './Buttons/VKIcon'

const Links = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex justify-center">
        <VKIcon />
        <WhatsupIcon />
        <TelegramIcon />
      </div>
    </div>
  )
}

export default Links