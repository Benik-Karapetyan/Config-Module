import {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';

export interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => (
  <>
    <aside>
      <Button color="primary" fullWidth className="sidebar__btn">
        <NavLink to="/templates" className="navlink" activeClassName="navlink__active">
          Шаблоны журнала измерений
        </NavLink>
      </Button>
      <Button color="primary" fullWidth className="sidebar__btn">
        <Link to="/categories" className="navlink">
          Справочник категорий измерений
        </Link>
      </Button>
    </aside>
  </>
);

export default SideBar;
