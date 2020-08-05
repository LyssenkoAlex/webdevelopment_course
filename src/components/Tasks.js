import React from "react";

const Tasks = () => {
  return (
    <main>
      <h1>Week 1</h1>
      <h2>Task 1</h2>
      <ul className="task_list">
        <li className="points_container">
          <span>Create GIT account</span>
          <span className="points">5 points</span>
        </li>
        <li className="points_container">
          <span>Make html_dev repository</span>
          <span className="points">5 points</span>
        </li>
        <li className="points_container">
          <span>Create develop branch</span>
          <span className="points">5 points</span>
        </li>
        <li className="points_container">
          <span>Make your CV in HTML format, truth is not required</span>
          <span className="points">30 points</span>
        </li>
        <li className="points_container">
          <span>Use semantic markup</span>
          <span className="points">15 points</span>
        </li>
        <li className="points_container">
          <span>Publish index.html on gh-pages</span>
          <span className="points">10 points</span>
        </li>
        <li className="points_container">
          <span>Use CSS styles</span>
          <span className="points">15 points</span>
        </li>
        <li className="points_container">
          <span className='bold'>Total</span>
          <span className="points">85 points</span>
        </li>
      </ul>
    </main>
  );
};

export default Tasks;
