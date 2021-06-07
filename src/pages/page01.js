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
import Link from 'gatsby-link';

export default function page01() {
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol
        section={{
          title: 'TWO COMPETING AESTHETIC',
          main: '01/ TWO COMPETING AESTHETIC',
          text: 'A new viral trend of dystopic and psycheledelic style of maks is subverting the traditional beauty standard of the first filter’s wave ',
          src: cover,
          band: 'Presenting the visual characteristics of the two main and opposite instragram faces aesthetics',
          method: '/method01',
        }}
      />
      <div className="container-fluid ">
        <div className="row ps-4">
          <p className="everett pt-5 display-7">PERFECTIONIST BEAUTY</p>
          <div className="col-8">
            <p className="display-6 fst-italic pb-5">
              “It's a perfect face, symmetrical with smooth skin that reminds Kilye Jenner or Kim Kardashian. A face that looks like it’s made out of clay.”

            </p>
          </div>
        </div>
      </div>

      <FourImg
        description="Descriptions by
The Age of Instagram Face By Jia Tolentino"
        imgDescr={[
          {
            src: perf1,
            descr: 'It’s a fresh face with smooth skin, without pores and imperfections. The cheekbones are high, the chin is strong and the platform under the chin forms a ninety degree angle. \n'
                + '\n',
          },
          {
            src: perf2,
            descr: 'It has big cat eyes and long eyelashes. The eyebrows are thick and curved.\n',
          },
          {
            src: perf3,
            descr: 'The nose is small and thin, while the lips are full and fleshy. Freckles and slightly blushed cheeks contribute to create a natural look.\n',
          },
          {
            src: perf4,
            descr: 'The face is white but ambiguously ethnic: It looks at you shyly, with an absent air.\n',
          },
        ]}
      />
      <div className="container-fluid ">
        <div className="row ps-4">
          <p className="everett pt-5 display-7">DISTOPIAN AESTHETIC</p>
          <div className="col-8">
            <p className="display-6 fst-italic ">
              “I wanted to create an alternative to the typical beauty masks and dog snouts that were already available trying to define a new distinctly postmodern aesthetic.”
            </p>
            <p className="pb-5 text-decoration-underline fst-italic">@johwska Spark AR Creator </p>
          </div>
        </div>
      </div>
      <FourImg
        description="How The Fantastical, Futuristic Art of AR Face Filters Is Subverting Traditional Notions of Beauty
aiga eye on design

WHY BEAUTY3000 AND OTHER FUTURISTIC FILTERS ARE TAKING OVER SOCIAL MEDIA
dazeddigital
"
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
      <div className="container-fluid border-bottom border-dark border-1 " style={{ backgroundColor: '#BFBEBE\n' }}>
        <div className="row px-5 align-items-center" style={{ height: '50vh' }}>
          <div className="col-6 ">
            <p className="everett text-uppercase display-8 px-5">Two macro-aesthetic between AR filters: does one exclude the other?</p>

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
      <div className="container-fluid border-bottom border-dark border-1 pt-2">
        <div className="row">
          <div className="col-6" />
          <div className="col-6 text-end">
            <span className="text-decoration-underline text-uppercase">Discover the color comparison</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-decoration-underline text-uppercase">Discover the Stickers analysis</span>
          </div>
        </div>
        <div className="row pb-5 px-5 pt-5">
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
              <p className="display-6 pt-4 text-success">
                Aaron Jablonski  – Spark AR creator
                @exitsimulation
              </p>
            </p>

          </div>
          <div className="col-6 px-5">
            <img src={end} className="img-fluid pb-5" alt="" />
            <Link to="/page05">
              <p className="text-decoration-underline text-uppercase text-end">
                05 – when the filter leaves the platform
              </p>
            </Link>
          </div>
        </div>
      </div>
      <FullMethod home="/method01" text="FULL METHOD AND ANALYSIS ➙" />
    </div>
  );
}
