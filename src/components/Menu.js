import '../scss/style.scss';
import Link from 'gatsby-link';
import menu1 from '../images/menu/menu1.png';

const menu = [
  {
    titleSx: 'Two competing \n'
        + 'aesthetics',
    subTitleSx: 'A new viral trend of dystopic and psycheledelic style of maks is subverting the traditional beauty standard of the first AR filter’s wave ',
    titleDx: '',
    subTitleDx: '',
    src: menu1,
    link: '/page01',
  },
  {
    titleSx: '',
    subTitleSx: '',
    titleDx: 'Colors of aR filters',
    subTitleDx: 'From natural tones that normalize facial changes to surreal colors which emphasize self-distortion. Analyzing the role of color in AR filters',
    src: menu1,
    link: '/page02',
  },
  {
    titleSx: '',
    subTitleSx: '',
    titleDx: 'Colors of aR filters',
    subTitleDx: 'From natural tones that normalize facial changes to surreal colors which emphasize self-distortion. Analyzing the role of color in AR filters',
    src: menu1,
    link: '/page03',
  },
  {
    titleSx: '',
    subTitleSx: '',
    titleDx: 'Colors of aR filters',
    subTitleDx: 'From natural tones that normalize facial changes to surreal colors which emphasize self-distortion. Analyzing the role of color in AR filters',
    src: menu1,
    link: '/page04',
  },
  {
    titleSx: '',
    subTitleSx: '',
    titleDx: 'Colors of aR filters',
    subTitleDx: 'From natural tones that normalize facial changes to surreal colors which emphasize self-distortion. Analyzing the role of color in AR filters',
    src: menu1,
    link: '/page05',
  },
];
export default function Menu() {
  return (
    <div className="container-fluid">
      {
                menu.map(({
                  titleSx, subTitleDx, titleDx, subTitleSx, src, link,
                }, i) => (
                  <Link to={link}>
                    <div className="row border-bottom border-dark border-1" key={src}>
                      <div className="col-4 d-flex flex-column justify-content-between border-end border-dark border-1">
                        <h2 className="everett text-uppercase display-4 py-4">{titleSx}</h2>
                        <p className="display-6 ">{subTitleSx}</p>
                      </div>
                      <div className="col-4 border-end border-dark border-1 px-0">
                        <img src={src} className="img-fluid aa" />
                      </div>
                      <div className="col-4 d-flex flex-column justify-content-between">

                        <h2 className="everett text-uppercase display-4 py-4">{titleDx}</h2>
                        <p className="display-6">{subTitleDx}</p>
                      </div>
                    </div>
                  </Link>
                ))
            }
    </div>
  );
}
