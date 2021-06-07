import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import HeaderMethods from '../components/HeaderMethod';
import protocol from '../images/page04/protocol.png';

import FullMethod from '../components/FullMethod';
import method2 from '../images/page03/methodgephi.png';

export default function method04() {
  return (
    <div className="sfondoGrad">
      <Layout />
      <HeaderMethods section={{
        title: '04/ WHY DO I FEEL PRETTIER?',
        link: '/page04',
        quest: 'In the discussions on the effective harmfulness of the types of alterations used in beautification filters, the analysis wanted to investigate the issue by analyzing the type of alterations present among  Perfectionist beauty filters.\n  Since this  aesthetics aimed at improving the appearance, the research wanted to verify if actually the types of changes can be associated with plastic surgery practices becoming concretely harmful.\n',
        firstCol: 'The data collection in this case was done differently than in previous research protocols: if in the previous cases the data analyzed were Instagram posts, in this instance the data analyzed was the filter itself, applied to a unique face.\n'
            + 'Instagram profiles that sposorise AR  filters were used as starting points to find popular creators and effects. Through the profiles of Perfectionis Aesthetics (@aestheticfilters @beautyfilters), 27 creators were collected: ',

        secondCol: '@alexandra.kisa @aaaneka @daryabiller @erikavelez @etolitvinova @exotic.cancer @filtersbeauty @filterscreative @hellyluv @itskovalevskaya @ksubones @malinkamau @patchisphotos @sasha_soul_Art @sasha. ray @sophie @stasmileev @thakatetrump @top.beauty_ @filtersbeauty @vse maski @vvsnaleto @whoisfrancisco @why.not.say @xeniabelskaya @yulya.kors @zemtsova_lubov, for a total of 320 filters collected.\n',
      }}
      />
      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row py-3 px-2 border-start border-end border-dark border-1 mx-2">
          <div className="col-12 ">
            <p className="everett pt-3 display-6">IMAGES ANALYSIS AND PROCESS</p>
          </div>
          <div className="col-4 ">

            <p className="display-9">
              The final images to be analyzed  has been created through a process of application of the filter on a non-existing face of thispersondoesnotexist.com.
              The face has been printed and through the  camera of an Iphone 8 (positioned at the same distance and position) 320 photos of the face has been taken with different effects applied.
              Every single shot was saved and renamed with the actual title of the effect.

            </p>
          </div>
          <div className="col-4 ">
            <p className="display-9">
              At least, the images has been cropped to the same size through the Photoshop batch.
              To create a grid of images placed in color gradient from lightest to darkest, they were processed using image J to calculate the average brightness of each photo. The miscalculations were fixed manually by repositioning the image in the proper position according to the color scale.
            </p>
          </div>
        </div>

      </div>

      <div className="container-fluid  border-bottom border-dark  ">
        <div className="row  px-2 border-start border-end border-dark border-1 mx-2">

          <img src={protocol} className="img-fluid" alt="" style={{ transform: 'scale(0.8)' }} />

        </div>
      </div>

      <FullMethod home="/page01" text="BACK" />
    </div>
  );
}
