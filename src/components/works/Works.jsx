import { useState } from 'react';
import './Works.scss'

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [{
        id: 1,
        title: "Social Media App",
        img: "https://www.bitrix24.com.br/images/content_en/apps/mobile-01.png",
        description: "A brief description for Social Media App to see how beautiful it is."
    },
    {
        id: 2,
        title: "Rampa UI Design",
        img: "https://www.skylark.com.sg/blog/wp-content/uploads/2021/07/Cost-of-Mobile-App-Development-in-Singapore.jpg",
        description: "A brief description for Rampa UI Design to see how crazy it is."
    },
    {
        id: 3,
        title: "E-commerce Web Design",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS72Ny58HvU9DPIkIPGRVNKF_LoLq3ix1HQQ&usqp=CAU",
        description: "A brief description for E-commerce Web Design to see how it works."
    }];

    const handleClick = (way)=>{
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1) : 
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
    };

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.description}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))};
            </div>
            <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
