import Layout from '../components/Layout';
import '../scss/style.scss';
import HeaderProtocol from '../components/HeaderProtocol';
import cover from '../images/page01/cover.png';
import FourImg from '../components/FourImg';
import perf1 from '../images/page01/perf1.png';
import perf2 from '../images/page01/perf2.png';
import perf3 from '../images/page01/perf3.png';
import perf4 from '../images/page01/perf4.png';
import dist1 from '../images/page01/dist1.png';
import dist2 from '../images/page01/dist2.png';
import dist3 from '../images/page01/dist3.png';
import dist4 from '../images/page01/dist4.png';
import end from '../images/page01/end.png';

import FullMethod from '../components/FullMethod';
import Viz01 from '../components/viz/viz01';

export default function page01() {
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol
        section={{
          title: 'TWO COMPETING AESTHETIC',
          main: '01/ titolo',
          text: 'blablablabla',
          src: cover,
          band: 'banda sotto',
          method: '/method01',
        }}
      />
      <div className="container-fluid ">
        <div className="row ps-4">
          <p className="everett pt-3 display-6">PERFECTIONIST BEAUTY</p>
          <p>
            “It's a perfect face, symmetrical with smooth skin that reminds Kilye Jenner or Kim Kardashian. A face that looks like it’s made out of clay.”

          </p>
        </div>
      </div>

      <FourImg
        description="description by"
        imgDescr={[
          {
            src: perf1,
            descr: 'descrizione1',
          },
          {
            src: perf2,
            descr: 'descrizione2',
          },
          {
            src: perf3,
            descr: 'descrizione3',
          },
          {
            src: perf4,
            descr: 'descrizione4',
          },
        ]}
      />
      <div className="container-fluid ">
        <div className="row ps-4">
          <p className="everett pt-3 display-6">DISTOPIAN AESTHETIC</p>
          <p>
            “I wanted to create an alternative to the typical beauty masks and dog snouts that were already available trying to define a new distinctly postmodern aesthetic.”
          </p>
        </div>
      </div>
      <FourImg
        description="description by2"
        imgDescr={[
          {
            src: dist1,
            descr: 'descrizione1',
          },
          {
            src: dist2,
            descr: 'descrizione2',
          },
          {
            src: dist3,
            descr: 'descrizione3',
          },
          {
            src: dist4,
            descr: 'descrizione4',
          },
        ]}
      />
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-5 align-items-center" style={{ height: '50vh' }}>
          <div className="col-6 ">
            <p className="everett text-uppercase display-4 px-3">Two macro-aesthetic between AR filters: does one exclude the other?</p>

          </div>
          <div className="col-6 display-6 ">
            <p className="px-3">
              Most of the filters around Instagram are divided into  the two macro-aesthetic introduced: these ones present themselves as the opposite of each other and follow two completely different purposes.
              If the perfectionist beauty aims to adapt user’s faces to fixed standars, the dystopic aesthetic wants to contrast this trend by creating provocative filters as tool of self expression.
            </p>
            <p className="px-3">
              The difference is immediately visible in the use of colors and in the types of modification

            </p>
          </div>
        </div>
      </div>
      <Viz01 />
      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row">
          <div className="col-6" />
          <div className="col-6 text-end">link1 link2</div>
        </div>
        <div className="row pb-5 px-5">
          <div className="col-6">
            <p className="everett text-uppercase display-5 pt-5">
              Is the trend of perfectionist
              beauty over?
            </p>
            <p className="display-6 pt-4">
              The spread of dystopic filters is taking over starting to subverting the success of the first wave of beauty filters.
            </p>
            {' '}
            <p className="display-6 pt-4">
              The idea of an aesthetic looking to a dystopic future through previously unseen effects, turned out to be particularly appealing to users: it offers an image of oneself never seen before, transcending the physical and mental limitations of how people should appear.
            </p>
            <p className="display-6 pt-4">
              This new aesthetic promoted by a young generation of digital designers, is trying to remap our relationship with beauty and perception of identities, going against the strict standard of the perfectionist one.
              Their surreal filters spreads radically different ideas, redefining the concept of beauty starting from the digital platforms.
            </p>
            {' '}
            <p className="display-6 pt-4">
              “These filters are about transformation and fun. I think people are getting bored with looking for perfection (..) It's becoming more important for many of us to embrace individualism and weirdness."
              <p className="display-6 pt-4">
                Aaron Jablonski  – Spark AR creator
                @exitsimulation
              </p>
            </p>

          </div>
          <div className="col-6 px-5">
            <img src={end} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <FullMethod home="/method01" text="FULL METHOD AND ANALYSIS ➙" />
    </div>
  );
}
