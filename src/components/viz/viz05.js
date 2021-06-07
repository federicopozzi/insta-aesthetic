import { useState } from 'react';
import a1 from '../../images/page05/a1.png';
import b1 from '../../images/page05/b1.png';
import a2 from '../../images/page05/a2.png';
import b2 from '../../images/page05/b2.png';
import c1 from '../../images/page05/c1.png';
import c2 from '../../images/page05/c2.png';
import video from '../../images/page05/video1.mp4';

import Video from '../Video';
import cover from '../../images/page01/cover.png';

export default function Viz05() {
  const vis05 = [
    {
      descr1: 'DYSTOPIAN INSTAGAM FILTERS @INSTAMASK ACCOUNT',
      descr2: 'GCDS - OUT OF THIS WORLD',
      img1: a1,
      img2: a2,
      video1: video,
      video2: '',
      title: 'DYSTOPIC FILTERS IN FASHION SHOWS',
      text: 'Color and light play a major role in the final aesthetic of a filter.\n'
          + '              From natural skin tones, to fluorescent-colored cheeks, two main trends also appear in the use of colors. While the perfectionist beauty filters favors an',
      cit: 'citazione primo caso',
      quote: 'QUOTE PRIMO CASO ',

    },
    {
      descr1: 'DYSTOPIAN INSTAGAM FILTERS @INSTAMASK ACCOUNT',
      descr2: 'GCDS - OUT OF THIS WORLD',
      img1: b1,
      img2: b2,
      video1: '',
      video2: '',
      title: 'DYSTOPIC FILTERS IN FASHION SHOWS',
      text: 'Color and light play a major role in the final aesthetic of a filter.\n'
          + '              From natural skin tones, to fluorescent-colored cheeks, two main trends also appear in the use of colors. While the perfectionist beauty filters favors an',
      cit: 'citazione primo caso',
      quote: 'QUOTE PRIMO CASO ',
    },
    {
      descr1: 'DYSTOPIAN INSTAGAM FILTERS @INSTAMASK ACCOUNT',
      descr2: 'GCDS - OUT OF THIS WORLD',
      img1: c1,
      img2: c2,
      video1: '',
      video2: '',
      title: 'DYSTOPIC FILTERS IN FASHION SHOWS',
      text: 'Color and light play a major role in the final aesthetic of a filter.\n'
          + '              From natural skin tones, to fluorescent-colored cheeks, two main trends also appear in the use of colors. While the perfectionist beauty filters favors an',
      cit: 'citazione primo caso',
      quote: 'QUOTE PRIMO CASO ',
    },
    {
      descr1: 'DYSTOPIAN INSTAGAM FILTERS @INSTAMASK ACCOUNT',
      descr2: 'GCDS - OUT OF THIS WORLD',
      img1: b1,
      img2: b2,
      video1: 'video1',
      video2: 'video2',
      title: 'DYSTOPIC FILTERS IN FASHION SHOWS',
      text: 'Color and light play a major role in the final aesthetic of a filter.\n'
          + '              From natural skin tones, to fluorescent-colored cheeks, two main trends also appear in the use of colors. While the perfectionist beauty filters favors an',
      cit: 'citazione primo caso',
      quote: 'QUOTE PRIMO CASO ',
    },
  ];

  const [vis, setVis] = useState(vis05[0]);
  const [under, setUnder] = useState(true);
  const [under1, setUnder1] = useState(false);
  const [under2, setUnder2] = useState(false);
  const [under3, setUnder3] = useState(false);

  return (
    <div className="container-fluid bg-secondary border-bottom border-dark border-1">
      <div className="row border-bottom border-dark border-1">
        <div className="col-4 bg-success py-4 px-5">
          <p className={`mb-0 pointer under  ${under ? 'active' : ''}`} onClick={() => setVis(vis05[0], setUnder(true), setUnder1(false), setUnder2(false), setUnder3(false))}>GCDS: OUT OF THIS WORLD</p>
          <p className={`mb-0 pointer under  ${under1 ? 'active' : ''}`} onClick={() => setVis(vis05[1], setUnder(false), setUnder1(true), setUnder2(false), setUnder3(false))}>INES ALPHA'S X CHARLI XCX</p>
          <p className={`mb-0 pointer under  ${under2 ? 'active' : ''}`} onClick={() => setVis(vis05[2], setUnder2(true), setUnder(false), setUnder1(false), setUnder3(false))}>NYLON MAGAZINE GERMANY</p>
          <p className={`mb-0 pointer under  ${under3 ? 'active' : ''}`} onClick={() => setVis(vis05[2], setUnder2(false), setUnder(false), setUnder1(false), setUnder3(true))}>BEAUTY 3000 AS MAKE UP TREND</p>
        </div>
        <div className="col-4 py-4 border-start border-dark border-1">
          <p className="everett mb-0">AR INSTAGRAM FILTER</p>
          <p className="text-success fw-bold display-7">{vis.descr1}</p>
        </div>
        <div className="col-4 border-start border-dark border-1 py-4">
          <p className="everett mb-0">CASE STUDY</p>
          <p className="text-success fw-bold display-7">{vis.descr2}</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-4 py-4 px-5">
          <p className="everett display-6">{vis.title}</p>
          <p className=" display-6">{vis.text}</p>
          <p className="mb-0 display-6 fst-italic">{vis.cit}</p>
          <p className="mb-0 text-success">{vis.quote}</p>
        </div>
        <div className="col-4 border-start border-dark border-1 text-center py-5">
          <img src={vis.img1} className="img-fluid" alt="" />

        </div>
        <div className="col-4 border-start border-dark border-1 text-center py-5">
          <img src={vis.img2} className="img-fluid" alt="" />

        </div>

      </div>
    </div>
  );
}
