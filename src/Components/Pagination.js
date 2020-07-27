import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ searchQuery, totalPages }) => {
  const pages = (n) => {
    let pages = [];
    for (let i = 1; i <= n; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNos = pages(totalPages);

  return (
    <div>
      <ul className="pagination">
        {pageNos.map((value, index) => {
          return (
            <li
              className="page-item"
              key={index}
              className="btn btn-outline-fmv bg-fmv p-1 mr-1"
            >
              <Link
                className="page-link bg-fmv text-white border-0"
                to={`/search_results/${searchQuery
                  .split(" ")
                  .join("_")}/${value}`}
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Pagination;
