import { useState } from "react";

import SlotOne from '../../img/grid2/slot1.svg'
import SlotTwo from '../../img/grid2/slot2.svg'
import SlotThree from '../../img/grid2/slot3.svg'
import Slot from '../../img/grid2/slot4.svg'

import Buttonplus from '../../components/buttonplus';
function Childrenlove() {

    const [image, setImage] = useState(Slot)
    function ClickOne() {
        setImage(SlotOne)
    }
    function ClickTwo() {
        setImage(SlotTwo)
    }
    function ClickThree() {
        setImage(SlotThree)
    }
    return (
        <main className=" bg-liteWhite w-[1140px] mx-auto">
            <div className=" px-4">
                <h1 className=" text-left titleH1 text-5xl text-[#243976]  pb-12 pt-12 mb-8">Дети любят наши уроки потому что:</h1>
                <div>
                    <div className="grid grid-cols-2 container">

                        <div className="">
                            <button className="rounded-r-3xl rounded-l-3xl focus:bg-white shadow-xl shadow-white focus:shadow-ButtonColorTwo text-HeaderMainColor my-2
                                w-[550px] h-48 " onClick={ClickOne} spellCheck>
                                <div className="px-3">
                                    <h1 className="GothamPro text-2xl font-bold text-left ">Продвинутая геймификация</h1>
                                    <p className="GothamPro text-left pt-5 text-xl">Мы используем мини-игры чтобы увлечь ребенка в процесс решения задач и помочь усвоить материал в интересной форме</p>
                                </div>
                            </button>
                            <button className="rounded-r-3xl rounded-l-3xl focus:bg-white shadow-xl shadow-white focus:shadow-ButtonColorTwo text-HeaderMainColor my-2
                                w-[550px] h-48 " onClick={ClickTwo}>
                                <div className="px-3">
                                    <h1 className="GothamPro text-2xl font-bold text-left py-5">Не зубрят и не переписывают учебники</h1>
                                    <p className="GothamPro text-left pt-5 text-xl">Дети вовлечены в урок по средствам взаимодействия между собой и педагогом. Играют в тематические квизы. Смотрят видео и разбирают материал.</p>
                                </div>
                            </button>
                            <button className="rounded-r-3xl rounded-l-3xl focus:bg-white shadow-xl shadow-white focus:shadow-ButtonColorTwo text-HeaderMainColor my-2
                                w-[550px] h-48 " onClick={ClickThree}>
                                <div className="px-3">
                                    <h1 className="GothamPro text-2xl font-bold text-left py-5">Никакого стресса</h1>
                                    <p className="GothamPro text-left pt-5 text-xl">В учебных классах поддерживается атмосфера дружбы и уважения. Никакого давления. Дети чувствуют себя комфортно.</p>
                                </div>
                            </button>

                        </div>
                        
                        <div className="  my-auto">
                            <img className=" mx-auto my-auto" src={image} alt="" />
                        </div>
                        
                    </div>
                    <div className="ml-12 pb-12">
                            <Buttonplus/>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Childrenlove;


