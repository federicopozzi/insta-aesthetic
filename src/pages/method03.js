import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import HeaderMethods from '../components/HeaderMethod';
import protocol from '../images/page03/protocol.png';

import FullMethod from '../components/FullMethod';
import method2 from '../images/page03/methodgephi.png';

export default function method02() {
  return (
    <div className="sfondoGrad">
      <Layout />
      <HeaderMethods section={{
        title: '03/ PUTTING EXTRA EMPHASIS ON FACES',
        link: '/page03',
        quest: 'The aim of the network is to give a general overview of the variety of stickers present among AR filters and to define main purposes of their usage. Are there prevailing types of stickers? And can they be considered only as an entertainment tool? \n',
        firstCol: 'The starting dataset was the same as research one related to the types of instagram faces present among the filters. The dataset includes all the posts of four instagram profiles with more than 120.000 followers, sponsoring filters. In the previous analysis the posts were classified under different types of modification; ',

        secondCol: 'one of these consisted in the application of stickers. Consequently, all posts grouped under this macrocategory were considered for the study. The total number of posts characterized by the presence of stickers is: 466 images.\n',
      }}
      />
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-12 ">
            <p className="everett pt-3 display-6">CATEGORIZATION</p>
          </div>
          <div className="col-4 ">

            <p className="display-9">
              All posts were visualized to identify the presence of recurring patterns among the stickers by determining 12 different categories of frequent symbols. The definition of the categories and the consequent classification has been done manually.
            </p>
          </div>
          <div className="col-4 ">
            <p className="display-9">
              In the realization of the excel file for the import on Gephi, 3 columns have been set: title of the filter, related category and type of aesthetics from which it derives.
              In the final part of the analysis, a connection network was created through Gephi. The association of multiple categories to each post allowed to visualize the connections between the various groups
            </p>
          </div>
        </div>
        <div className="row py-5 px-2 border-start border-end border-dark border-1 mx-2 justify-content-center">

          <img src={method2} className="img-fluid px-5" alt="" style={{ width: '70%' }} />
        </div>
      </div>

      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row   border-start border-end border-dark border-1 mx-2 justify-content-center">

          <img src={protocol} className="img-fluid" alt="" style={{ width: '80%' }} />

        </div>
      </div>

      <FullMethod home="/page01" text="BACK" />
    </div>
  );
}
