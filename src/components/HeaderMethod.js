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
        <div className="row  px-2 border-start border-end border-dark border-1 mx-2 ">
          <div className="col-6 " >
              <h2 className="display-4 everett pt-3">{section.title}</h2>
              <p className={'everettR pt-2 display-6'}>METHOD AND ANALYSIS</p>
          </div>
          <div className="col-6 px-0" />
        </div>
          <div className="row pt-5 px-2 border-start border-end border-dark border-1 mx-2">
              <div className="col-6 ">
              <p className={'everett pt-3 display-6'}>RESEARCH QUESTION</p>
              <p className={'display-9'}>{section.quest}</p>
              </div>
          </div>
      </div>
        <div className="container-fluid  border-bottom border-dark  ">
            <div className="row py-3 px-2 border-start border-end border-dark border-1 mx-2">
                <div className="col-12 ">
                    <p className={'everett pt-3 display-6'}>DATA COLLECTION</p>
                </div>
                <div className="col-4 ">

                    <p className={'display-9'}>{section.firstCol}</p>
                </div>
                <div className="col-4 ">
                    <p className={'display-9'}>{section.secondCol}</p>
                </div>
            </div>
        </div>
    </div>

  );
}
