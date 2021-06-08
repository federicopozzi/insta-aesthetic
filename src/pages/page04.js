import '../scss/style.scss';
import Layout from '../components/Layout';
import cover from '../images/page04/cover.png';
import HeaderProtocol from '../components/HeaderProtocol';
import ban1 from '../images/page04/ban1.png';
import ban2 from '../images/page04/ban2.png';
import ban3 from '../images/page04/ban3.png';
import ban4 from '../images/page04/ban4.png';
import ban5 from '../images/page04/ban5.png';
import b4 from '../images/page04/b4.png';
import b41 from '../images/page04/b41.png';
import b42 from '../images/page04/b42.png';
import Viz04 from '../components/viz/viz04';
import FullMethod from '../components/FullMethod';

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
          main: '04/ WHY DO I FEEL PRETTIER?',
          text: 'Mapping the hidden alteration \n'
              + 'of perfectionist beauty filters\n'
              + '\n'
              + '\n',
          src: cover,
          band: 'Perfectionist beauty filters are sponsoring a specific face leading to a normalization of facial alterations ',
          method: '/method04',
        }}
      />
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4 py-5">
          <div className="col-10">
            <p className="display-6 pb-5">Female beauty standards reachable only by processes of digital or physical manipulation have always been with us. If before it was only about celebrities, now everyone is able to access digital alterations easily and in real time: contemporary tools of visual self-transmission have created new disciplines of beauty self-improvement. In particular the more traditional AR filters, instead of break conformist beauty standards, keep playing on our imperfections by emphasizing our unhealthy relationship with beauty: encouraging the internalization of unrealistic expectations.</p>

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
              <div className="col-4 pt-3">
                {' '}
                <p className="text-end fst-italic">"Fifty-five percent of surgeons reported seeing patients who requested surgery that would improve them on selfies, often citing their 'Instagram faces' as a preferred starting point."</p>
                <p className="text-decoration-underline">2019 – according to findings of an online survey study published in JAMA Facial Plastic Surgery.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row px-4">
          <div className="col-8 px-5 d-flex align-items-center">
            <div>
              <p className="everett py-5 display-8 text-uppercase">
                Creating an homogeneous face in a subtle way
              </p>
              <p className="display-6">
                The main goal of these filters is to beautify user’s faces readjusting individual shapes to fit a strait, specific and restricting standard.  The modifications happens in an implicit, silent, and subtle way. The titles of the filters remain generic, not describing the totality of alterations that are affecting the subject.
                The visualization wants to show the inconsistency between title and filters and the overall effect of an homogeneous anesthetized aesthetic with recurring alterations.

              </p>

            </div>
          </div>

        </div>
        <div className="row px-4">
          <Viz04 />
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark">
        <div className="row ps-4 py-3">
          <div className="col-8">
            <p className="display-8 everettR">The unreachable anonymous Instagram model</p>
          </div>
        </div>
        <div className="row" />
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-7 px-5 py-5">
            <p className="display-10">
              The types of changes applied presents constants in most cases.
              The nose is reduced, becoming thin and narrow, while lips, on the contrary, are plumped up. The eyes are enlarged and slightly raised at the end, frequently applying fake eyelashes. The face overall is slimmed and the skin smoothed.
            </p>
            <p className="display-10">
              "There are constants: symmetry, proportion, harmony and when you look at Kim, Megan Fox, Lucy Liu, Halle Berry, you'll always find commonalities."
            </p>
            <p className="text-decoration-underline">
              The New Yorker – The Age of Instagram Face
            </p>
          </div>
          <div className="col-5 border-start border-1 border-dark px-5 py-5  text-center d-flex align-items-center">
            <img src={b4} className="img-fluid px-0" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-5  px-5 py-5  text-center d-flex align-items-center">
            <img src={b41} className="img-fluid px-0" alt="" />
          </div>
          <div className="col-7 border-start border-1 border-dark px-5 py-5">
            <p className="display-10">
              This face also characterized by an ambiguous origin: It’s a racially indefinable appearance that selects the most aesthetically pleasing elements of different racial profiles presenting itself as a mix of different cultures with singularities that are difficult to find all in one face:
              {' '}
            </p>
            <p className="display-10">
              "We're talking about an overly tanned skin tone, a South Asian influence with the eyebrows and eye shape, an African American influence with the lips, a Caucasian influence with the nose, a cheek texture that is predominantly Native American and Middle Eastern."
            </p>
            <p className="text-decoration-underline">
              The New Yorker – The Age of Instagram Face
            </p>
          </div>

        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row">
          <div className="col-5  px-5 py-5  ">
            <p className="display-6">
              This face, which is the result of a studied combination, is spreading the ambition to achieve an unattainable look. The user in real life would be strongly dependent on fillers and plastic surgery procedures.
            </p>
            <p className="display-6">
              Without Instagram, this specific aspect would not be so common and familiar. The social network has helped to the spread of it among a generation of young users: despite the over modification, many of them keep showing digital altered pictures on instagram. Maybe it helps to reach an unattainable standard for a moment.
              {' '}
            </p>
          </div>
          <div className="col-7 border-start border-1 border-dark text-center py-5 d-flex align-items-center justify-content-center">
            <img src={b42} className="img-fluid px-0" alt="" />
          </div>

        </div>
      </div>
      <FullMethod home="/method04" text="FULL METHOD AND ANALYSIS →" />
    </div>
  );
}
