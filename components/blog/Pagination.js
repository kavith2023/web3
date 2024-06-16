import Link from "next/link"

export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>
            <nav className="pagination__wrap mt-40">
                <ul className="list-wrap">
                    {getPaginationGroup.length <= 0 ? null : (
                        <li onClick={prev} className="next_link page-item">
                            {currentPage === 1 ? null : (
                                <a>
                                    <i className="fa fa-arrow-left" />
                                </a>
                            )}
                        </li>
                    )}
                    {getPaginationGroup.map((item, index) => {
                    return (
                        <li
                            onClick={() => handleActive(item)}
                            key={index}
                            className={
                                currentPage === item
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <a className="page-link">{item}</a>
                        </li>
                    )
                })}
                      {getPaginationGroup.length <= 0 ? null : (
                    <li onClick={next} className="next_link page-item">
                        {currentPage >= pages ? null : (
                            <a>
                                <i className="fa fa-arrow-right" />
                            </a>
                        )}
                    </li>
                )}
                </ul>
            </nav>
        </>
    )
}