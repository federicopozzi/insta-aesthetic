import Layout from '../components/Layout';
import '../scss/style.scss';
import HeaderProtocol from '../components/HeaderProtocol';
import cover from '../images/page05/cover.png';
import end from '../images/page05/end.png';
import Viz05 from '../components/viz/viz05';
import FullMethod from '../components/FullMethod';

export default function page05() {
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol section={{
        title: 'WHEN THE FILTER LEAVES THE PLATFORM',
        main: '05/ WHEN THE FILTER LEAVES THE PLATFORM',
        text: 'Dystopic filter are re-defining beauty in other contexts',
        src: cover,
        band: 'The innovative and extrem canons of dystopic filters are redefining beauty even outside Instagram',
        method: '/method02',
      }}
      />
      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row pb-5 px-5 pt-5">
          <div className="col-6 px-5">

            <p className="display-6 pt-4">
              Dystopic filters are redefining traditional notions of beauty by proposing an aesthetic that drastically break the concept of beautiful and natural, applying surreal and utopian modifications that transcend any physical and mental restrictions.

              These innovative, extreme, and provocative canons are beginning to exit the Instagram platform expanding and taking shape in other fields.

              The screen is replacing our real world by creating digital and virtual experiences that blur the borders between real and virtual. In this process this new extreme aesthetic is taking over and is a reminiscent of what dystopic filters are spreading over Instagram.
            </p>

          </div>
          <div className="col-6 px-5">
            <img src={end} className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary border-bottom border-dark">
        <div className="row ps-4 py-5">
          <div className="col-8">
            <p className="display-8 everettR mb-0">The next section wants to present cases where the Instagram filter went out of the platform, making the border between real and virtual world more blurred.</p>
          </div>
        </div>
        <div className="row" />
      </div>
      <Viz05 />
      <FullMethod home="/" text="BACK" />
    </div>
  );
}
