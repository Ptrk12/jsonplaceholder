import React from 'react'
import PaginationProps from './Types/PaginationProps'
import classNames from 'classnames'
import './styles/pagination.css'


const range = (start:number,end:number) => {
    return [...Array(end).keys()].map(x=>x+start)
}

interface PaginationItemProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({page,currentPage,onPageChange}:PaginationItemProps) =>{
  const liClasses = classNames({
    'page-item':true,
    active: page===currentPage
  })
  return(
    <li className={liClasses} onClick={()=>onPageChange(page)}>
      <span className='page-link'>
        {page}
      </span>
    </li>
  )
}

const Pagination = ({currentPage, total, limit, onPageChange}: PaginationProps) => {

    const pagesCount = Math.ceil(total/limit);
    const pages = range(1,pagesCount);


  return (
    <ul className='pagination'>
      {pages.map(page =>(
        <PaginationItem page={page} key={page} currentPage = {currentPage} onPageChange = {onPageChange}/>
      ))}
    </ul>
  )
}

export default Pagination
