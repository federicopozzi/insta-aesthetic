import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import HeaderMethods from '../components/HeaderMethod';
import protocol from '../images/page01/protocol.png';
import cover from '../images/page01/cover.png';

export default function method01() {
  return (
    <div className="sfondoGrad">
      <Layout />
      <HeaderMethods section={{
        title: 'titolo1',
        quest: 'question',
        firstCol: 'text prima colonna',
        secondCol: 'text seconda colonna',
      }}
      />
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row">
          <div className="col-12 px-4">
            <p>CATEGORIZATION</p>
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
    </div>
  );
}
