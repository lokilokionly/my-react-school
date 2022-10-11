import ImgSchool from '../../img/school/school2.svg'
function Certificate () {
    return(
       <main className=" pt-20 flex justify-between px-5">
            <div className=' w-1/2'>
                <h1 className='titleH1  text-HeaderMainColor text-5xl'>
                Аттестат <br />
                государственного <br /> 
                образца
                </h1>
                <p className=' text1 text-lg text-HeaderMainColor'>Вы получите аттестат государственного образца. Он ничем не отличается от аттестата которые выдают в обычных школах.С аттестатом вы сможете продолжить обучение в лучших вузах страны. </p>
            </div>
            <div className=' w-1/2'>
                <div className=' pl-12'>
                <img  className=' mx-auto' src={ImgSchool} alt="" />
                </div>
            </div>
       </main> 
    )
}
export default Certificate;