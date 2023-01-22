import Head from 'next/head';
import {BsLightbulbFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import Memoji from '../public/Memoji-Karar.png';
import ideas from '../public/ideas.png';
import productivity from '../public/productivity.png';
import design from '../public/design.png';
import Airbnb1 from '../public/Airbnb1.png';
import Airbnb2 from '../public/Airbnb2.png';
import Airbnb3 from '../public/Airbnb3.png';
import Airbnb4 from '../public/Airbnb4.png';
import Airbnb5 from '../public/Airbnb5.png';
import Airbnb6 from '../public/Airbnb6.png';
import Airbnb7 from '../public/Airbnb7.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useState, useEffect, useRef } from 'react';
import { Tabs } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Modal from 'react-modal';
import { Card } from "flowbite-react";






export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  useEffect(() => {
    const handleAfterChange = (current) => {
      setCurrentSlide(current);
    }
    settings.afterChange = handleAfterChange
  }, []);

  const goToPrevSlide = () => {
    ref.current.slickPrev();
  }

  const goToNextSlide = () => {
    ref.current.slickNext();
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Karar Alshreese Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb 12 flex justify-between'>
            <h1 className=' text-md font-burtons dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Karar Alshreese</h1>
            <ul className=' flex items-center'>
              <li>
                <BsLightbulbFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className=' font-mono bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">
                Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='py-2 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Karar Alshreese</h2>
            <h3 className='py-2 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Fullstack Developer</h3>
            <p className='font-burtons text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-500'>
              Motivated Junior Fullstack developer with experience of building clean and elegant projects looking for an opportunity to excell my development skills in an innovative environment. Hope you like my website!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin/>
            <AiFillInstagram/>
            <AiFillGithub/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-purple-400 to-pink-600 rounded-full w-80 h-80 my-6 overflow-hidden lg:h-90 lg:w-90'>
            <Image className=' object-scale-down' src={Memoji} />
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-2 font-burtons dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Little about me and what I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-500 font-semibold max-w-lg mx-auto'>Hello! My name is Karar, im a Junior full-stack developer who has recently completed a 3-month long bootcamp with <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'><a href='https://tortugacoders.com/' target='_blank'>Tortuga coders</a></span>. I have always been a creative person and have now found a passion in coding and bringing my ideas to life on the internet. I am a dedicated to writing clean, elegant code, and excited to apply my skills and knowledge to real-world projects.</p>
            <p className='text-md py-2 leading-8 text-gray-500 font-semibold max-w-lg mx-auto'>Im a team player who always is eager to learn and improve. With my recent training and experience, i am ready to take on new challenges and become a valuable asset to any development team and company.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 lg:w-1/3'>
              <Image width={100} height={100} src={ideas} />
              <h3 className='text-lg font-burtons pt-8 pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Great ideas</h3>
              <p className='text-gray-500 font-semibold'>
                Coming up with great new ideas that will benefit my team and employer.
              </p>
              <h4 className='py-4 font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500'>My approaches</h4>
              <p className='text-gray-500 font-semibold'>Creativity</p>
              <p className='text-gray-500 font-semibold'>Serviceminded</p>
              <p className='text-gray-500 font-semibold'>Problem solving</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 lg:w-1/3'>
              <Image width={100} height={100} src={productivity} />
              <h3 className='text-lg font-burtons pt-8 pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Productivity</h3>
              <p className='text-gray-500 font-semibold'>
                Always hard working.
              </p>
              <h4 className='py-4 font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500'>My approaches</h4>
              <p className='text-gray-500 font-semibold'>Setting clear and achievable goals</p>
              <p className='text-gray-500 font-semibold'>Prioritizing and managing time effectively</p>
              <p className='text-gray-500 font-semibold'>Consistently taking action towards achieving my goals.</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 lg:w-1/3'>
              <Image width={100} height={100} src={design} />
              <h3 className='text-lg font-burtons pt-8 pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Great design</h3>
              <p className='text-gray-500 font-semibold'>
              I design with a strong sense of functionality, aesthetics, and usability in my work.
              </p>
              <h4 className='py-4 font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500'>My approaches</h4>
              <p className='text-gray-500 font-semibold'>Functionality</p>
              <p className='text-gray-500 font-semibold'>Aesthetics</p>
              <p className='text-gray-500 font-semibold'>Usability</p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 font-burtons dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-500 font-semibold max-w-lg mx-auto'>Here I would like to present to you a selection of screenshots showcasing the projects I have been working on since my time at <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'><a href='https://tortugacoders.com/' target='_blank'>Tortuga coders</a></span>. In total, I have created five projects, with my portfolio website being the sixth. I hope you find them interesting and engaging.</p>
          </div>  
          <Tabs.Group className="flex justify-between" aria-label="Tabs with icons" style="underline">
            <Tabs.Item active={true} title="Airbnb Clone"> 
              <div className="h-56 sm:h-56 xl:h-80 2xl:h-96 lg:mx-44">
                <Carousel slide={false} width="100%" className='bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md' ref={ref} {...settings}>
                <Image
                    className="h-full w-full object-contain"
                    src={Airbnb1}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb1);}} 
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb2}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb2);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb3}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb3);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb4}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb4);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb5}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb5);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb6}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb6);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb7}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb7);}}
                  />
                </Carousel>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md p-4 max-w-7xl p-2">
                      <div className="flex justify-center items-center bg-white">
                          <Image className="w-3/4 h-full object-cover" src={currentImage} alt="..." onClick={() => setModalIsOpen(false)} />
                      </div>
                  </div>
                </Modal>
              </div>
              <Card className='lg:mx-44' href="#">
                <h3 className='text-lg font-burtons pt-6 pb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Airbnb Clone</h3>
                <p className='text-md py-2 leading-8 text-gray-500 font-semibold lg:mx-20'>I am excited to present my Airbnb clone project, which I built using JavaScript, CSS, HTML, and Bootstrap for the front-end and MongoDB for the server-side. This project allowed me to work with different technologies and gain hands-on experience in building a web application that is similar to a real-world platform like Airbnb. The project features user authentication, property listings, reservations, and reviews. Users can create a profile, sign in, list a house, leave reviews, book a house, and navigate through the available properties without the need of an account. This project not only helped me improve my skills in web development but also gave me an opportunity to understand the functionalities of a vacation rental platform.</p>
              </Card>
            </Tabs.Item>
            <Tabs.Item title="Weather Tune">
            <div className="h-56 sm:h-56 xl:h-80 2xl:h-96 lg:mx-44">
                <Carousel slide={false} width="100%" className='bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md' ref={ref} {...settings}>
                <Image
                    className="h-full w-full object-contain"
                    src={Airbnb1}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb1);}} 
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb2}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb2);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb3}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb3);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb4}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb4);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb5}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb5);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb6}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb6);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb7}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb7);}}
                  />
                </Carousel>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md p-4 max-w-7xl p-2">
                      <div className="flex justify-center items-center bg-white">
                          <Image className="w-3/4 h-full object-cover" src={currentImage} alt="..." onClick={() => setModalIsOpen(false)} />
                      </div>
                  </div>
                </Modal>
              </div>
              <Card className='lg:mx-44' href="#">
                <h3 className='text-lg font-burtons pt-6 pb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Airbnb Clone</h3>
                <p className='text-md py-2 leading-8 text-gray-500 font-semibold lg:mx-20'>I am excited to present my Airbnb clone project, which I built using JavaScript, CSS, HTML, and Bootstrap for the front-end and MongoDB for the server-side. This project allowed me to work with different technologies and gain hands-on experience in building a web application that is similar to a real-world platform like Airbnb. The project features user authentication, property listings, reservations, and reviews. Users can create a profile, sign in, list a house, leave reviews, book a house, and navigate through the available properties without the need of an account. This project not only helped me improve my skills in web development but also gave me an opportunity to understand the functionalities of a vacation rental platform.</p>
              </Card>
            </Tabs.Item>
            <Tabs.Item title="Age Calculator">
            <div className="h-56 sm:h-56 xl:h-80 2xl:h-96 lg:mx-44">
                <Carousel slide={false} width="100%" className='bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md' ref={ref} {...settings}>
                <Image
                    className="h-full w-full object-contain"
                    src={Airbnb1}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb1);}} 
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb2}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb2);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb3}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb3);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb4}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb4);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb5}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb5);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb6}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb6);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb7}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb7);}}
                  />
                </Carousel>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md p-4 max-w-7xl p-2">
                      <div className="flex justify-center items-center bg-white">
                          <Image className="w-3/4 h-full object-cover" src={currentImage} alt="..." onClick={() => setModalIsOpen(false)} />
                      </div>
                  </div>
                </Modal>
              </div>
              <Card className='lg:mx-44' href="#">
                <h3 className='text-lg font-burtons pt-6 pb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Airbnb Clone</h3>
                <p className='text-md py-2 leading-8 text-gray-500 font-semibold lg:mx-20'>I am excited to present my Airbnb clone project, which I built using JavaScript, CSS, HTML, and Bootstrap for the front-end and MongoDB for the server-side. This project allowed me to work with different technologies and gain hands-on experience in building a web application that is similar to a real-world platform like Airbnb. The project features user authentication, property listings, reservations, and reviews. Users can create a profile, sign in, list a house, leave reviews, book a house, and navigate through the available properties without the need of an account. This project not only helped me improve my skills in web development but also gave me an opportunity to understand the functionalities of a vacation rental platform.</p>
              </Card>
            </Tabs.Item>
            <Tabs.Item title="Calculator">
            <div className="h-56 sm:h-56 xl:h-80 2xl:h-96 lg:mx-44">
                <Carousel slide={false} width="100%" className='bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md' ref={ref} {...settings}>
                <Image
                    className="h-full w-full object-contain"
                    src={Airbnb1}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb1);}} 
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb2}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb2);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb3}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb3);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb4}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb4);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb5}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb5);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb6}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb6);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb7}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb7);}}
                  />
                </Carousel>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md p-4 max-w-7xl p-2">
                      <div className="flex justify-center items-center bg-white">
                          <Image className="w-3/4 h-full object-cover" src={currentImage} alt="..." onClick={() => setModalIsOpen(false)} />
                      </div>
                  </div>
                </Modal>
              </div>
              <Card className='lg:mx-44' href="#">
                <h3 className='text-lg font-burtons pt-6 pb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Airbnb Clone</h3>
                <p className='text-md py-2 leading-8 text-gray-500 font-semibold lg:mx-20'>I am excited to present my Airbnb clone project, which I built using JavaScript, CSS, HTML, and Bootstrap for the front-end and MongoDB for the server-side. This project allowed me to work with different technologies and gain hands-on experience in building a web application that is similar to a real-world platform like Airbnb. The project features user authentication, property listings, reservations, and reviews. Users can create a profile, sign in, list a house, leave reviews, book a house, and navigate through the available properties without the need of an account. This project not only helped me improve my skills in web development but also gave me an opportunity to understand the functionalities of a vacation rental platform.</p>
              </Card>
            </Tabs.Item>
            <Tabs.Item title="Google Clone">
            <div className="h-56 sm:h-56 xl:h-80 2xl:h-96 lg:mx-44">
                <Carousel slide={false} width="100%" className='bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md' ref={ref} {...settings}>
                <Image
                    className="h-full w-full object-contain"
                    src={Airbnb1}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb1);}} 
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb2}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb2);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb3}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb3);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb4}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb4);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb5}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb5);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb6}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb6);}}
                  />
                  <Image
                    className="h-full w-full object-contain"
                    src={Airbnb7}
                    alt="..."
                    onClick={() => {setModalIsOpen(true); setCurrentImage(Airbnb7);}}
                  />
                </Carousel>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="bg-gradient-to-tr from-purple-400 to-pink-600 rounded-md p-4 max-w-7xl p-2">
                      <div className="flex justify-center items-center bg-white">
                          <Image className="w-3/4 h-full object-cover" src={currentImage} alt="..." onClick={() => setModalIsOpen(false)} />
                      </div>
                  </div>
                </Modal>
              </div>
              <Card className='lg:mx-44' href="#">
                <h3 className='text-lg font-burtons pt-6 pb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Airbnb Clone</h3>
                <p className='text-md py-2 leading-8 text-gray-500 font-semibold lg:mx-20'>I am excited to present my Airbnb clone project, which I built using JavaScript, CSS, HTML, and Bootstrap for the front-end and MongoDB for the server-side. This project allowed me to work with different technologies and gain hands-on experience in building a web application that is similar to a real-world platform like Airbnb. The project features user authentication, property listings, reservations, and reviews. Users can create a profile, sign in, list a house, leave reviews, book a house, and navigate through the available properties without the need of an account. This project not only helped me improve my skills in web development but also gave me an opportunity to understand the functionalities of a vacation rental platform.</p>
              </Card>
            </Tabs.Item>
          </Tabs.Group>
        </section>
      </main>
    </div>
  )
}
