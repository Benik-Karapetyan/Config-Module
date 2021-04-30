import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
import './sideBar.css';

export interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => (
  <>
    <aside>
      <Button color="primary" className="sidebar-btn">
        <NavLink to="/templates" className="navlink" activeClassName="navlink__active">
          Шаблоны журнала измерений
        </NavLink>
      </Button>
      <Button color="primary" className="sidebar-btn">
        <NavLink to="/categories" className="navlink" activeClassName="navlink__active">
          Справочник категорий измерений
        </NavLink>
      </Button>
    </aside>
  </>
);

export default SideBar;
