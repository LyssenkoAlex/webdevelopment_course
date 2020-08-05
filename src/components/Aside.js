import React from "react";
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <aside>
      <h1>Scheduler</h1>
      <div className="scheduler_container">
        <div className="title">
          <span>1h, 2 times a week</span>
        </div>
        <div>
          <span>Monday:</span>
        </div>
        <div>
          <span>7:45 AM / 6:15 PM</span>
        </div>
        <div>
          <span>Wednesday:</span>
        </div>
        <div>
          <span>7:45 AM / 6:15 PM</span>
        </div>
        <div className="title">

          <span>3000kzt for 1h</span>
        </div>
      </div>


      <NavLink to="/tasks"> <h1>homework is must</h1></NavLink>
    </aside>
  );
};

export default Aside;
