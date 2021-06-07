import '../scss/style.scss';
import Link from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';
import cover01 from '../images/page01/cover.png';

export default function HeaderProtocol({ section }) {
  return (
    <div>
      <div className="container-fluid bg-light border-bottom border-dark sticky-top">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center py-3 px-4 ">

            <span>
              <Link to="/">
                <span className="text-dark">HOME </span>
              </Link>

              <span className="text-dark mx-4">{section.title}</span>
            </span>
            <Link to={section.method}><span className="text-dark ">METHOD AND ANALYSIS</span></Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary border-bottom border-dark bg-primary ">
        <div className="row ps-4 ">
          <div className="col-6">
            <h2 className="display-4 everett pt-3">{section.main}</h2>
            <div className="col-10">
              <p className="fst-italic display-6">{section.text}</p>
            </div>
          </div>
          <div className="col-6 px-0">
            <img src={section.src} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary border-bottom border-dark">
        <div className="row ps-4 py-3">
          <div className="col-8">
            <p className="display-8 everettL">{section.band}</p>
          </div>
        </div>
        <div className="row" />
      </div>

    </div>
  );
}
