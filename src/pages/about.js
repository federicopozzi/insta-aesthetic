import Accordion from '../components/Accordion';
import HeaderHome from '../components/HeaderHome';
import end from '../images/about/ABOUT.png';

export default function about() {
  return (
    <div>
      <HeaderHome />
      <div className="container-fluid bg-light border-bottom border-dark " style={{ height: '70vh' }}>
        <div className="row pt-3 px-4 pb-5">
          <div className="col-10">
            <h2 className="display-4 everett pt-5">ABOUT THE PROJECT</h2>
            <p className="display-8">
              Augmented reality Instagram filters are a still recent and developing phenomenon that allows any user to access an altered version of themselves. Their usage is associated with a purely entertaining purpose while they can involve many new issues, complexities and implications.
              The project aimed to deepen the knowledge of this new tool by reporting five visual analysis that explore the filters from different perspectives.

            </p>
          </div>
        </div>
      </div>
      <Accordion question="WEBSITE NAVIGATION">
        <div className="container-fluid bg-light border-bottom border-dark sticky-top">
          <div className="row py-5 px-4">
            <div className="col-10">
              <p className="display-8">
                The five analysis have been structured in the same way: each one features a page of presentation of the research and its results and a specific page of full method and analysis where the processes of data collection and visualization are explained in a detailed and technical way.
                In the menu, a grid differentiates the five sections representing the individual research questions.
                The site is designed to be navigated freely: the different analyses are on the same level and don’t necessarily follow a sequential order but can be consulted separately from each others since they have been designed as separate pages.
              </p>
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion question="ANALYSIS PURPOSE">
        <div className="container-fluid bg-light border-bottom border-dark sticky-top">
          <div className="row py-5 px-4">
            <div className="col-10">
              <p className="display-8">
                The final aim is to allow any user to reach an in-depth knowledge of AR Instagram filters and a more conscious use of it.
                Moreover, the project was also created with the desire to provide new tools and methodologies useful for the analysis and data collection of AR filters.  Since they are a new phenomenon, there are still no defined methodologies, consequently through the pages of method and analysis the user can investigate all the processes applied to discover new ways of exploring and studying Instagram AR filters.
              </p>
            </div>
            <div className="col-10 pt-4">
              <img src={end} className="img-fluid pb-5" alt="" />
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion question="CREDITS">
        <div className="container-fluid bg-light border-bottom border-dark sticky-top">
          <div className="row py-5 px-4">
            <div className="col-10">
              <p className="display-8">
                The AR Instagram filters analysis was realised as the final output of a master degree thesis in communication design at Politecnico di Milano.
              </p>
              <p className="display-8">
                Creator of the project: Teresa Cremonesi
                Thesis supervisor: Gabriele Colombo
                Webiste developement: Federico Pozzi and Andrea Elena Febres Medina
              </p>
            </div>

          </div>
        </div>
      </Accordion>

      <Accordion question="DOWNLOAD FULL THESIS" />
    </div>
  );
}
