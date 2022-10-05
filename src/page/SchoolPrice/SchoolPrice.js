import Gold from '../../img/nav/gold.svg'
function SchoolPrice() {
    return (
        <main className=' bg-liteWhite '>
            <h1 className="text-center titleH1 text-5xl text-HeaderMainColor pb-[40px]">Сколько стоит обучение в онлайн школе?</h1>
            <div className=' w-[1500px]'>
                <div className='flex text1 mx-auto'>
                    <div className=' rounded-2xl bg-white text-HeaderMainColor mx-5'>
                        <div>
                            <h1>10 500 ₽ <span>/мес</span></h1>
                        </div>
                        <h2 className=' text-xl font-bold'>1-4 класс</h2>
                        <h3 className=' font-light'>Веселые и увлекательные уроки</h3>

                        <div className='flex my-8 px-5'>
                            <img src={Gold} alt="" />
                            <p className=' font-medium pl-5'> 2-3 урока в день пн-чт</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img src={Gold} alt="" />
                            <p className=' font-medium pl-5'> 10-12 учеников в классе</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img src={Gold} alt="" />
                            <p className=' font-medium pl-5'> внимание к каждому ребенку</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img src={Gold} alt="" />
                            <p className=' font-medium pl-5'> интерактивные тренажеры</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img src={Gold} alt="" />
                            <p className=' font-medium pl-5'> игровая форма обучения</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img src={Gold} alt="" />
                            <p className=' font-medium pl-5'> зачисление в школу партнер 12 000/год</p>
                        </div>

                        <div className='flex my-8 px-5'>
                            <img src="" alt="" />
                        </div>
                        <button>Подробнее</button>
                    </div>
                    <div className=' rounded-2xl bg-white text-HeaderMainColor mx-5'>
                        <div>
                            <h1>12 500 ₽ <span>/мес</span></h1>
                        </div>
                        <h2 className=' text-xl font-bold'>5-8 класс</h2>
                        <h3 className=' font-light'>Помогаем не потерять интерес</h3>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> 3-5 уроков в день пн-пт</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> 12-15 учеников в классе</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> внимание к каждому ребенку</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> интерактивные тренажеры</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> усиленная подготовка к ОГЭ</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> зачисление в школу партнер 12 000/год</p>
                        </div>

                        <div className='flex my-8 px-5'>
                            <img src="" alt="" />
                        </div>
                        <button>Подробнее</button>
                    </div>
                    <div className=' rounded-2xl bg-white text-HeaderMainColor mx-5'>
                        <div>
                            <h1>16 500 ₽ <span>/мес</span></h1>
                        </div>
                        <h2 className=' text-xl font-bold'>9-11 класс</h2>
                        <h3 className=' font-light'>Самый важный этап в жизни</h3>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> 4-5 уроков в день пн-пт</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> 12-15 учеников в классе</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> внимание к каждому ребенку</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> интерактивные тренажеры</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> усиленная подготовка к ОГЭ и ЕГЭ</p>
                        </div>
                        <div className='flex my-8 px-5'>
                            <img className='' src={Gold} alt="" />
                            <p className=' font-medium pl-5'> зачисление в школу партнер 12 000/год</p>
                        </div>

                        <div className='flex my-8 px-5'>
                            <img src="" alt="" />
                        </div>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default SchoolPrice;