import { Avatar, Button, Card, ListItemText } from "@mui/material";
import { Iconify } from "src/components/iconify";

export function ItemCard({ follower, selected, onSelected }) {
    const { name, country, avatarUrl, fonction } = follower;
  
    return (
      <Card sx={{ display: 'flex', alignItems: 'center', p: (theme) => theme.spacing(3, 2, 3, 3) }}>
        <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48, mr: 2 }} />
  
        <ListItemText
          primary={name}
          secondary={
            <>
              {fonction}
            </>
          }
          primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
          secondaryTypographyProps={{
            mt: 0.5,
            noWrap: true,
            display: 'flex',
            component: 'span',
            alignItems: 'center',
            typography: 'caption',
            color: 'text.disabled',
          }}
        />
  
        <Button
          size="small"
          variant='outlined'
          color='inherit'
          
          onClick={onSelected}
          sx={{ flexShrink: 0, ml: 1.5 }}
        >
          Modifier
        </Button>
      </Card>
    );
  }