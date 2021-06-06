import '../scss/style.scss';
import Layout from '../components/Layout';
import cover from '../images/page01/cover.png';
import HeaderProtocol from '../components/HeaderProtocol';
import ban1 from '../images/page04/ban1.png';
import ban2 from '../images/page04/ban2.png';
import ban3 from '../images/page04/ban3.png';
import ban4 from '../images/page04/ban4.png';
import ban5 from '../images/page04/ban5.png';
import b4 from '../images/page04/b4.png';
import b41 from '../images/page04/b4.png';
import Viz04 from '../components/viz/viz04';
import p32 from '../images/page03/p32.png';

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
          <div className="col-4">
            <p>The unreachable anonymous Instagram model</p>
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-7">
            <p>
              The types of changes applied presents constants in most cases.
              The nose is reduced, becoming thin and narrow, while lips, on the contrary, are plumped up. The eyes are enlarged and slightly raised at the end, frequently applying fake eyelashes. The face overall is slimmed and the skin smoothed.
            </p>
            <p>
              "There are constants: symmetry, proportion, harmony and when you look at Kim, Megan Fox, Lucy Liu, Halle Berry, you'll always find commonalities."
            </p>
            <p>
              The New Yorker – The Age of Instagram Face
            </p>
          </div>
          <div className="col-5 border-start border-1 border-dark px-5 py-5  text-center">
            <img src={b4} className="img-fluid px-0" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-5 border-start border-1 border-dark px-5 py-5  text-center">
            <img src={b41} className="img-fluid px-0" alt="" />
          </div>
          <div className="col-7">
            <p>
              This face also characterized by an ambiguous origin: It’s a racially indefinable appearance that selects the most aesthetically pleasing elements of different racial profiles presenting itself as a mix of different cultures with singularities that are difficult to find all in one face:
              {' '}
            </p>
            <p>
              "We're talking about an overly tanned skin tone, a South Asian influence with the eyebrows and eye shape, an African American influence with the lips, a Caucasian influence with the nose, a cheek texture that is predominantly Native American and Middle Eastern."
            </p>
            <p>
              The New Yorker – The Age of Instagram Face
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
