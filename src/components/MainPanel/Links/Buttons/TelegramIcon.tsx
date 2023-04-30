import {ReactComponent as TelegramSVG} from '../../../../icons/telegram.svg'

const TelegramIcon = () => {
  return (
    <a 
      href='https://web.telegram.org/z/'
      target='_blank'
      className='w-[30px] h-[30px] m-1 hover:cursor-pointer'>
      <TelegramSVG />
    </a>
  )
}

export default TelegramIcon