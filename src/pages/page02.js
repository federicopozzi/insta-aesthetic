import Layout from '../components/Layout';
import '../scss/style.scss';
import HeaderProtocol from '../components/HeaderProtocol';
import cover from '../images/page01/cover.png';
import FourImg from '../components/FourImg';
import a from '../images/page02/1.png';
import b from '../images/page02/2.png';
import c from '../images/page02/3.png';
import d from '../images/page02/4.png';
import a1 from '../images/page02/a1.png';
import b1 from '../images/page02/a2.png';
import c1 from '../images/page02/a3.png';
import d1 from '../images/page02/a4.png';
import legend1 from '../images/page02/legend1.png';
import schema1 from '../images/page02/schema1.png';

import FullMethod from '../components/FullMethod';
import Viz01 from '../components/viz/viz01';
import Viz02 from '../components/viz/viz02';

export default function page02() {
  const img2 = [{
    src: a,
  },
  {
    src: b,
  }, {
    src: c,
  }, {
    src: d,
  },
  ];

  const img21 = [{
    src: a1,
  },
  {
    src: b1,
  }, {
    src: c1,
  }, { src: d1 },
  ];
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol
        section={{
          title: 'TWO COMPETING AESTHETIC',
          main: '02/ COLORS',
          text: 'blablablabla',
          src: cover,
          band: 'banda sotto',
          method: '/method02',
        }}
      />

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-10">
            <p>
              Color and light play a major role in the final aesthetic of a filter.
              From natural skin tones, to fluorescent-colored cheeks, two main trends also appear in the use of colors. While the perfectionist beauty filters favors an overall natural effect, dystopic masks transforms nude skin tones in surreal shades, turning color into a tool of distortion able to influence the perception of faces.
            </p>
            <p>
              In the analysis, the main color of each post was identified by highlighting instances where it contributed to create a surrealistic effect, applying modifications not achievable in real life.
            </p>
          </div>
        </div>
      </div>
      <Viz02 />
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-7 ">
            <p className="everett pt-3 display-5 text-uppercase">The #nofilter effect of perfectionist beauty filters</p>
          </div>
          <div className="row pb-5">
            {
                    img2.map(({
                      src,
                    }, i) => (
                      <div className="col-3">
                        <img src={src} className="img-fluid" alt="" />
                      </div>
                    ))
                }
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row">
          <div className="col-6">
            <img src={schema1} className="img-fluid" alt="" />
          </div>
          <div className="col-6 border-start border-dark border-1">
            <p>
              In perfectionist beauty filters there is a dominance of colors characterized by natural tones: warm and smooth.

            </p>
            <p>The presence of different and brighter colors mainly concerns the background of the post not affecting user’s face.</p>
            <p>
              {' '}
              The color probably wants to be neutral to ensure a general natural effect, making less noticeable the presence of other alterations in the face.
            </p>
            <p className="text-end">
              <img src={legend1} className="img-fluid" alt="" />
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-7 ">
            <p className="everett pt-3 display-5 text-uppercase">The surreal shades of dystopic aesthetic filters</p>
          </div>
          <div className="row pb-5">
            {
                        img21.map(({
                          src,
                        }, i) => (
                          <div className="col-3">
                            <img src={src} className="img-fluid" alt="" />
                          </div>
                        ))
                    }
          </div>
        </div>
      </div>
      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row">

          <div className="col-6 border-start border-dark border-1">
            <p>
              In perfectionist beauty filters there is a dominance of colors characterized by natural tones: warm and smooth.

            </p>
            <p>The presence of different and brighter colors mainly concerns the background of the post not affecting user’s face.</p>
            <p>
              {' '}
              The color probably wants to be neutral to ensure a general natural effect, making less noticeable the presence of other alterations in the face.
            </p>
            <p className="text-start">
              <img src={legend1} className="img-fluid" alt="" />
            </p>
          </div>
          <div className="col-6">
            <img src={schema1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <FullMethod home="/method02" text="FULL METHOD AND ANALYSIS ➙" />
    </div>
  );
}
