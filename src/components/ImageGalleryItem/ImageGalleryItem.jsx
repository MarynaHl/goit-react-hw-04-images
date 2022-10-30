import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, index, openModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem__image}
        src={webformatURL}
        onClick={() => openModal(index)}
        alt=""
      />
    </li>
  );
}

