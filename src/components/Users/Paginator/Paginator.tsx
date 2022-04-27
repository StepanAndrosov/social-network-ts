import style from "./Paginator.module.scss"
import React, {useState} from "react"
import cn from "classnames"

type PropsType = {
    totalItemsCount: number
    pageSize: number
    portionSize?: number
    currentPage: number
    onSetCurrentPage: (pageNumber: number) => void
}

export const Paginator: React.FC<PropsType> = ({
                                                   totalItemsCount,
                                                   pageSize,
                                                   portionSize = 20,
                                                   currentPage,
                                                   onSetCurrentPage
                                               }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.paginator}>
            {
                <button disabled={portionNumber === 1} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
            }

            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p =>
                        <span
                            key={p}
                            className={cn({[style.selectedPage]: currentPage === p})}
                            onClick={() => {
                                onSetCurrentPage(p)
                            }}
                        >
                            {p}
                        </span>
                    )
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
            }
        </div>
    )
}
