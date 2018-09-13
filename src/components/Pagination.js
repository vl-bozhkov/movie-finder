import React from 'react';

const Pagination = props => {
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination mt-2  ">
        <li className="page-item">
          <a onClick={props.pageDOWN} className="page-link text-dark">
            Previous
          </a>
        </li>

        <li className="page-item">
          <a onClick={props.pageUP} className="page-link text-dark">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
