import { useState } from 'react';
import viz21 from '../../images/page02/viz22.png';
import viz22 from '../../images/page02/viz21.png';
import viz23 from '../../images/page02/viz23.png';

export default function Viz02() {
  const [viz2, setViz1] = useState(viz21);
  // const [hover, setHover] = useState(true);

  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        <div className="col-6 border-end border-1 border-dark py-2 px-5">PERFECTIONIST BEAUTY</div>
        <div className="col-6 border-end border-1 border-dark py-2 px-5">DYSTOPIC AESTHETIC</div>
        {/* <div className={`col-6 tasto1 ${hover ? 'active' : ''}`} onClick={() => setViz1(dist2, setHover(true))}>viz1</div> */}
        {/* <div className={`col-6 tasto2 ${hover ? '' : 'active'}`} onClick={() => setViz1(dist1, setHover(false))}>viz2</div> */}
      </div>
      <div className="row ">
        <div className="col px-0">
          <img src={viz2} className="img-fluid px-0" alt="" />
        </div>
      </div>
      <div className="row px-1">
        <div className="col-2 pointer  py-2 text-center" onClick={() => setViz1(viz21)}><span className=" text-decoration-underline text-uppercase">ORIGINAL POST</span></div>
        <div className="col-2 pointer py-2 text-center" onClick={() => setViz1(viz22)}><span className=" text-decoration-underline text-uppercase">ANALYZED POST</span></div>
        <div className="col-2 pointer py-2 text-center" onClick={() => setViz1(viz23)}><span className=" text-decoration-underline text-uppercase">COLOR CODE</span></div>

      </div>
    </div>
  );
}
