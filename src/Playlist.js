const KEY = 'rm-playlist';

export const getPlaylist = () => {
  let result = [];
  try {
    result = JSON.parse(window.localStorage.getItem(KEY)) || [];
  } catch(e) {
    // log error metric for getPlaylist
  } finally {
    return result;
  }
};

export const setPlaylist = (playlist) => {
  let result = [];
  try {
    result = window.localStorage.setItem(KEY, JSON.stringify(playlist));
  } catch(e) {
    // log error metric for setPlaylist
  } finally {
    return result;
  }
};
