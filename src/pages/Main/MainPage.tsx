import './mainPage.scss';
import { Header } from '~/components/header/Header';
import { Button } from '~/components/button/Button';
import { Footer } from '~/components/footer/Footer';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="flex-row">
          <img className="foto" src="./public/image/My-foto-square.webp" alt="my-foto" width="300" height="300" />
          <div className="info">
            {/* <p className="hello">Hello world!</p> */}
            <h1 className="name"> Сугаков Геннадий</h1>
            <h2 className="speciality">Javascript | Front-end | React Developer</h2>
            <p> Сайт еще в разработке, но Вы можете ознакомиться с моим резюме:</p>
            <div className="links">
              {' '}
              <Button>
                <a
                  className="link-download"
                  href="CV_Suhakou_Henadzi_Frontend_05.2024_RU.pdf"
                  download="CV_Suhakou_Henadzi_Frontend_05.2024_RU.pdf"
                >
                  Скачать
                </a>
              </Button>
              <Button>
                <a
                  className="link-download"
                  href="https://drive.google.com/file/d/1f69ssc5raMnJPZ1NW4Iul66N7JAbEcW8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть СV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
