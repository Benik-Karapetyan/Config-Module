import {FC, SyntheticEvent} from 'react';
import {useDispatch} from 'react-redux';
import {showMessage} from '../store/slices/general';
import {Snackbar} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';

export interface MessageSnackbarProps {
  show: boolean;
  message?: string;
  type?: 'error' | 'info' | 'success' | 'warning';
}

const MessageSnackbar: FC<MessageSnackbarProps> = ({show, message, type}) => {
  const dispatch = useDispatch();

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(showMessage({show: false, text: message, type}));
  };

  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
      <div>
        <Alert onClose={handleClose} elevation={6} variant="filled" severity={type}>
          {/* <AlertTitle>{message}</AlertTitle> */}
          <h2 style={{margin: 0, color: 'white'}}>{message}</h2>
        </Alert>
      </div>
    </Snackbar>
  );
};

export default MessageSnackbar;
