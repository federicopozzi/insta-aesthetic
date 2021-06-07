import { useEffect, useState, useRef } from 'react';

import dist1 from '../../images/page01/viz01.png';
import dist2 from '../../images/page01/viz01.1.png';

export default function Viz01() {
  const [viz1, setViz1] = useState(dist2);
  const [hover, setHover] = useState(true);

  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        <div className={`col-6 border-end border-dark border-1 tasto1 py-2 px-5 ${hover ? 'active' : ''}`} onClick={() => setViz1(dist2, setHover(true))}>PERFECTIONIST BEAUTY</div>
        <div className={`col-6 tasto2 py-2 px-5  ${hover ? '' : 'active'}`} onClick={() => setViz1(dist1, setHover(false))}>DYSTOPIC AESTHETIC</div>
      </div>
      <div className="row">
        <img src={viz1} className="img-fluid px-0" alt="" />
      </div>
    </div>
  );
}
