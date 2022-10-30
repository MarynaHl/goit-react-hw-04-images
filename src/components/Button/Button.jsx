import s from './Button.module.css';

export default function Button({ nextPage }) {
  return (
    <button type="button" className={s.Button} onClick={nextPage}>
      Load more
    </button>
  );
}

