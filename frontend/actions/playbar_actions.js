export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";

export const togglePlay = () => {
  return {
    type: TOGGLE_PLAY,
  };
};

export const togglePause = () => {
  return {
    type: TOGGLE_PAUSE,
  };
};

export const toggleShuffle = (value) => {
  return {
    type: TOGGLE_SHUFFLE,
    value,
  };
};