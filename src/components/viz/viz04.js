import { useEffect, useState, useRef } from 'react';
import a1 from '../../images/page04/viz04/a1.png';
import a2 from '../../images/page04/viz04/a1.png';
import a3 from '../../images/page04/viz04/a1.png';
import a4 from '../../images/page04/viz04/a1.png';
import a5 from '../../images/page04/viz04/a1.png';
import a6 from '../../images/page04/viz04/a1.png';
import a7 from '../../images/page04/viz04/a1.png';
import a8 from '../../images/page04/viz04/a1.png';
import aa1 from '../../images/page04/viz04/aa1.png';
import aa2 from '../../images/page04/viz04/ab1.png';

import ab1 from '../../images/page04/viz04/ab1.png';
import ac1 from '../../images/page04/viz04/ac1.png';

export default function Viz04() {
  const viz = [
    {
      a: a1,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 0,
    },
    {
      a: a2,
      aa: aa2,
      ab: ab1,
      ac: ac1,
      i: 1,
    },
    {
      a: a3,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a4,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a5,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a6,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a7,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
  ];

  const [vis, setVis] = useState(viz[0].aa);

  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        <div className="col-7">
          <div className="row">
            {
              viz.map(({ a }, i) => (
                <div className="col px-0">
                  <img src={a} className="img-fluid" alt="" onClick={() => setVis(viz[i].aa)} />
                </div>
              ))
            }

          </div>

        </div>
        <div className="col-5">
          <img src={vis} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
