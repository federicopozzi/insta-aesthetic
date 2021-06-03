import '../scss/style.scss';
import Link from 'gatsby-link';


export default function HeaderMethods({ section }) {
  return (
    <div>
      <div className="container-fluid  border-bottom border-dark ">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center py-3 px-4 ">

            <span>
              <Link to="/">
                <span className="text-dark">HOME</span>
              </Link>

                <Link to={section.link}><span className="text-dark mx-4">{section.title}</span></Link>
              <span className="text-dark mr-4">>  METHOD AND ANALYSIS</span>
            </span>

          </div>
        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row  ">
          <div className="col-6 px-4" >
              <h2 className="display-3 everett pt-3">{section.title}</h2>
              <p className={'everett pt-3'}>METHOD AND ANALYSIS</p>
          </div>
          <div className="col-6 px-0" />
        </div>
          <div className="row pt-5">
              <div className="col-12 px-4">
              <p className={'everett pt-3 display-6'}>RESEARCH QUESTION</p>
              <p>{section.quest}</p>
              </div>
          </div>
      </div>
        <div className="container-fluid  border-bottom border-dark  ">
            <div className="row py-3">
                <div className="col-12 px-4">
                    <p className={'everett pt-3 display-6'}>DATA COLLECTION</p>
                </div>
                <div className="col-4 px-4">

                    <p>{section.firstCol}</p>
                </div>
                <div className="col-4 px-4">
                    <p>{section.secondCol}</p>
                </div>
            </div>
        </div>

    </div>
  );
}
