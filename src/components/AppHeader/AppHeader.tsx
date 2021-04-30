import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {Grid, Button} from '@material-ui/core';
import './appHeader.css';

export interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => {
  return (
    <header className="app-header">
      <Grid container alignItems="center" justify="space-between">
        <Grid>
          <h3 className="title">Конфигуратор журнала измерений</h3>
          <h5 className="subtitle">
            <span className="blue--text">07:35, </span>
            ПН, 8 августа 2020
          </h5>
        </Grid>

        <Button variant="contained" color="primary" disableElevation>
          создать новый шаблон
        </Button>
      </Grid>
    </header>
  );
};

export default AppHeader;
