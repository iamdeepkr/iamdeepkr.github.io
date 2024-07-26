import { useState, useRef } from 'react'
import Typewriter from "typewriter-effect";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './Home.css'
import hand from '../assets/hand.png'
import DetailCard from './DetailCard'
import landing from '../assets/landing.webp'
import dashboard from '../assets/dashboard.jpg'
import eCommerce from '../assets/e-commerce.png'
import appDev from '../assets/appDev.png'
import webDev from '../assets/webDev.png'

function Home() {

    const freelance = 'absolute text-xs w-max md:w-[150px] select-none rounded-full text-center px-4 py-1 text-white shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'

    const dialogRef = useRef(null);
    const [color, setColor] = useState('')
    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    const openModal = (arg, head, colr) => {
        setHeading(head)
        setColor(colr)

        switch (arg) {
            case '1': {
                setContent("Web development encompasses the creation and maintenance of websites or web applications. It involves various disciplines such as coding, design, and content management to build functional and visually appealing online platforms. Technologies like HTML, CSS, JavaScript, and frameworks like React or Angular are commonly used in the process.")
                setImage(webDev)
            } break;

            case '2': {
                setContent("App development refers to the creation and maintenance of mobile applications for various platforms like iOS and Android. It involves designing, coding, testing, and deploying software tailored to run on smartphones and tablets. Developers typically use programming languages like Swift or Kotlin, along with frameworks like React Native or Flutter, to build user-friendly and efficient apps that meet specific needs or solve particular problems.")
                setImage(appDev)
            } break;

            case '3': {
                setContent("A landing page is a standalone web page created specifically for a marketing or advertising campaign. It's where visitors 'land' after clicking on a link from an ad, email, or search engine result. Its primary goal is to convert visitors into leads or customers by focusing on a single call to action (CTA), such as signing up for a newsletter, downloading a whitepaper, or making a purchase. Landing pages are typically designed to be concise, visually appealing, and optimized for high conversion rates. They often contain compelling copy, eye-catching visuals, and persuasive elements to encourage visitors to take the desired action.")
                setImage(landing)
            } break;

            case '4': {
                setContent("A dashboard is a visual interface that provides users with a snapshot of key information and metrics relevant to a specific goal or process. It typically consolidates data from various sources into one centralized location, allowing users to monitor performance, track progress, and make informed decisions in real-time. Dashboards can display information in the form of charts, graphs, tables, and other visualizations, making complex data easy to understand at a glance. They are commonly used in business intelligence, analytics, project management, and other applications to facilitate data-driven decision-making and improve efficiency.")
                setImage(dashboard)
            } break;

            case '5': {
                setContent('An e-commerce website or app facilitates online buying and selling of goods or services. It provides a platform for users to browse products, make purchases, and manage transactions digitally. Features often include secure payment gateways, user-friendly interfaces, personalized recommendations, and order tracking, enhancing the shopping experience.')
                setImage(eCommerce)
            } break;
        }

        dialogRef.current.showModal();
    }

    const closeFun = () => {
        dialogRef.current.close()
        setContent('')
        setImage(null)
    }

    return (
        <>
            <div className="center-tag">
                <div className="max-width flex md:flex-row flex-col-reverse items-start justify-between px-6 md:px-0 2xl:mt-32 md:mt-24 mt-14 -mb-[3vh] md:-mb-[8vh]">

                    <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 w-full">
                        <div className="text-4xl md:text-[2.75vw] font-bold leading-none animate__animated animate__fadeInLeft animate__faster">Welcome To My Portfolio</div>
                        <div className="flex md:flex-row flex-col md:items-end h-[12vh] md:h-auto  animate__animated animate__fadeInLeft animate__faster">
                            <div className="text-lg md:text-[1.5vw] pb-1">I am &nbsp;</div>
                            <div className="text-4xl writing md:text-[2.75vw] md:pt-2 font-semibold text-neon">
                                <Typewriter
                                    options={{
                                        delay: 50,
                                        strings: ['R U Bharti', 'a Software Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex md:hidden items-center justify-center mt-20 w-full relative  animate__animated animate__fadeInRight animate__faster group">

                            <img draggable="false" src={hand} alt="" className="cat_image w-[100%] overflow-clip ml-10 -mt-6 transition-all duration-300 ease-in-out transform group-hover:scale-95 z-10" srcset="" />

                            <div className="categories absolute h-[70vw] w-[70vw] top-[-2.5rem] left-[8%] z-50 transition-all duration-300 ease-in-out rounded-full border-dashed border border-gray-400 dark:border-gray-600">
                                <span onClick={() => openModal('1', "Web Development", "#c52223")} className={`${freelance} group-hover:scale-125 transition-all duration-300 ease-in-out left-[34%] top-[-1%] bg-[#c52223]`}>Web Development</span>
                                <span onClick={() => openModal('2', "App Development", "#3346eb")} className={`${freelance} group-hover:scale-125 transition-all duration-300 ease-in-out top-[34%] left-[-15%] bg-[#3346eb]`}>App Development</span>
                                <span onClick={() => openModal('3', "Landing Page", "#971ca0")} className={`${freelance} group-hover:scale-125 transition-all duration-300 ease-in-out top-[34%] right-[-15%] bg-[#971ca0]`}>Landing Page</span>
                                <span onClick={() => openModal('4', "Dashboard", "#ed3387")} className={`${freelance} group-hover:scale-125 transition-all duration-300 ease-in-out bottom-[12%] right-[-6%] bg-[#ed3387]`}>Dashboard</span>
                                <span onClick={() => openModal('5', "E-Commerce", "#009288")} className={`${freelance} group-hover:scale-125 transition-all duration-300 ease-in-out bottom-[12%] left-[0%] bg-[#009288]`}>E-Commerce</span>
                            </div>


                        </div>

                        <p className="w-full mt-4 md:text-base text-sm text-justify flex flex-col gap-3 md:gap-2">
                            <div>
                                I'm excited to take on new and innovative projects! Whether it's <b>WEB DEVELOPMENT</b> or <b>APP CREATION</b>, I'm here to help bring your ideas to life. 🌟
                            </div>

                            <div className='w-full flex flex-wrap justify-center text-start'>
                                <span className="w-[7%] md:w-[4%]">👯</span> <span className="w-[93%] md:w-[96%]">Looking to take or collaborate on innovative mobile and web development projects.</span>
                                <span className="w-[7%] md:w-[4%]">🤝</span> <span className="w-[93%] md:w-[96%]">Eager to contribute to challenging projects that push the boundaries of technology.</span>
                                <span className="w-[7%] md:w-[4%]">💬</span> <span className="w-[93%] md:w-[96%]">Ask me about full stack development and creating seamless mobile and web applications.</span>
                            </div>

                            <div className='text-justify'>
                                💼 Let's collaborate and make your vision a reality.🚀✨<br />
                                Feel free to connect 🤝 me through below 👇 links 📎
                            </div>
                            {/* As a passionate, I'm thrilled to announce that I'm open for new and exciting projects. From 🚀 WEB DEVELOPMENT to APP CREATION 🚀, let's collaborate and bring your visions to reality.  💼✨ Drop me a message and let's get started. */}
                        </p>
                        <div className="flex gap-2 md:gap-4 justify-between md:w-[50%] w-full wrapper">
                            <li onClick={() => window.open('mailto:kumarrubharti.rtcit@gmail.com')} class="icon h-[5.5vh] sm:h-max md:h-[6.5vh] 2xl:h-[6vh] w-[12.5vw] md:w-[7vw] instagram animate__animated animate__fadeInUp animate__faster border-2 border-red-400 dark:border-red-200 text-red-400 dark:text-red-200 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-1">
                                <span class="tooltip">Mail</span>
                                <span><SiGmail /></span>
                            </li>
                            <li onClick={() => window.open('tel:+918340441298')} class="icon h-[5.5vh] sm:h-max md:h-[6.5vh] 2xl:h-[6vh] w-[12.5vw] md:w-[7vw] facebook animate__animated animate__fadeInUp animate__fast border-2 border-blue-400 dark:border-blue-200 text-blue-400 dark:text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-2">
                                <span class="tooltip">Phone</span>
                                <span><BsFillTelephoneFill /></span>
                            </li>
                            <li onClick={() => window.open('https://wa.me/918340441298')} class="icon h-[5.5vh] sm:h-max md:h-[6.5vh] 2xl:h-[6vh] w-[12.5vw] md:w-[7vw] whatsapp animate__faster border-2 border-green-400 dark:border-green-200 text-green-400 dark:text-green-200 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-3">
                                <span class="tooltip">Whatsapp</span>
                                <span><FaWhatsapp /></span>
                            </li>
                            <li onClick={() => window.open('https://www.linkedin.com/in/r-u-bharti-54ab921a3')} className="icon h-[5.5vh] sm:h-max md:h-[6.5vh] 2xl:h-[6vh] w-[12.5vw] md:w-[7vw] linkedin animate__fadeInUp animate__fast border-2 border-sky-400 dark:border-sky-200 text-sky-400 dark:text-sky-200 hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer p-2 rounded-full  drop-shadow-icon-4">
                                <span class="tooltip">LinkedIn</span>
                                <span><FaLinkedinIn /></span>
                            </li>

                        </div>
                    </div>

                    <div className="hidden md:flex select-none items-center justify-center md:w-1/2 w-full relative  animate__animated animate__fadeInRight animate__faster group">

                        <img draggable="false" src={hand} alt="" className="cat_image w-[60vw] overflow-clip md:w-[70%] 2xl:w-[85%] -mt-10 -mr-52 2xl:-mr-44 transition-all duration-300 ease-in-out transform group-hover:scale-95 z-10" srcset="" />

                        <div className="categories absolute h-[25vw] w-[25vw] top-[-1.5rem] right-[10%] group-hover:z-50 transition-all duration-300 ease-in-out rounded-full border-dashed border border-gray-400 dark:border-gray-600">
                            <span onClick={() => openModal('1', "Web Development", "#c52223")} className={`${freelance} hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out left-[34%] top-[-1%] bg-[#c52223]`}>Web Development</span>
                            <span onClick={() => openModal('2', "App Development", "#3346eb")} className={`${freelance} hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out top-[34%] left-[-15%] bg-[#3346eb]`}>App Development</span>
                            <span onClick={() => openModal('3', "Landing Page", "#971ca0")} className={`${freelance} hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out top-[34%] right-[-15%] bg-[#971ca0]`}>Landing Page</span>
                            <span onClick={() => openModal('4', "Dashboard", "#ed3387")} className={`${freelance} hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out bottom-[12%] right-[-6%] bg-[#ed3387]`}>Dashboard</span>
                            <span onClick={() => openModal('5', "E-Commerce", "#009288")} className={`${freelance} hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out bottom-[12%] left-[0%] bg-[#009288]`}>E-Commerce</span>
                        </div>


                    </div>
                </div>
            </div>

            <dialog ref={dialogRef} className="animate__animated animate__zoomIn animate__faster bg-transparent outline-none">
                <DetailCard image={image} heading={heading || ''} content={content || ''} color={color} close={() => closeFun()} />
            </dialog>

        </>
    );
}

export default Home;

{/* <img  draggable="false"src='./blob.svg' alt="" className="w-[80vw] md:w-[40vw] dark:opacity-100 opacity-70  transition duration-300 ease-in-out transform group-hover:translate-y-4" />
    <img  draggable="false"src="./profile.png" alt="" className="w-[60vw] overflow-clip md:w-[28vw] top-[-3vh] transition duration-300 ease-in-out group-hover:scale-105 transform group-hover:-translate-y-4 ml-6 md:top-3 absolute" /> */}