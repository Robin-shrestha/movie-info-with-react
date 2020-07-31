import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ searchQuery, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(totalPages);
  };
  const pages = (n) => {
    let pages = [];
    for (let i = 1; i <= n; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNos = pages(totalPages);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul className="pagination">
        <li
          className="page-item"
          key="fp"
          className="btn btn-outline-fmv bg-fmv p-1 mr-1"
        >
          <Link
            className="page-link bg-fmv text-white border-0"
            to={`/search_results/${searchQuery.split(" ").join("_")}/1`}
            onClick={firstPage}
          >
            {"<<"}
          </Link>
        </li>

        {currentPage !== 1 ? (
          <li
            className="page-item"
            key="pp"
            className="btn btn-outline-fmv bg-fmv p-1 mr-1"
          >
            <Link
              className="page-link bg-fmv text-white border-0"
              onClick={prevPage}
              to={`/search_results/${searchQuery.split(" ").join("_")}/${
                currentPage - 1
              }`}
            >
              {"<"}
            </Link>
          </li>
        ) : null}

        {pageNos.map((value, index) => {
          if (value === currentPage) {
            return (
              <li
                className="page-item"
                key={index}
                className="btn btn-outline-primary bg-primary p-1 mr-1"
              >
                <Link
                  className="page-link bg-primary text-white border-0"
                  to={`/search_results/${searchQuery
                    .split(" ")
                    .join("_")}/${value}`}
                  onClick={() => {
                    setCurrentPage(value);
                  }}
                >
                  {value}
                </Link>
              </li>
            );
          } else if (value < currentPage && value > currentPage - 3) {
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
                  onClick={() => {
                    setCurrentPage(value);
                  }}
                >
                  {value}
                </Link>
              </li>
            );
          } else if (value > currentPage && value < currentPage + 3) {
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
                  onClick={() => {
                    setCurrentPage(value);
                  }}
                >
                  {value}
                </Link>
              </li>
            );
          }
        })}

        {currentPage !== totalPages ? (
          <li
            className="page-item"
            key="np"
            className="btn btn-outline-fmv bg-fmv p-1 mr-1"
          >
            <Link
              className="page-link bg-fmv text-white border-0"
              onClick={nextPage}
              to={`/search_results/${searchQuery.split(" ").join("_")}/${
                currentPage + 1
              }`}
            >
              {">"}
            </Link>
          </li>
        ) : null}

        <li
          className="page-item"
          key="lp"
          className="btn btn-outline-fmv bg-fmv p-1 mr-1"
        >
          <Link
            className="page-link bg-fmv text-white border-0"
            to={`/search_results/${searchQuery
              .split(" ")
              .join("_")}/${totalPages}`}
            onClick={lastPage}
          >
            {">>"}
          </Link>
        </li>
      </ul>
    </div>
  );

  // return (
  //   <div>
  //     <ul className="pagination">
  //       {pageNos.map((value, index) => {
  //         return (
  //           <li
  //             className="page-item"
  //             key={index}
  //             className="btn btn-outline-fmv bg-fmv p-1 mr-1"
  //           >
  //             <Link
  //               className="page-link bg-fmv text-white border-0"
  //               to={`/search_results/${searchQuery
  //                 .split(" ")
  //                 .join("_")}/${value}`}
  //             >
  //               {value}
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
};
export default Pagination;
