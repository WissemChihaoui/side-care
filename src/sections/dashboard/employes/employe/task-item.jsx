import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TaskItem({ task, toggle, sx, ...other }) {
  return (
    <Paper
      sx={{
        gap: 2,
        display: 'flex',
        position: 'relative',
        alignItems: { md: 'flex-end' },
        flexDirection: { xs: 'column', md: 'row' },
        ...sx,
      }}
      {...other}
    >
      <Stack flexGrow={1} spacing={1}>
        <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2">
            {task?.title}
            <Box component="span" sx={{ ml: 0.5, typography: 'body2', color: 'text.secondary' }}>
              ({task?.assignedTo})
            </Box>
          </Typography>
        </Stack>
      </Stack>

      <Button
        size="small"
        variant={task.isDone ? 'text' : 'outlined'}
        color={task.isDone ? 'success' : 'inherit'}
        startIcon={
          task.isDone ? <Iconify width={18} icon="eva:checkmark-fill" sx={{ mr: -0.75 }} /> : null
        }
        onClick={toggle}
        sx={{ flexShrink: 0, ml: 1.5 }}
      >
        {task.isDone ? 'Achevée' : 'Validez'}
      </Button>
    </Paper>
  );
}
