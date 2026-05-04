import React from 'react';
import Enviar from '../../assets/enviar.svg?react';
import useFetch from '../../Hooks/UseFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Interface/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoComentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente: "
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoComentsForm;
