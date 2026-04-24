import React from 'react';

const UseMedia = (media) => {
  const [match, setmatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      setmatch(window.matchMedia('(max-width: 40rem)').matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  const { matches } = window.matchMedia('(max-width: 40rem)');
  return match;
};

export default UseMedia;
