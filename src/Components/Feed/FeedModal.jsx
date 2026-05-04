import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/UseFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Interface/Error';
import Loading from '../Interface/Loading';
import PhotoContent from '../Photo/PhotoContent';
import { func } from 'prop-types';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, erro, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {erro && <Error error={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
