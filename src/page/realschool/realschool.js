import Buttonplus from '../../components/buttonplus';
import school1 from '../../img/school/school1.svg'

function Realschool() {
    return(
        <main className=" pt-[80px] p-3 bg-gradient-to-t from-liteWhite pb-[50px] w-[1140px] mx-auto ">
            <p className='titleH1 text-darkBlue text-[84px] drop-shadow-xl'>Настоящая школа <br/>
            <span className='text-[#49B3F7]'>у вас дома!</span>
            </p>
           
            <div className='flex '>
                <p className='text1 text-[16px] w-[445px] z-10 leading-7 text-darkBlue'>Мы даем детям реальные знания, потому наши классы не превышают 10 человек. А интерактивность и вовлеченность делает уроки интересными для детей.
                     <br /><span className='font-bold text-darkBlue'>Семейное образование с нами - это эффективно!</span>
                </p>
                <img src={school1} alt="" className='z-0 relative right-[3.2%] top-[58%] bottom-[120px]'/>
                
            </div>
            
            <Buttonplus/>
                
        </main>
    )
}
export default Realschool;