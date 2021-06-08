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
      text: 'The Italian brand GCDS presented it’s Spring/Summer 21  collection with a digital fashion show called “Out of this World”. An utopian scenario was created where 3D models walked the runway in a parallel universe. The experience was not totally separate from the real world since the virtual alter egos of real people were sitting in the audience. The aesthetics presented by the avatars is characterized by the intention to break any physical limits of traditional human models. The avatars recall the features of some dystopic instagram filters presenting some no-gender models, with a special glossy skin and surreal color tones, similar to aliens distant from any notions of normality.\n',
      cit: '“I can literally create anything I have in my mind. There’s no restrictions, the possibilities are endless. I want to allow people to dream up characters and to show that make-up can create these ideas. Even if we brought them to life digitally, I truly hope to see actual humans recreate them.” ',
      quote: 'Erin Parsons 2020 in “GO BTS OF THE VIRTUAL, OTHERWORLDLY BEAUTY AT GCDS’S DIGITAL FASHION SHOW\n'
          + 'BEAUTY FEATURE”',

    },
    {
      descr1: 'BEAUTY3000 @JOHWSKA CREATOR',
      descr2: 'CHARLI XCXX COVER ALBUM',
      img1: b1,
      img2: b2,
      video1: 'video1',
      video2: 'video2',
      title: 'DYSTOPIC FILTERS IN MUSIC INDUSTRY',
      text: 'Ines Alpha is a digital designer who creates and experiments with 3D makeup. Starting with AR filters, she came to design a cover for artist Charli XCX\'s music album using augmented reality. The interesting aspect of her creation, concerns the strong connection between the effect applied to the singer and the beauty filter beauty3000 by @johwska: the glossy effect characteristic of this dystopian effect is taken and applied on the photographed figures, showing also the same colors.\n'
          + '\n'
          + 'The use of 3D as a new approach to make-up is just a consequence of the spread and normalization of the use of augmented reality. In the design process, creativity is stressed to the max by immersing the user in parallel universes and surreal materials.',

      cit: '"By combining 3D art and makeup, which are two of my favorite things in the world, I accidentally created makeup from the future" ',
      quote: 'Alpha 2020 in “How Face Filters Are Redefining Our Relationships to Our Digital Selves”',
    },
    {
      descr1: 'TURFU @INESALPHA CREATOR',
      descr2: 'NYLON MAGAZINE GERMANY COVER',
      img1: c1,
      img2: c2,
      video1: '',
      video2: '',
      title: 'DYSTOPIC FILTERS ON MAGAZINES',
      text: 'Nylon magazine Germany has created a series of covers following a cyborg and futuristic mood. The artworks realized avatars of digital prodigies who are redefining the future of being a superstar. \n'
          + '\n'
          + 'Billie Eilish was presented as one of three "digital prodigies". The cover art, designed by Marcel C Wilkens, depicted her as a "supernatural fembot of the future".\n'
          + '\n'
          + 'Even if the singer compalined about the final results of the cover, the creators states that:',

      cit: '“It was never our intention to create a look that is confusing or insulting to Billie Eilish. It was only ever our intention to honor Billie’s impact and her work by creating this avatar which is part of a cover series highlighting the power of digital prodigy artists. This avatar is a piece of 3D artwork created in dedication to her achievements and the positive effect she has had on millions around the globe — including us.”',
      quote: 'Nylon Germany in “Billie Eilish calls out a magazine cover that made her bald and shirtless”',
    },
    {
      descr1: 'BEAUTY3000 @JOHWSKA CREATOR',
      descr2: 'MAKE UP TUTORIAL',
      img1: b1,
      img2: b2,
      video1: 'video1',
      video2: 'video2',
      title: 'DYSTOPIC FILTERS ON MAKE UP TRENDS',
      text: 'Many make up artists are taking inspiration from some popular AR filters for their creations.\n'
          + 'Beauty 3000 by @johwska has become one of the most popular filters leading users to look for ways to wear it in real life as well.  \n'
          + 'The filter has further spread the Glow skin trend, which is characterized by a particularly shiny effect, with articles and tutorials online about "How to get skin that glows like *that* Instagram filter." This new trend can be interpreted as the first attempt to get AR filters off the platform and bring the innovation of dystopian aesthetics into real life.\n',

      cit: '"I think AR makeup will continue to improve technically and become more realistic, and even accessories will start to look more realistic. Maybe not too far in the future, we won\'t be able to discern between augmented reality and actual reality as the lines between real and fake start to blur."',
      quote: ' Ines Alpha 2018 in “This artist uses cgi software to create make-up from the future”',
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
          <p className="everett display-7">{vis.title}</p>
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
