import React, { useEffect, useState } from 'react'
import PhotosProps from '../../components/Types/PhotosProps';

const PhotosPage = ({ albumId }: { albumId: number }) => {

  const [photo, setPhoto] = useState<PhotosProps[]>([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((res) => res.json())
      .then((data) => setPhoto(data))
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div>
    {photo.map((photo) => (
      <li key={photo.id}>
        {photo.thumbnailUrl}
      </li>
    ))}
  </div>
  )
}

export default PhotosPage