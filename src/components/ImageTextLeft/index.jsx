import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './ImageTextStyles.styles';
import { useTheme } from '@emotion/react';
import patrimonio from '../../assets/images/2potosi.jpg';

const ImageTextLeft = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [showAnimation, setShowAnimation] = useState(false);
  const showAnimationRef = useRef(showAnimation);

  useEffect(() => {
    showAnimationRef.current = showAnimation;
  }, [showAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      const componentElement = document.getElementById('tuComponente');
      if (componentElement) {
        const componentTop = componentElement.getBoundingClientRect().top;
        if (componentTop < window.innerHeight * 0.8 && !showAnimationRef.current) {
          setShowAnimation(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const tourData = {
    imageUrl: 'https://images.myguide-cdn.com/bolivia/events/large/festivity-of-chutillos-in-potosi-1425778.jpeg',
    title: '¿Sabías que?',
    description: 'El Patrimonio Cultural de la Humanidad es una distinción otorgada por la UNESCO a sitios que poseen un valor cultural, histórico, arquitectónico, científico o natural excepcional. Estos lugares son considerados como legados irremplazables que pertenecen a toda la humanidad.',
    description2: 'Potosí, en Bolivia, es uno de esos tesoros reconocidos por la UNESCO. Su título de Patrimonio Cultural de la Humanidad se debe en gran medida a la riqueza histórica que yace en sus entrañas. Esta ciudad altiplánica, emplazada a más de 4,000 metros sobre el nivel del mar, fue en tiempos coloniales el epicentro de la fiebre de la plata en América Latina.',
    subtitle: 'Tour Increible',
  };

  return (
    <div id="tuComponente" className={`${classes.container} ${showAnimation ? classes.showAnimation : ''}`}>
      <div className={classes.box}>
        <div className={classes.textContainer}>
          <div className={`${classes.tourContainer} ${showAnimation ? classes.showAnimation : ''}`}>
            <div className={classes.tourDetails}>
              <h2 className={classes.h2}>{tourData.title}</h2>
              <p style={{
                fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
                color: '#5B5B5B'
              }} >{tourData.description}</p>
              <p style={{
                fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
                color: '#5B5B5B'
              }} >{tourData.description2}</p>
            </div>
            <div className={classes.tourImage}>
              <img src={patrimonio} alt={tourData.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ImageTextLeft;
