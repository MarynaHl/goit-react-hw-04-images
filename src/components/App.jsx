import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImagesWithQuery from 'services/api';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import s from './App.module.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [searchData, setSearchData] = useState('');
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');
    fetchImages(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  const formSubmitHandler = searchQuery => {
    setImgArr([]);
    setCurrentPage(1);
    setSearchQuery(searchQuery);
  };

  const loadMoreHandler = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  }, [page, searchData]);

  const onSubmit = newSearchData => {
    if (newSearchData.trim() === '') {
      return toast.error('Enter the meaning for search');
    } else if (newSearchData === searchData) {
      return;
    }
    setSearchData(newSearchData);
    setPage(1);
    setImages([]);
  };

  const nextPage = () => {
    setPage(p => p + 1);
  };

  const openModal = index => {
    setShowModal(true);
    setLargeImage(images[index].largeImageURL);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} />
      {images.length !== 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {showModal && <Modal toggleModal={toggleModal} largeImage={largeImage} />}
      {isLoading && <Loader />}
      <ToastContainer autoClose={2500} />
      {images.length >= 12 && <Button nextPage={nextPage} />}
    </div>
  );
}
