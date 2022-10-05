import SlotOne from '../../img/SchoolIs/page1/slot1.svg'
import SlotTwo from '../../img/SchoolIs/page1/slot2.svg'
import FirstMonth from './components/firstmonth'
import WhatIsASchool from './components/whatisaschool'
function ComprasionSchool() {
    return (
        <main className=" pt-12">
            <div className='mx-auto '>
            <div className='flex justify-between w-[1500px] absolute left-[300px] pt-[200px] '>
            <img src={SlotOne} alt="" />
            <img src={SlotTwo} alt="" />
            </div>
            </div>
            <h1 className='titleH1 text-darkBlue  text-3xl drop-shadow-xl text-center pb-12'>Глянем сравнение:</h1>
            <div className=' '>
                <div className='mx-52'>
                    <div className='flex'>

                        <ul className=' rounded-xl bg-liteWhite font-medium text-HeaderMainColor text-lg w-[360px] relative right-5 shadow-sm'>
                            <h1 className='titleH1 text-darkBlue  text-3xl drop-shadow-xl text-center pt-5'>Обычная школа</h1>
                            <li className='text1 my-5 mx-5'>Число детей в классе<br />
                                <span className=' font-bold'>от 25</span></li>
                            <li className='text1 my-5 mx-5'>Количество уроков<br />
                                <span className=' font-bold'>5-6 в день</span></li>
                            <li className='text1 my-5 mx-5'>Дополнительные занятия<br />
                                <span className=' font-bold'>обязательно</span></li>
                            <li className='text1 my-5 mx-5'>Индивидуальный подход<br />
                                <span className=' font-bold'>нет</span></li>
                            <li className='text1 my-5 mx-5'>Гибкий график занятий<br />
                                <span className=' font-bold'>нет</span></li>
                            <li className='text1 my-5 mx-5'>
                                Собрать ребенка в школу<br />
                                <span className=' font-bold'>от 30 тыс. рублей</span></li>
                        </ul>
                        <ul className=' bg-gradient-to-b  to-[#4271DF] from-[#789CF1] via-[#4271DF] w-[370px]  shadow-sm
                            shadow-ShadowButton rounded-xl font-medium text-xl
                             relative right-6 bottom-2'>
                            <h1 className='titleH1 text-white  text-3xl drop-shadow-xl text-center pt-5'>Онлайн школа</h1>
                            <li className='text1 my-5 mx-5 text-white'>Число детей в классе<br />
                                <span className=' font-bold'>до 12</span></li>
                            <li className='text1 my-5 mx-5 text-white'>Количество уроков<br />
                                <span className=' font-bold'>2-3 в день</span></li>
                            <li className='text1 my-5 mx-5 text-white'>Дополнительные занятия<br />
                                <span className=' font-bold'>по желанию</span></li>
                            <li className='text1 my-5 mx-5 text-white'>Индивидуальный подход<br />
                                <span className=' font-bold'>да</span></li>
                            <li className='text1 my-5 mx-5 text-white'>Гибкий график занятий<br />
                                <span className=' font-bold'>да</span></li>
                            <li className='text1 my-5 mx-5 text-white'>
                                Собрать ребенка в школу <br />
                                <span className=' font-bold'>2500 рублей</span></li>
    
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
              
            </div>
            <WhatIsASchool/>
            <FirstMonth/>
        </main>
    )
}
export default ComprasionSchool