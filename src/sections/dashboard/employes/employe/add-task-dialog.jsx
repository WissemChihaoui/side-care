import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';

import { LoadingButton } from '@mui/lab';
import {
  Box,
  Stack,
  Dialog,
  Button,
  Divider,
  MenuItem,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { Form, Field } from 'src/components/hook-form';

export default function AddTaskDialog({ open, onClose, onCreate }) {
  const defaultValues = {
    type: '',
    name: '',
    description: '',
    user: '',
    file: null,
    date: null,
  };

  const methods = useForm({
    mode: 'all',
    defaultValues,
    // resolver: zodResolver(NewDocumentSchema), // Uncomment if using schema validation
  });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const handleRemoveFile = useCallback(() => {
    setValue('file', null);
  }, [setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      // You can adjust here if you want to transform the data
      onCreate(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" scroll="paper">
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Créer une tâche</DialogTitle>

        <DialogContent dividers tabIndex={-1}>
          <Box
            p={3}
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)' }}
          >
            <Field.Text name="name" label="Nom" />
            <Field.Text name="description" label="Description" rows={4} multiline />

            <Field.Select name="type" label="Type d'utilisateur">
              <MenuItem value="">Aucun</MenuItem>
              <Divider sx={{ borderStyle: 'dashed' }} />
              <MenuItem value="admin">Un administrateur</MenuItem>
              <MenuItem value="employe">Un employé</MenuItem>
            </Field.Select>

            <Field.Select name="user" label="Responsable">
              <MenuItem value="">Aucun</MenuItem>
              <Divider sx={{ borderStyle: 'dashed' }} />
              <MenuItem value="1">Wissem Chihaoui</MenuItem>
              <MenuItem value="2">Utilisateur 2</MenuItem>
            </Field.Select>

            <Field.DatePicker name="date" label="Échéance" />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Pièce jointe</Typography>
              <Field.Upload
                thumbnail
                name="file"
                maxSize={3145728}
                onRemove={handleRemoveFile}
                onUpload={() => console.info('ON UPLOAD')}
              />
            </Stack>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onClose}>
            Annuler
          </Button>

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Enregistrer
          </LoadingButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
