import style from "./Paginator.module.css"
import React from "react";

type PropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onSetCurrentPage: (page: number) => void
}

export const Paginator: React.FC<PropsType> = (props) => {
    const pagesCount = (props.totalUsersCount / props.pageSize) <= 20 ? Math.ceil(props.totalUsersCount / props.pageSize) : 21
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.paginator}>
            {
                pages.map(p =>
                    <span
                        key={p}
                        className={p === props.currentPage
                            ? `${style.selectedPage} ${style.pagesSpan}`
                            : style.pagesSpan}
                        onClick={() => props.onSetCurrentPage(p)}
                    >
                            {p}
                    </span>)
            }
        </div>
    )
}
