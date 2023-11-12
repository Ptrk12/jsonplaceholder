import React, { useEffect, useState } from 'react'
import AlbumProps from '../../components/Types/AlbumProps';
import { Link } from 'react-router-dom';
import './albumsPage.css'

const AlbumsPage = ({ userId }: { userId: number }) => {

  const [album, setAlbum] = useState<AlbumProps[]>([]);

  useEffect(() => {
    fetchDataAlbum();
  }, []);

  const fetchDataAlbum = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((res) => res.json())
      .then((data) => setAlbum(data))
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className='cont'>
      <ul>
      {album.map((album) => (
        <li className='list' key={album.id}>
          {album.title}
          {album.id}
          <Link to={`/albums/${album.id}/photos`}>
            <i className="gg-photoscan"></i>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default AlbumsPage