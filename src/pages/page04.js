import '../scss/style.scss';
import Layout from '../components/Layout';
import cover from '../images/page01/cover.png';
import HeaderProtocol from '../components/HeaderProtocol';
import ban1 from '../images/page04/ban1.png';
import ban2 from '../images/page04/ban2.png';
import ban3 from '../images/page04/ban3.png';
import ban4 from '../images/page04/ban4.png';
import ban5 from '../images/page04/ban5.png';
import Viz04 from '../components/viz/viz04';

export default function page04() {
  const ban = [
    { a: ban1 }, { a: ban2 }, { a: ban3 }, { a: ban4 }, { a: ban5 },
  ];
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol
        section={{
          title: 'WHY DO I FEEL PRETTIER?',
          main: '04/ titolo',
          text: 'blablablabla',
          src: cover,
          band: 'banda sotto',
          method: '/method04',
        }}
      />
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-10">
            <p>Female beauty standards reachable only by processes of digital or physical manipulation have always been with us. If before it was only about celebrities, now everyone is able to access digital alterations easily and in real time: contemporary tools of visual self-transmission have created new disciplines of beauty self-improvement. In particular the more traditional AR filters, instead of break conformist beauty standards, keep playing on our imperfections by emphasizing our unhealthy relationship with beauty: encouraging the internalization of unrealistic expectations.</p>

          </div>
          <div className="row justify-content-between">
            {
                  ban.map(({ a }, i) => (
                    <div className="col-2" key={i}>
                      <img src={a} className="img-fluid" alt="" />
                    </div>
                  ))
              }
            <div className="row">
              <div className="col-8" />
              <div className="col-4" />
              <p className="text-end">descirtp</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-7">
            <p className="everett pt-3 display-6">DISTOPIAN AESTHETIC</p>
            <p>
              “I wanted to create an alternative to the typical beauty masks and dog snouts that were already available trying to define a new distinctly postmodern aesthetic.”
            </p>
          </div>
        </div>
        <div className="row">
          <Viz04 />
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-5">
            <p>The unreachable anonymous Instagram model</p>
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          div.col-
        </div>
      </div>

    </div>
  );
}
