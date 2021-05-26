import '../scss/style.scss';

import Layout from '../components/Layout';
import HeaderHome from '../components/HeaderHome';
import { ReactComponent as Prova } from '../svg/prova.svg';
import Menu from '../components/Menu';

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
      <Menu />

    </div>
  );
}
