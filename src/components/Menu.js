import '../scss/style.scss';
import Link from 'gatsby-link';
import menu1 from '../images/menu/menu1.png';

const menu = [
  {
    titleSx: 'titoloSx',
    subTitleSx: 'sottotitoloSx',
    titleDx: '',
    subTitleDx: '',
    src: menu1,
    link: '/page01',
  },
  {
    titleSx: '',
    subTitleSx: '',
    titleDx: 'titoloDx2',
    subTitleDx: 'sottotitoloDx2',
    src: menu1,
    link: '/page02',
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
                        <p className="">{titleSx}</p>
                        <p>{subTitleSx}</p>
                      </div>
                      <div className="col-4 border-end border-dark border-1 px-0">
                        <img src={src} className="img-fluid aa" />
                      </div>
                      <div className="col-4 d-flex flex-column justify-content-between">
                        <div>{titleDx}</div>
                        <div>{subTitleDx}</div>
                      </div>
                    </div>
                  </Link>
                ))
            }
    </div>
  );
}
