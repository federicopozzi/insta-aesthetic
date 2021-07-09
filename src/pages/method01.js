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
        quest: 'The main purpose of the search was to map the main instagram faces present among the filters. Are AR filters categorizable into recurring types of modification? ',
        firstCol: 'The images analyzed were taken from instagram profiles whose main purpose is to promote and show the most popular AR instagram filters. The data were the instagram posts of 4 main profiles: @Instmask @face.effect @beuty.filters @aestheticfilters.\n'
            + 'The criterion of choice of profiles is closely related to the number of followers: all of them have more than 120,000 followers.  ',
        secondCol: 'Posts were collected using the Google extension “Downloader for Instagram” and were downloaded in the same time frame: September 2020.The final number of downloaded posts was : 1,240',
      }}
      />
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3  px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-12">
            <p className="everett pt-3 display-6">CATEGORIZATION</p>
          </div>
          <div className="col-4  ">
            <p className="display-9">
              After collecting all the images the categorization was done manually identifying 6 main categories
              Freckles application / stickers application / general natural effect / glossy effect / cyborg mood /  others.
              Each post was classified into one of these categories
            </p>
          </div>

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row  px-2 border-start border-end border-dark border-1 mx-2">
          <StaticImage src="../images/page01/bubble.png" alt="" />

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row  px-2 border-start border-end border-dark border-1 mx-2 justify-content-center">
          <div className="col">
            <img src={protocol} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3  px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-12 ">
            <p className="everett pt-3 display-6">FINDINGS</p>
          </div>
          <div className="col-4 ">

            <p className="display-9">The categorization of the posts led to different results between the four profiles.The most popular categories of @beauty.filters and @aestheticfilters were the application of freckels and stickers, while @instmask and @face.effect had a majority of posts featuring glossy effect and cyborg mood. </p>
          </div>
          <div className="col-4 px-4">
            <p className="display-9">Moreover, the pursuit of the natural effect concerned much more only the first two profiles, and was almost absent in @instmask and @face.effec</p>
          </div>
        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-12 ">
            <p className="everett pt-3 display-6">COMPARISON</p>
          </div>
          <div className="col-4 ">

            <p className="display-9">The comparison of the number of posts for each category showed the presence of two main trends. The categories natural and freckles were replacing glossy and cyborg and the opposite. From this findings the identification of 2 main aesthetics occurred: one as exclusion of the other. </p>
          </div>

        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row px-2 pt-4 border-start border-end border-dark border-1 mx-2">
          <StaticImage src="../images/page01/diagram.png" alt="" />

        </div>
      </div>
      <FullMethod home="/page01" text="BACK" />
    </div>
  );
}
