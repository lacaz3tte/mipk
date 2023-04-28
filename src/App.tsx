import Lens from "./icons/Lens";
import styles from './App.module.scss'
import NavigateButton from "./NavigateButton";
import TelegramIcon from "./icons/TelegramIcon";
import WhatsupIcon from "./icons/WhatsupIcon";
import VKIcon from "./icons/VKIcon";

function App() {

  const navigateButtons = ['НАПРАВЛЕНИЯ','ОБУЧЕНИЕ','ПАРТНЕРАМ','ОБ ИНСТИТУТЕ','КОНТАКТЫ']

  return (
    <>
      <div className="fixed bg-[#F8F9FA] w-full flex justify-center">
        <div className="w-[1350px] ">
          <div className="  h-[133px] flex justify-between">
            <div className="">
              <div className="w-[207px] h-[27px] bg-[#DEE8FF] rounded-sm flex justify-center items-center my-[7px]">
                <p className="font-Ubuntu font-semibold">Санкт-Петербург</p>
              </div>
              <div className='h-[62px] w-[181px] bg-cover overflow-hidden my-3 bg-center inline-block rounded-[10px] mr-5 bg-[url("../public/logo.jpg")]'>
                </div> 
            </div>
            <div className="h-full flex flex-col justify-center">
              <div className="flex justify-center">
                <TelegramIcon/>
                <WhatsupIcon/>
                <VKIcon/>
              </div>
            </div>
            <div className="h-full flex flex-col justify-center">
              <div>
                <input 
                  className="outline-none bg-transparent border-b-[1px] rounded-sm w-[450px] p-1 focus:bg-gray-100 font-Ubuntu" 
                  placeholder="НАЙТИ"
                  type="text" />
                <div className="mx-2 px-5 p-2 bg-[#4E6BAD] rounded-full text-white active:opacity-40 font-Ubuntu inline-flex items-center justify-center hover:cursor-pointer hover:bg-sky-600 transition-all">
                  ПОИСК
                  <Lens/>
                  </div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-around">
              <p className="text-sm text-right font-Ubuntu font-semibold text-[#4E6BAD]">ПН-ВС 9:00-18:00 (МСК)</p>
              <p className="text-2xl font-Ubuntu font-bold text-[#001B5B] ">8 (800) 000-00-00</p>
              <p className="text-sm text-right font-Ubuntu font-semibold text-[#4E6BAD]" >info@spmipk.com</p>
            </div>
          </div>
          <div className={styles.button_container}>
            {
              navigateButtons.map((e)=>{
                return <NavigateButton name={e} />
              })
            }
          </div>
          
        </div>
      </div>
      <div className="bg-slate-200 h-[2000px] w-full">

      </div>
    </>
  );
}

export default App;
