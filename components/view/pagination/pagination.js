import { useTheme } from '@chakra-ui/react'
import { usePagination, paginationSplitSymbol } from '@Hooks'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const splitSymbol = paginationSplitSymbol

const Pagination = (props) => {
    const theme = useTheme()
    const {
        onPageChange,
        onTotalCountChange,
        totalCount,
        siblingCount = 1,
        currentPage = 1,
        pageSize,
        className,
    } = props

    //const hasPages = !(currentPage === 0 || paginationRange.length < 2)

    const { range: paginationRange, totalPageCount } = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    const onNext = () => {
        onPageChange(Math.min(totalPageCount, currentPage + 1))
    }

    const onPrevious = () => {
        onPageChange(Math.max(1, currentPage - 1))
    }

    useEffect(() => {
        onTotalCountChange(totalCount, totalPageCount)
    }, [onTotalCountChange, totalPageCount, totalCount])

    let lastPage = paginationRange[paginationRange.length - 1]

    return (
        <motion.ul layout className={className}>
            <motion.li layout onClick={onPrevious}>
                <div />
            </motion.li>
            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === splitSymbol) {
                    return (
                        <AnimatePresence key={`${pageNumber}_${i}`}>
                            <motion.li
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                >
                                {splitSymbol}
                            </motion.li>
                        </AnimatePresence>
                    )
                }

                return (
                    <AnimatePresence key={`${pageNumber}_${i}`}>
                        <motion.li
                            layout
                            onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </motion.li>
                    </AnimatePresence>
                )
            })}
            <motion.li
                layout
                onClick={onNext}>
                <div />
            </motion.li>
        </motion.ul>
    )
}

Pagination.defaultProps = {
    siblingCount: 1,
    currentPage: 1,
}

Pagination.propTypes = {
    onPageChange: PropTypes.func,
    totalCount: PropTypes.number,
    siblingCount: PropTypes.number,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
}

export default Pagination
