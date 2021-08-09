import React from 'react'

function Pagination({charPerPage, totalCharacters, paginate, currentPage}) {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalCharacters/ charPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    
                    <li key={number} className={`page-item ${currentPage === number? 'active':''}`}>
                        <a onClick={()=>paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
