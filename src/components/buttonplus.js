import {Link} from 'react-router-dom'
import telegramm from '../img/nav/telegramm.svg'
import whatsappm from '../img/nav/watsapp.svg'
function Buttonplus () {
    return(
        <div className='pt-[40px]'>
                    <button
                        className=' px-[31px] text-white text-[11px] font-bold tracking-[0.125em] uppercase
                         bg-gradient-to-r to-ButtonColorOne from-ButtonColorTwo
                           shadow-lg shadow-ShadowButton
                         rounded-l-full rounded-r-full'>
                        <p className='py-[24px] px-[32px]'>Записаться на урок</p>
                    </button>
                    <nav className='flex pt-[20px]'>
                        <p className='text1 text-[#737373] pr-[30px]'>или написать:</p>
                        <Link className='pr-[15px]'><img className='' src={telegramm} alt="" /></Link>
                        <Link><img src={whatsappm} alt="" /></Link>
                    </nav>
            </div>
    )
}
export default Buttonplus;