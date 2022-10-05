import LogoF from '../../img/title/logo.svg'
import UserF from '../../img/nav/user.svg'

import { Link } from 'react-router-dom'
import ButtonX from '../../components/button'
function Header() {
    return (
        <header className='HeaderStyle w-[1140px] mx-auto'>

            {/* top header */}
            <div className='flex justify-between pt-[10px] pb-[19px] '>
                <img src={LogoF} alt="" />

                <div className='flex'>

                    <div className=' text-[20px] text-HeaderMainColor font-normal my-auto pr-[29px]'>
                        8
                        (800)
                        300-37-91
                    </div>

                    <ButtonX/>

                </div>

            </div>
            {/* top header */}

            {/* bottom header */}
            <div className='flex justify-between border-t-2 border-[#E4E5EC] pl-2'>

                <nav className='pt-[15px] flex'>
                    <Link className='pr-[30px] ' to={''}>

                        <p className=' text-HeaderMainColor'>Для кого</p>

                    </Link>

                    <Link className='pr-[30px] ' to={''}>

                        <p className=' text-HeaderMainColor'>Как проходят уроки</p>

                    </Link>

                    <Link className='pr-[30px] ' to={''}>

                        <p className=' text-HeaderMainColor'>Преимущества</p>

                    </Link>

                    <Link className='pr-[30px] ' to={''}>

                        <p className=' text-HeaderMainColor'>Цена</p>

                    </Link>

                    <Link className='pr-[30px] ' to={''}>

                        <p className=' text-HeaderMainColor'>Контакты</p>

                    </Link>

                </nav>
                <div className='flex pt-[15px]'>
                    <img className=' w-[18px] mr-[8px]' src={UserF} alt="" />
                    <h1 className=' text-HeaderMainColor'>Личный кабинет</h1>
                </div>
            </div>
            {/* bottom header */}

            {/* TODO: Исправить косяк с изменениями положения обьектов */}

            {/* buttons header */}
            <div className='pt-[30px] absolute h-[51px]'>
            <div className='  relative right-4'>
                <button className='mx-[15px]  bg-gradient-to-r to-[#4271DF] from-[#789CF1] rounded-l-full rounded-r-full
              focus:bg-gradient-to-r focus:to-[#864FF1] focus:from-[#49B3F7] focus:h-[50px]
            '>
                    <p className='px-[30px] py-[8px] text-white'>1-4 классы</p>
                </button>
                <button className='mx-[15px]  bg-gradient-to-r to-[#4271DF] from-[#789CF1] rounded-l-full rounded-r-full
              focus:bg-gradient-to-r focus:to-[#864FF1] focus:from-[#49B3F7] focus:h-[50px]
            '>
                    <p className='px-[30px] py-[8px] text-white'>5-8 классы</p>
                </button>
                <button className='mx-[15px]  bg-gradient-to-r to-[#4271DF] from-[#789CF1] rounded-l-full rounded-r-full
              focus:bg-gradient-to-r focus:to-[#864FF1] focus:from-[#49B3F7] focus:h-[50px]
            '>
                    <p className='px-[30px] py-[8px] text-white'>9-11 классы</p
                    ></button>
            </div>
            {/* buttons header */}
            </div>
        </header>
    )
}

export default Header;
