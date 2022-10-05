// grid1
import slot1 from '../../../img/grid1/slot1.svg'
import slot2 from '../../../img/grid1/slot2.svg'
import slot3 from '../../../img/grid1/slot3.svg'
import slot4 from '../../../img/grid1/slot4.svg'
import slot5 from '../../../img/grid1/slot5.svg'
// grid1

function Page1() {
    return(
        <div className=' w-[1140px] mx-auto'>
            <main className='pt-[70px]'>
        <h1 className=" text-center titleH1 text-3xl text-[#243976] pb-[40px]">Кому подходит онлайн образование?</h1>
        <div className="grid  grid-flow-col gap-4  mx-[30px] text1 text-[18px] leading-7 text-center font-bold text-HeaderMainColor">
            <div className=" ">
                <div className='flex justify-center'>
                    <img src={slot1} alt="" />
                </div>
                <p className='pt-[30px]' >Для тех, кто хочет получать знания</p>
            </div>
            <div className=" ">
                <div className='flex justify-center'>
                    <img src={slot2} alt="" />
                </div>
                <p className='pt-[30px]'>Для путешественников</p>
            </div>
            <div className=" ">
                <div className='flex justify-center'>
                    <img src={slot3} alt="" />
                </div>
                <p className='pt-[30px]'>Для семейного обучения</p>
            </div>
            <div className=" ">
                <div className='flex justify-center'>
                    <img src={slot4} alt="" />
                </div>
                <p className='pt-[30px]'>Для спортсменов</p>
            </div>
            <div className=" ">
                <div className='flex justify-center'>
                    <img src={slot5} alt="" />
                </div>
                <p className='pt-[30px]'>Для проживающих за рубежом</p>
            </div>
        </div>
    </main>
        </div>
    )
}
export default Page1;