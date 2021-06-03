import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import HeaderMethods from '../components/HeaderMethod';
import protocol from '../images/page01/protocol.png';
import cover from '../images/page01/cover.png';
import FullMethod from '../components/FullMethod';

export default function method01() {
  return (
    <div className="sfondoGrad">
      <Layout />
      <HeaderMethods section={{
        title: '01/ TWO COMPETING AESTHETIC',
        link: '/page01',
        quest: 'question',
        firstCol: 'text prima colonna',
        secondCol: 'text seconda colonna',
      }}
      />
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3">
          <div className="col-12 px-4">
            <p className="everett pt-3 display-6">CATEGORIZATION</p>
          </div>
          <div className="col-4 px-4 ">
            <p>
              After collecting all the images the categorization was done manually identifying 6 main categories
              Freckles application / stickers application / general natural effect / glossy effect / cyborg mood /  others.
              Each post was classified into one of these categories
            </p>
          </div>

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row">
          <StaticImage src="../images/page01/bubble.png" alt="" />

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row">

          <img src={protocol} className="img-fluid" alt="" style={{ transform: 'scale(0.8)' }} />

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3">
          <div className="col-12 px-4">
            <p className="everett pt-3 display-6">FINDINGS</p>
          </div>
          <div className="col-4 px-4">

            <p>The categorization of the posts led to different results between the four profiles.The most popular categories of @beauty.filters and @aestheticfilters were the application of freckels and stickers, while @instmask and @face.effect had a majority of posts featuring glossy effect and cyborg mood. </p>
          </div>
          <div className="col-4 px-4">
            <p>Moreover, the pursuit of the natural effect concerned much more only the first two profiles, and was almost absent in @instmask and @face.effec</p>
          </div>
        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3">
          <div className="col-12 px-4">
            <p className="everett pt-3 display-6">COMPARISON</p>
          </div>
          <div className="col-4 px-4">

            <p>The comparison of the number of posts for each category showed the presence of two main trends. The categories natural and freckles were replacing glossy and cyborg and the opposite. From this findings the identification of 2 main aesthetics occurred: one as exclusion of the other. </p>
          </div>

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark px-5 ">
        <div className="row">
          <StaticImage src="../images/page01/diagram.png" alt="" />

        </div>
      </div>
      <FullMethod home="/page01" text="BACK" />
    </div>
  );
}
