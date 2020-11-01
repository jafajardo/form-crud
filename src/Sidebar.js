import React from 'react';
import { List } from '@material-ui/core';
import ListItemLink from './Component/Shared/ListItemLink';

const Sidebar = ({ items }) => {
  return (
    <div className='sidebar'>
      <List disablePadding>
        {
          items.map(({ name, label, href, ...rest }) => (
            <ListItemLink key= {name} name={name} label={label} href={href} {...rest} />
          ))
        }
      </List>
    </div>
  );
}

export default Sidebar;