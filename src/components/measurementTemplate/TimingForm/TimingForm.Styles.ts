import {makeStyles} from '@material-ui/core';

const useTimingFormStyles = makeStyles(() => ({
  title: {
    margin: '0 0 25px',
  },
  label: {
    display: 'block',
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 500,
  },
  textArea: {
    width: '100%',
    marginBottom: 35,
  },
}));

export default useTimingFormStyles;
