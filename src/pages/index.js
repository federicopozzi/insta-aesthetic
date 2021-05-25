import '../scss/style.scss';
import Layout from '../components/Layout';
import HeaderHome from '../components/HeaderHome';
import { ReactComponent as Prova } from '../svg/prova.svg';
import menu1 from '../images/menu/menu1.png';

const menu = [
  {
    titleSx: 'titoloSx',
    subTitleSx: 'sottotitoloSx',
    titleDx: '',
    subTitleDx: '',
    src: menu1,
  },
  {
    titleSx: '',
    subTitleSx: '',
    titleDx: 'titoloDx2',
    subTitleDx: 'sottotitoloDx2',
    src: menu1,
  },
];
export default function Index() {
  return (
    <div className="bg-primary">
      <Layout />
      <HeaderHome />
      <div className="container-fluid bg-primary border-bottom border-dark border-1 ">
        <div className="row pt-4">
          <div className="col-6 pt-5 px-4">
            <h1 className="display-3">
              THE AESTHETICS OF
              <br />
              AR INSTAGRAM FILTERS
            </h1>
            <h4 className="fst-italic">A new tool for shaping identities</h4>

          </div>
          <div className="col-9 pt-5 px-4">
            <p className="display-6">
              Augmented reality filters are redefining traditional notions of beauty and the relationship with our digital altered versions. Instagram filtered images have been analyzed to presents the characteristics of two main filter’s aesthetics and to explore how they impact on our self-image through different perspectives
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end pt-5  px-3 pb-3">
          <Prova />
        </div>
      </div>
      <div className="container-fluid">
        {
          menu.map(({
            titleSx, subTitleDx, titleDx, subTitleSx, src,
          }, i) => (
            <div className="row border-bottom border-dark border-1">
              <div className="col-4 d-flex flex-column justify-content-between border-end border-dark border-1">
                <p className="">{titleSx}</p>
                <p>{subTitleSx}</p>
              </div>
              <div className="col-4 border-end border-dark border-1 px-0">
                <img src={src} className="img-fluid" alt="..." />
              </div>
              <div className="col-4 d-flex flex-column justify-content-between">
                <div>{titleDx}</div>
                <div>{subTitleDx}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
