import Layout from '../components/Layout';
import '../scss/style.scss';
import HeaderProtocol from '../components/HeaderProtocol';
import cover from '../images/page02/cover.png';
import a from '../images/page02/1.png';
import b from '../images/page02/2.png';
import c from '../images/page02/3.png';
import d from '../images/page02/4.png';
import a1 from '../images/page02/a1.png';
import b1 from '../images/page02/a2.png';
import c1 from '../images/page02/a3.png';
import d1 from '../images/page02/a4.png';
import legend1 from '../images/page02/legend1.png';
import legend2 from '../images/page02/legend2.png';
import schema1 from '../images/page02/schema1.png';

import FullMethod from '../components/FullMethod';
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
          title: 'COLORS OF AR FILTERS',
          main: '02/ COLORS OF AR FILTERS',
          text: 'From natural tones that normalize facial changes to surreal colors which emphasize distortion. Analizing the role of colors in filters',
          src: cover,
          band: 'Two main color palette appears between AR Filters affecting the user\'s face in different ways',
          method: '/method02',
        }}
      />

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4 py-5">
          <div className="col-8">
            <p className="display-6">
              Color and light play a major role in the final aesthetic of a filter.
              From natural  skin tones, to fluorescent-colored cheeks, two main trends also appear in the use of colors. While the perfectionist beauty filters favors an overall natural effect, dystopic masks transforms nude skin tones in surreal shades, turning color into a tool of distortion able to influence the perception of faces.
            </p>
            <p className="display-6">
              In the analysis, the main color of each post was identified by highlighting instances where it contributed to create a surrealistic effect, applying modifications not achievable in real life.
            </p>
          </div>
        </div>
      </div>
      <Viz02 />
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-6 ">
            <p className="everett py-5 display-8 text-uppercase">The #nofilter effect of perfectionist beauty filters</p>
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
          <div className="col-6 border-start border-dark border-1 py-5 px-5 d-flex align-items-center">
            <div>
              <p className="display-9">
                In perfectionist beauty filters there is a dominance of colors characterized by natural tones: warm and smooth.

              </p>
              <p className="display-9">The presence of different and brighter colors mainly concerns the background of the post not affecting user’s face.</p>
              <p className="display-9">
                {' '}
                The color probably wants to be neutral to ensure a general natural effect, making less noticeable the presence of other alterations in the face.
              </p>
              <p className="text-end">
                <img src={legend1} className="img-fluid" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-7 ">
            <p className="everett py-5 display-8 text-uppercase">The surreal shades of dystopic aesthetic filters</p>
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

          <div className="col-6 border-start border-dark border-1 py-5 px-5 d-flex align-items-center">
            <div>
              <p className="display-9">
                Dystopic filters have a much wider range of colors.
                The fluorescent and bright shades usually concern the face, showing purple skins and metallic faces, contributing to emphasize a surreal effect, not achievable in real life.
              </p>

              <p className="display-9">
                The color deliberately wants to be strong and surreal not to hide the presence of changes and to become a tool for expression and creativity by challenging natural limitations
              </p>
              <p className="">
                <img src={legend2} className="img-fluid" alt="" />
              </p>
            </div>
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
