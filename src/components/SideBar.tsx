import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

interface Navlink {
  text: string;
  to: string;
}

export interface SideBarProps {
  items: Navlink[];
}

const SideBar: FC<SideBarProps> = ({items = []}) => {
  return (
    <aside>
      <List component="nav" aria-label="main mailbox folders">
        {items.map((item) => (
          <ListItem key={item.text} button style={{padding: 0}}>
            <NavLink to={item.to} className="navlink" activeClassName="navlink__active">
              <ListItemText primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default SideBar;
