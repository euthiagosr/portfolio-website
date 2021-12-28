import './Testimonials.scss'

export default function Testimonials() {

    const data = [
    {
        id: 1,
        name: "Thiago Rodrigues",
        title: "Salesforce Developer",
        img: "https://pbs.twimg.com/profile_images/1238954496337772545/0Ng1mgxz_400x400.jpg",
        ico: "assets/twitter.png",
        featured: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis quas laboriosam aspernatur rerum aperiam provident eos? Quod hic minima modi harum, itaque ab magni corrupti! Quos rerum enim mollitia!"
    },
    {
        id: 2,
        name: "Heloyne Rodrigues",
        title: "FrontEnd Developer",
        ico: "assets/linkedin.png",
        featured: true,
        img: "https://static.vakinha.com.br/uploads/user/avatar/81627/1237554_1602120480060349_4467829238223282463_n.jpg?ims=225x225",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis quas laboriosam aspernatur rerum aperiam provident eos? Quod hic minima modi harum, itaque ab magni corrupti! Quos rerum enim mollitia!"
    },
    {
        id: 3,
        name: "Vitor Rodrigues",
        title: "BackEnd Developer",
        ico: "assets/youtube.png",
        featured: false,
        img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2112766.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis quas laboriosam aspernatur rerum aperiam provident eos? Quod hic minima modi harum, itaque ab magni corrupti! Quos rerum enim mollitia!"
    }   
    ];

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/arrow-right.png" className='left' alt="" />
                            <img src={d.img} className='user' alt="" />
                            <img src={d.ico} className='right' alt="" />
                        </div>
                        <div className="center">
                            {d.description}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
}
