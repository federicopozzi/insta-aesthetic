import { useEffect, useState, useRef } from 'react';

import a1 from '../../images/page04/viz04/a1.png';
import a2 from '../../images/page04/viz04/a1.png';
import a3 from '../../images/page04/viz04/a1.png';
import a4 from '../../images/page04/viz04/a1.png';
import a5 from '../../images/page04/viz04/a1.png';
import a6 from '../../images/page04/viz04/a1.png';
import a7 from '../../images/page04/viz04/a1.png';
import a8 from '../../images/page04/viz04/a1.png';
import a9 from '../../images/page04/viz04/a1.png';
import a10 from '../../images/page04/viz04/a1.png';
import a11 from '../../images/page04/viz04/a1.png';
import a12 from '../../images/page04/viz04/a1.png';
import a13 from '../../images/page04/viz04/a1.png';
import a14 from '../../images/page04/viz04/a1.png';
import a15 from '../../images/page04/viz04/a1.png';
import a16 from '../../images/page04/viz04/a1.png';
import a17 from '../../images/page04/viz04/a1.png';
import a18 from '../../images/page04/viz04/a1.png';
import a19 from '../../images/page04/viz04/a1.png';
import a20 from '../../images/page04/viz04/a1.png';
import aa1 from '../../images/page04/viz04/aa1.png';
import aa2 from '../../images/page04/viz04/ab1.png';

import ab1 from '../../images/page04/viz04/ab1.png';
import ac1 from '../../images/page04/viz04/ac1.png';

export default function Viz04() {
  const vizA = [
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
    {
      a: a8,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a9,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a10,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a11,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a12,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a13,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a14,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a15,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a16,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a17,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a18,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a19,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a20,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 20,
    },
    {
      a: a20,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a20,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a20,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a20,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },
    {
      a: a20,
      aa: aa1,
      ab: ab1,
      ac: ac1,
      i: 2,
    },

  ];

  const firstLine = vizA.slice(0, 19);
  const secondLine = vizA.slice(20, 24);

  const [vis, setVis] = useState(vizA[0]);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-7">
          <div className="row">

            {
              firstLine.map(({ a }, index) => (
                <div className="col px-0" key={index}>
                  <img src={a} className="img-fluid" alt="" onClick={() => setVis(vizA[index])} />
                </div>
              ))
            }
          </div>

          <div className="row">
            {
              secondLine.map(({ a }, index) => (
                <div className="col px-0" key={index}>
                  <img src={a} className="img-fluid" alt="" onClick={() => setVis(vizA[index])} />
                </div>
              ))
            }
          </div>

        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-11">
              <img src={vis.a} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-2">

              <img src={vis.aa} className="img-fluid" alt="" />
            </div>
            <div className="col-2">

              <img src={vis.ab} className="img-fluid" alt="" />
            </div>
            <div className="col-2">

              <img src={vis.ac} className="img-fluid" alt="" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
