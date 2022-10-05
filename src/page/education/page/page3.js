import slot1 from '../../../img/grid2/slot1.svg'
import slot2 from '../../../img/grid2/slot2.svg'
import slot3 from '../../../img/grid2/slot3.svg'
import slot4 from '../../../img/grid2/slot4.svg'
function Page3() {
    return (
        <main className='w-[1200px] pb-12'>
            <h1 className=" text-center titleH1 text-5xl text-[#243976]  pb-12 mb-8">Как проходят уроки в нашей онлайн школе?</h1>

            <div >
                <div className="grid grid-rows-2 grid-flow-col gap-12">

                    <div className='flex'>
                        <img src={slot1} alt="" />

                        <div className=' mx-8 my-auto'>
                        <h1 className=' text-xl text-HeaderMainColor font-semibold'>Дополнительные материалы</h1>
                        <p className=' text-base text-HeaderMainColor font-normal'>Материалы по каждой теме без лишней воды помогут закрепить знания</p>
                        </div>

                    </div>
                    
                    <div className='flex'>
                    <div className=' mx-8 my-auto'>
                    <h1 className=' text-xl text-HeaderMainColor font-semibold'>Проверка и оценка</h1>
                        <p className=' text-base text-HeaderMainColor font-normal'>Все домашние задания проверяются учителем и выставляется оценка в дневник</p>
                    </div>
                        <img src={slot2} alt="" />
                        
                    </div>
                    
                    <div className='flex'>
                        <img src={slot3} alt="" />
                        <div className=' mx-8 my-auto'>
                        <h1 className=' text-xl text-HeaderMainColor font-semibold'>Живые уроки с учителем</h1>
                        <p className=' text-base text-HeaderMainColor font-normal'>Увлекательные уроки с учителем, на которых каждому ребенку будет уделено внимание</p>
                    </div>
                    </div>
                    
                    <div className='flex'>
                    <div className=' mx-8 my-auto'>
                    <h1 className=' text-xl text-HeaderMainColor font-semibold'>Домашнее задание</h1>
                        <p className=' text-base text-HeaderMainColor font-normal'>Для закрепления всего ранее полученного материала дети получают домашнее задание</p>                        
                    </div>
                        <img src={slot4} alt="" />
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
export default Page3;