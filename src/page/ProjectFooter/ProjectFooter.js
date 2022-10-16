import LogoFF from '../../img/title/logo.svg'

import Doc from '../../img/nav/doc.svg'

import Youtube from '../../img/nav/youtube.svg'
import Telegram from '../../img/nav/telegramm.svg'
import Vk from '../../img/nav/vk.svg'

import Mapp from '../../img/nav/map.svg'
import Telephone from '../../img/nav/telephone.svg'

import { Link } from 'react-router-dom'
function ProjectFooter() {
    return (
        <main className=' flex justify-between bg-liteWhite pt-12 pb-5'>
            <div className=' w-[229px] '>
                <img src={LogoFF} alt="" />
                <p className='pt-16 text-sm text-HeaderMainColor opacity-35'>
                    Соглашение о конфиденциальности
                    ООО «Школа Будущего Онлайн»
                    Российская Федерация, 141804, Московская обл.,
                    г. Дмитров, ул Московская, дом 23
                    Возрастной рейтинг 6+
                </p>
            </div>
            <div className=' '>
                <h1 className=' text-xl text-HeaderMainColor font-bold py-2'>Класс</h1>
                <Link className='' to={''}>

                    <p className='py-2 text-HeaderMainColor'>1-4 класс</p>

                </Link>
                <Link className='' to={''}>

                    <p className='py-2 text-HeaderMainColor'>5-8 класс</p>

                </Link>
                <Link className='' to={''}>

                    <p className='py-2 text-HeaderMainColor'>9-11 класс</p>

                </Link>
            </div>
            <div className=' '>
            <h1 className=' text-xl text-HeaderMainColor font-bold pb-5'>Документы</h1>
                <Link className='flex' to={''}>
                    <img className=' pr-2' src={Doc} alt="" />
                    <p className=' text-HeaderMainColor'>Лицензия</p>
                </Link>
            </div>
            <div className=' '>
            <h1 className=' text-xl text-HeaderMainColor font-bold pb-5'>Соцсети</h1>
                <div className=' flex'>
                <Link to={''}><img className=' w-10 mx-2 ' src={Telegram} alt="" /></Link>
                <Link to={''}><img className=' w-10 mx-2 ' src={Youtube} alt="" /></Link>
                <Link to={''}><img className=' w-10 mx-2 ' src={Vk} alt="" /></Link>
                </div>
            </div>
            <div className=' '>
                <div className='flex py-2 text-HeaderMainColor'>
                <img src={Mapp} alt="" />
                <p>г. Дмитров <br />
                  ул Московская, дом 23 </p>
                </div>
                <div className='flex py-2 text-HeaderMainColor'>
                <img src={Telephone} alt="" />
                <p className='my-auto'>8 (800) 300-37-91</p>
                </div> 
            </div>
        </main>

    )
}
export default ProjectFooter;