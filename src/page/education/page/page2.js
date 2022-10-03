import Girl from '../../../img/school/girl.svg'
import Buttonplus from '../../../components/buttonplus';
function Page2() {
    return(
        <main className='flex mx-auto w-[1000px] h-[175px] rounded-r-2xl rounded-l-2xl bg-[#EFF2FD] mb-24 mt-24'>
                <div>
                <div className=' ml-9 mr-9'>
                {/* relative   bottom-6 left-2 */}
                <img src={Girl} alt="" className=' relative bottom-12'/>
                </div>
                </div>
                    <div className=' my-auto w-[50%] '>
                        <h1 className=' text-HeaderMainColor titleH1 text-[27px]'>Первый месяц обучения от 5 250 руб</h1>
                        <p className='text-HeaderMainColor titleH1 text-[16px]'>Не знаете подойдет ли вашему ребенку обучение онлайн? 
                            <br />
                            Попробуйте первый месяц со скидкой 50%!</p>
                    </div>
                <div>
                    <Buttonplus/>
                </div>
            </main>
    )
}
export default Page2;