import '../scss/style.scss';
import Link from 'gatsby-link';
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
            <Link to="/about"><span className="text-dark ">METHOD AND ANALYSIS</span></Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary border-bottom border-dark bg-primary px-4">
        <div className="row ps-4 ">
          <div className="col-6">
            <p>{section.main}</p>
            <p>{section.text}</p>
          </div>
          <div className="col-6 px-0">
            <img src={section.src} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary border-bottom border-dark">
        <div className="row ps-4">

          <p>{section.band}</p>

        </div>
        <div className="row" />
      </div>

    </div>
  );
}
