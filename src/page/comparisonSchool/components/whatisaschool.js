import SlotOne from '../../../img/SchoolIs/Page2/slot1.svg'
import SlotTwo from '../../../img/SchoolIs/Page2/slot2.svg'
import SlotThree from '../../../img/SchoolIs/Page2/slot3.svg'
import SlotFour from '../../../img/SchoolIs/Page2/slot4.svg'
import SlotFive from '../../../img/SchoolIs/Page2/slot5.svg'
import SlotSix from '../../../img/SchoolIs/Page2/slot6.svg'

function WhatIsASchool () {
    return (
        <main>
            <h1 className=" text-center titleH1 text-5xl text-[#243976]  pb-12 pt-12 mb-8">Онлайн школа <br /> 
        среднего образования это -</h1>
        <div className=' grid grid-cols-3 text-center text1 text-HeaderMainColor'>
            <div>
                <img className=' mx-auto' src={SlotOne} alt="" />
                <h1 className=' font-bold text-xl pt-9 pb-3'>Удобный график занятий</h1>
                <p className='  font-medium text-lg'>Вы можете выбрать удобное время начала занятий (9:00, 11:00 или 13:00)</p>
            </div>
            
            <div>
                <img className=' mx-auto' src={SlotTwo} alt="" />
                <h1 className=' font-bold text-xl pt-9 pb-3'>Записи уроков доступны всегда</h1>
                <p className='  font-medium text-lg'>Пропустил урок - не страшно!
Записи уроков можно посмотреть в любое время</p>
            </div>
            
            <div>
                <img className=' mx-auto' src={SlotThree} alt="" />
                <h1 className=' font-bold text-xl pt-9 pb-3'>Сбалансированная нагрузка</h1>
                <p className='  font-medium text-lg'>Никаких лишних и не нужных занятий. Только важное и необходимое</p>
            </div>
            
            <div>
                <img className=' mx-auto' src={SlotFour} alt="" />
                <h1 className=' font-bold text-xl pt-9 pb-3'>Не нужно покупать школьную форму и канцелярию</h1>
                <p className='  font-medium text-lg'>Тетрадка, ручка, линейка и карандаш - это все, что нужно для учебы в онлайн школе!</p>
            </div>
            
            <div>
                <img className=' mx-auto' src={SlotFive} alt="" />
                <h1 className=' font-bold text-xl pt-9 pb-3'>Высококлассные педагоги</h1>
                <p className='  font-medium text-lg'>Опытные учителя прошедшие строгий отбор и использующие современные методы обучения</p>
            </div>
            
            <div>
                <img className=' mx-auto' src={SlotSix} alt="" />
                <h1 className=' font-bold text-xl pt-9 pb-3'>Никакого стресса</h1>
                <p className='  font-medium text-lg'>В учебных классах поддерживается атмосфера дружбы и уважения. Никакого давления. Дети чувствуют себя комфортно</p>
            </div>
        </div>
        </main>
    )
}
export default WhatIsASchool;