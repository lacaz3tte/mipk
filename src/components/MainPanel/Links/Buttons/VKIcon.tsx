import {ReactComponent as VKSVG}from '../../../../icons/vk.svg'

const VKIcon = () => {
  return (
    <a
      href='https://vk.com/'
      target='_blank'
      className='w-[30px] h-[30px] m-1 hover:cursor-pointer'>
      <VKSVG/>
    </a>
  )
}

export default VKIcon