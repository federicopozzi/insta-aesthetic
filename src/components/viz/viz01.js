import { useEffect, useState, useRef } from 'react';

import dist1 from '../../images/page01/viz01.png';
import dist2 from '../../images/page01/viz01.1.png';

export default function Viz01() {
  const [viz1, setViz1] = useState(dist2);
  const [hover, setHover] = useState(true);

  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        <div className={`col-6 tasto1 ${hover ? 'active' : ''}`} onClick={() => setViz1(dist2, setHover(true))}>viz1</div>
        <div className={`col-6 tasto2 ${hover ? '' : 'active'}`} onClick={() => setViz1(dist1, setHover(false))}>viz2</div>
      </div>
      <div className="row">
        <img src={viz1} className="img-fluid" alt="" />
      </div>
    </div>
  );
}
