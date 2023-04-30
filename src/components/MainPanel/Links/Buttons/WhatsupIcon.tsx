import {ReactComponent as WhatsupSVG} from '../../../../icons/whatsapp.svg'

const WhatsupIcon = () => {
  return (
    <a
      href='https://www.whatsapp.com/?lang=ru'
      target='_blank'
      className='w-[30px] h-[30px] m-1 hover:cursor-pointer'>
      <WhatsupSVG/>
    </a>
  )
}

export default WhatsupIcon