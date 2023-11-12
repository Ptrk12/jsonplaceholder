import React, { useEffect, useState } from 'react'
import PhotosProps from '../../components/Types/PhotosProps';
import Pagination from '../../components/Pagination';

const PhotosPage = ({ albumId }: { albumId: number }) => {

  const [photo, setPhoto] = useState<PhotosProps[]>([]);

  useEffect(() => {
    fetchPhotos();
  }, []);


  const[currentPage, setCurrentPage] = useState<number>(1)

  const fetchPhotos = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((res) => res.json())
      .then((data) => setPhoto(data))
      .catch((err) => {
        console.log(err);
      });
  }

    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    const currentPhotos = photo.slice(startIndex, endIndex);


  return (
    <div className='cont'>
      <ul>
        {currentPhotos.map((photo) => (
        <li key={photo.id}>
         <img src={photo.thumbnailUrl} alt='#'/>
        </li>
    ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        total={photo.length}
        limit={4}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
  </div>
  )
}

export default PhotosPage