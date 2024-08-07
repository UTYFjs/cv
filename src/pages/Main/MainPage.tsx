import './mainPage.scss';
import { Button } from '~/components/button/Button';
import { Footer } from '~/components/footer/Footer';
import { animated, useSpring } from '@react-spring/web';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const calcParallaxBgPosition = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const parallaxBgPosition = (x: number, y: number, delay: number) => `translate(${x / delay}px,${y / delay}px)`;
const parallaxBg = [
  { text: '[ ... ]', top: '10vh', right: '24vw', delay: 3 },
  { text: '!==', top: '14vh', right: '10vw', delay: 13 },
  { text: '( ) => {   }', top: '34vh', right: '55vw', delay: 20 },
  { text: '&&', top: '35vh', right: '36vw', delay: 8 },
  { text: 'function*', top: '47vh', right: '15w', delay: 17 },
  { text: '</>', top: '51vh', right: '40vw', delay: 10 },
  { text: 'Record<string, unknown>', top: '58vh', right: '8vw', delay: 20 },
  { text: 'defer', top: '65vh', right: '8vw', delay: 15 },
  { text: 'continue', top: '73vh', right: '12vw', delay: 12 },
  { text: '?.', top: '75vh', right: '25vw', delay: 5 },
];

const calc1 = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.0,
];

const trans = (x: number, y: number, s: number) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const MainPage = () => {
  const [propsBg, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const cardRef = useRef(null);
  const fotoRef = useRef(null);

  const configFoto = {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };

  // useControls({
  //   mass: 1,
  //   tension: 170,
  //   friction: 26,
  //   clamp: false,
  //   precision: 0.01,
  //   velocity: 0,
  // });
  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1], configFoto }), [configFoto]);

  const parallaxItems = parallaxBg.map(({ text, top, right, delay }) => (
    <animated.span
      key={text + top + right}
      style={{
        whiteSpace: 'nowrap',
        transform: propsBg.xy.to((x, y) => parallaxBgPosition(x, y, delay)),
        top: top,
        right: right,
      }}
    >
      {text}
    </animated.span>
  ));

  const handleMouseLeaveFoto = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleMouseMoveFoto = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (cardRef.current) {
      const rect = (cardRef.current as HTMLElement).getBoundingClientRect();
      api.start({
        xys: calc1(e.clientX, e.clientY, rect),
      });
    }
  };
  const handleDownloadCV = (src: string) => {
    const anchor = document.createElement('a');
    anchor.href = src;
    anchor.download = src;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <>
      <main
        className="main"
        onMouseMove={(e) => {
          if (e.target !== fotoRef.current) {
            return set({ xy: calcParallaxBgPosition(e.clientX, e.clientY) });
          }
        }}
      >
        <div className="cv">
          <div className="info">
            <h1 className="name"> Сугаков Геннадий</h1>
            <h2 className="speciality">Javascript | Front-end | React Developer</h2>
            <p className="addition"> Сайт еще в разработке, но Вы можете ознакомиться с моим резюме:</p>
            <div className="links">
              <Button
                reverseBg={false}
                style={{ width: '100%' }}
                onClick={() => handleDownloadCV('CV_Suhakou_Henadzi_27.07.24_EN.pdf')}
              >
                Download PDF <span className="span__en">(EN)</span>
              </Button>
              <Link
                to={'https://drive.google.com/file/d/1V4iITYr0WUYNhCzuLf4NSCemVhkJ6lA9/view?usp=sharing'}
                target="_blank"
              >
                {' '}
                <Button reverseBg={true} style={{ width: '100%' }}>
                  Open СV PDF <span className="span__en">(EN)</span>
                </Button>
              </Link>

              <Button
                reverseBg={true}
                style={{ width: '100%' }}
                onClick={() => handleDownloadCV('CV_Suhakou_Henadzi_27.07.24_RU.pdf')}
              >
                Скачать PDF <span className="span__ru">(RU)</span>
              </Button>
              <Link
                to="https://drive.google.com/file/d/11JRDSn5rXg0qz4rdq2JtNBbIzGTqoIsF/view?usp=sharing"
                target="_blank"
              >
                <Button style={{ width: '100%' }}>
                  Открыть СV PDF <span className="span__ru">(RU)</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="foto" ref={cardRef}>
            {' '}
            <animated.img
              ref={fotoRef}
              className="foto"
              src="./image/My-foto-square.webp"
              alt="my-foto"
              width="300"
              height="300"
              style={{ transform: xys.to(trans) }}
              onMouseLeave={handleMouseLeaveFoto}
              onMouseMove={handleMouseMoveFoto}
            />
          </div>
        </div>
      </main>
      <div className="parallax-bg">{...parallaxItems}</div>
      <Footer />
    </>
  );
};
