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

export default function page01() {
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol
        section={{
          title: 'titolo1',
          main: '01/ titolo',
          text: 'blablablabla',
          src: cover,
          band: 'banda sotto',
        }}
      />
      <div className="container-fluid ">
        <div className="row ps-4">
          <p>PERFECTIONIST BEAUTY</p>
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
          <p>DISTOPIAN AESTHETIC</p>
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

    </div>
  );
}
