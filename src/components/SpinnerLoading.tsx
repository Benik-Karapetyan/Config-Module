import {FC} from 'react';
import {CircularProgress} from '@material-ui/core';

export interface SpinnerLoadingProps {
  loading: boolean;
}

const SpinnerLoading: FC<SpinnerLoadingProps> = ({loading}) => {
  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.4)',
            zIndex: 1000,
          }}
        >
          <CircularProgress size="4.5rem" thickness={4.5} />
        </div>
      )}
    </>
  );
};

export default SpinnerLoading;
