'use client'
import Masonry from 'react-masonry-css'
import './gridcss.css'

const GridComp = ({children, className=""}) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`my-masonry-grid ${className} `}
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  )
}

export default GridComp
