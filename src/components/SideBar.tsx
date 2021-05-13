import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';

interface Navlink {
  text: string;
  to: string;
}

export interface SideBarProps {
  items: Navlink[];
}

const SideBar: FC<SideBarProps> = ({items = []}) => (
  <aside>
    {items.map((item) => (
      <Button key={item.text} color="primary" fullWidth className="sidebar__btn">
        <NavLink to={item.to} className="navlink" activeClassName="navlink__active">
          {item.text}
        </NavLink>
      </Button>
    ))}
  </aside>
);

export default SideBar;
