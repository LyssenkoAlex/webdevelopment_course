import React from "react";
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <aside>
      <h1>Scheduler</h1>
      <div className="scheduler_container">
        <div className="title">
          <span>Some day</span>
        </div>

        <div className="title">
          <span>Send mail</span>
        </div>
      </div>


      <NavLink to="/tasks"> <h1>homework is must</h1></NavLink>
    </aside>
  );
};

export default Aside;
