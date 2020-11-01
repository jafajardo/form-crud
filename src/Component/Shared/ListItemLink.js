import { ListItem, ListItemText } from '@material-ui/core';

const ListItemLink = ({name,label,href,...rest}) => {
  return (
    <ListItem key={name} button href={href} component='a' {...rest} >
      <ListItemText>{label}</ListItemText>
    </ListItem>
  )
}

export default ListItemLink;
