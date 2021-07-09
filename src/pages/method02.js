import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import HeaderMethods from '../components/HeaderMethod';
import protocol from '../images/page02/protocol.png';

import FullMethod from '../components/FullMethod';
import method2 from '../images/page02/method2.png';

export default function method02() {
  return (
    <div className="sfondoGrad">
      <Layout />
      <HeaderMethods section={{
        title: '02/ COLORS OF AR FILTERS',
        link: '/page02',
        quest: 'The main purpose of the research was to determine the key role of color in filters. Specifically, to identify which are the main trends in the use of colors between the two aesthetics and to map when it’s actually used as a tool of user’s face alteration ',
        firstCol: 'The analyzed images have been taken from a sample of the same dataset of the first research (analyzing the type of modifications  among filters). From a total of 1.240 images of @Instmask @face.effect @beauty.filters @aestheticfilters, 940 posts have been taken in analysis.\n'
            + 'Specifically, all images were divided into two main macrocategories, according to the results of the research one:  ',
        secondCol: 'the first macrocategory contains all perfectionist beauty posts (derived from @beauty.filters and @aesthetic.filters profiles, 470 images) while the second macrocategory contains all dystopyc beauty posts (derived from @instmask and @face.effect profiles, 470 images).',
      }}
      />
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-12 ">
            <p className="everett pt-3 display-6">ANALYSIS</p>
          </div>
          <div className="col-4 ">
            <p className="display-9">1.Image sorter</p>
            <p className="display-9">
              The first part of the analysis was done by loading the images in the Image sorter tool which clusters them by color similarity, creating a grid composition of images. The process was made separately between the two macrocategories realizing two different grid of images in order to be compared.
            </p>
          </div>
          <div className="col-4 ">
            <p className="display-9">1.Color summarizer</p>
            <p className="display-9">
              The second part of the analysis aimed to identify the main color code of each image. The analysis of each post was done using  the Color summarizer tool that produces descriptive color statistics.  The image was divided into 3 main color clusters. The one with the highest percentage of pixels of the same color was saved and integrated in the composition of images created before.
            </p>
          </div>
        </div>
        <div className="row py-5 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col">
            <StaticImage src="../images/page02/method1.png" alt="" style={{ transform: 'scale(0.7)' }} />
          </div>
        </div>
      </div>

      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-4 ">

            <p className="display-9">
              The final part of the analysis was the comparison between the two color grids to identify the main differences between the aesthetics. In addiction, all posts having as their main color code a special one
            </p>
          </div>
          <div className="col-4 ">

            <p className="display-9">
              different from natural skin, has been analyzed mapping when the special color was affecting the face or the background.

            </p>
          </div>
        </div>
        <div className="row py-5 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col">
            <img src={method2} className="img-fluid px-5" alt="" style={{ transform: 'scale(0.7)' }} />
          </div>
        </div>
      </div>
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row  px-2 border-start border-end border-dark border-1 mx-2 justify-content-center">
          <div className="col">
            <img src={protocol} className="img-fluid pt-2" alt="" />
          </div>
        </div>
      </div>

      <FullMethod home="/page01" text="BACK" />
    </div>
  );
}
