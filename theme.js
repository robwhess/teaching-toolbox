/*
 * Site-wide style constants.
 */

const color = {
  primary: {
    background: '#fff',
    font: '#000',
    border: '#dadada',
    focused: '#000',
    hover: '#ededed'
  },
  sidebar: {
    background: '#ededed',
    font: '#222'
  },

  complete: '#73ba56',
  invalid: '#e04d2d',
  selected: '#b7e5f2',

  button: {
    primary: {
      background: '#73ba56',
      hover: '#7edb58',
      font: '#fff'
    }
  }
};

const size = {
  font: {
    title: 30,
    large: 24,
    normal: 18,
    small: 14
  }
};

const breakpoints = {
  sm: 800,
  xs: 512
};

export { color, size, breakpoints };
