type PaginationProps = {
    currentPage : number,
    total: number,
    limit: number,
    onPageChange: (page:number) => void
}

export default PaginationProps