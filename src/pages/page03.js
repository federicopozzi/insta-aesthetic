import '../scss/style.scss';
import Layout from '../components/Layout';
import cover from '../images/page01/cover.png';
import HeaderProtocol from '../components/HeaderProtocol';
import viz3 from '../images/page03/viz03.png';
import p31 from '../images/page03/p31.png';
import p32 from '../images/page03/p32.png';
import FullMethod from '../components/FullMethod';

export default function page03() {
  return (
    <div className="bg-light">
      <Layout />
      <HeaderProtocol
        section={{
          title: 'TWO COMPETING AESTHETIC',
          main: '03/ COLORS',
          text: 'blablablabla',
          src: cover,
          band: 'banda sotto',
          method: '/method03',
        }}
      />
      <div className="container-fluid border-bottom border-dark border-1 ">
        <div className="row px-4">
          <div className="col-8">
            <p>
              One of the main modification used in AR filters is the application of stickers: memojis, avatars, flowers and texts cover our faces showing  original versions of ourselves that we would never wear in real life.
              “In what other context would I get to sport Hello Kitty face tattoos without permanently ruining my employability?“
            </p>
            {' '}
            <p>
              450 posts that featured stickers has been analyzed and categorized generating a network with the purpose of providing an overview of the variety of stickers present among AR filters and to allow the identification of different  purposes of use.
            </p>
            <p>Dystopian Beauty Standards, But Make It Cute 2019 – Jillian Calilung</p>
          </div>
        </div>
        <div className="row">
          <img src={viz3} className="img-fluid px-0" alt="" />
        </div>
      </div>
      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row px-4">
          <div className="col-6 px-5 d-flex align-items-center">
            <div>
              <p className="everett pt-3 display-6 text-uppercase">
                Stickers as a
                beautification tool
              </p>
              <p>
                Stickers can be used as an element that contributes to the beautification process of user’s face.
                There is a strong prevalence of decorative elements such as diamonds, flowers and tattoos, especially in the beauty filters.
              </p>
              <p>
                Moreover many of these effects have alteration processes beyond the sticker: they remove all imperfections and slightly slim the face
              </p>
              <p>
                "Neglecting the Hello Kitty tattoos, the face staring back at me when I tried the filter wasn't mine. My eyes were enlarged, my nose was reduced and my lips were enlarged

              </p>
              <p>
                Dystopian Beauty Standards, But Make It Cute 2019 – Jillian Calilung
              </p>
            </div>
          </div>
          <div className="col-6 px-5 py-5 border-start border-1 border-dark text-center">
            <img src={p31} className="img-fluid px-0" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row px-4">
          <div className="col-6 px-5 py-5  text-center">
            <img src={p32} className="img-fluid px-0" alt="" />
          </div>
          <div className="col-6 px-5 d-flex align-items-center border-start border-1 border-dark">
            <div>
              <p className="everett pt-3 display-6 text-uppercase">
                Stickers as a
                marketing tool
              </p>
              <p>
                There is a strong recurrence of stickers representing logos of popular brands.
                In most cases, companies use them as an element of sponsorship: the involvement of users makes them an active part of the communication, creating an increasing level of engagement.
              </p>
              {' '}
              <p>
                Another interesting aspect is the frequent association of female faces with fashion brand logos. In particular, this connection often occurs in beauty filters, emphasizing the strong relationship between these filters and the world of appearance.

              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid border-bottom border-dark border-1">
        <div className="row px-4">
          <div className="col-6 px-5 d-flex align-items-center">
            <div>
              <p className="everett pt-3 display-6 text-uppercase">
                Stickers as an
                ironic tool for fun tool
              </p>
              <p>
                Finally, categories such as food, emoji and animals represent the purpose of stickers linked to a basic entertainment purpose.
              </p>
              <p>

                They are not perceived as a beutification tool, but as a playful one: pizza, donuts, emojis are printed on user’s faces making explicit the simple and ironic functionality.
                Beyond the type of stickers applied, in most cases, no further changes are made to the user's face, which remains natural as it appears through the camera.
              </p>

            </div>
          </div>
          <div className="col-6 px-5 py-5 border-start border-1 border-dark text-center">
            <img src={p31} className="img-fluid px-0" alt="" />
          </div>
        </div>
      </div>
      <FullMethod home="/method03" text="FULL METHOD AND ANALYSIS ➙" />
    </div>
  );
}
