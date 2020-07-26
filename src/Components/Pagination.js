import React, { useEffect } from "react";

const Pagination = ({ totalPages }) => {
  //   console.log(totalPages);
  const pages = (n) => {
    let pages = [];
    for (let i = 1; i <= n; i++) {
      pages.push(i);
    }
    return pages;
  };
  //   console.log(pages(totalPages));
  // useEffect(() => {
  //     const pageNo = pages(totalPages)
  //     pageNo
  // }
  //     ,[]
  // )
  const pageNos = pages(totalPages);

  return (
    <div style={{ color: "white" }}>
      <ul>
        {pageNos.map((value, index) => {
          return <li key="index">{value}</li>;
        })}
      </ul>
    </div>
  );
};
export default Pagination;
