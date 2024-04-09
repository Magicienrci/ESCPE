import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/Layouts/slider.css';
import Img2 from '@/Pages/sliderimages/img2.jpg';
import Img3 from '@/Pages/sliderimages/img3.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true, // Activer l'effet de fondu (fade)
  slidesToShow: 1, // Afficher une seule diapositive à la fois
  slidesToScroll: 1, // Faire défiler une seule diapositive à la fois
  swipe: false, // Désactiver le glissement (swipe) pour naviguer entre les diapositives
  arrows: false, // Désactiver les flèches de navigation
};

const Slide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <Slider className="swiper-container" {...settings} beforeChange={handleBeforeChange}>
      <div className={currentIndex === 0 ? 'slide active' : 'slide'}>
        <img src={Img2} alt="Image 1" />
        <div className="slide-text">
            <h2>UNE FORMATION DE QUALITé</h2>
            <p>
                Vous avez ainsi la possibilité de réaliser vos rêves.
                <br /> Optez pour une formation qui répond à vos besoins.
            </p>
            <div className='les_bouttons'>
                <button className='les_bouttons1' onClick={() => window.open('https://api.whatsapp.com/send?phone=2250748349493', '_blank')}>écrivez nous</button>
                <button className='les_bouttons2'>nos formations</button>
            </div>
        </div>
      </div>
      <div className={currentIndex === 1 ? 'slide active' : 'slide'}>
        <img src={Img3} alt="Image 2" />
        <div className="slide-text">
            <h2>Un diplome international</h2>
            <p>
                Obtenez un diplôme international grâce à l'appuie
                <br /> de nos parténaires académiques.
            </p>
            <div className='les_bouttons'>
                <button className='les_bouttons3'>nos formations</button>
                {/* <button className='les_bouttons4'>nos formations</button> */}
            </div>
        </div>
      </div>
      {/* Ajoutez plus de diapositives selon vos besoins */}
    </Slider>
  );
};

export default Slide;
