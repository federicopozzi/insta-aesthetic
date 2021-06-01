import '../scss/style.scss';
import Link from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';
import cover01 from '../images/page01/cover.png';

export default function HeaderMethods({ section }) {
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
              <span className="text-dark mx-4">>  METHOD AND ANALYSIS</span>
            </span>

          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary border-bottom border-dark bg-primary ">
        <div className="row  ">
          <div className="col-6 px-4" >
              <p>{section.title}</p>
              <p>METHOD AND ANALYSIS</p>
          </div>
          <div className="col-6 px-0" />
        </div>
          <div className="row">
              <div className="col-12 px-4">
              <p>RESEARCH QUESTION</p>
              <p>{section.quest}</p>
              </div>
          </div>
      </div>

    </div>
  );
}
