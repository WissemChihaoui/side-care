import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

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

export default function AddDocumentDialog({ open, onClose, onCreate }) {
  const defaultValues = {
    type: '',
    name: '',
    file: '',
    disposition: '',
  };
  const methods = useForm({
    mode: 'all',
    // resolver: zodResolver(NewDocumentSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const handleRemoveFile = useCallback(() => {
    setValue('disposition', null);
  }, [setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      onCreate({
        type: data.type,
        name: data.name,
        file: data.file,
        disposition: data.disposition,
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Ajouter un document pour user</DialogTitle>

        <DialogContent dividers>
          <Box
            p={3}
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
            }}
          >
            <Field.Select name="type" label="Type de document">
              <MenuItem value="">None</MenuItem>
              <Divider sx={{ borderStyle: 'dashed' }} />
            </Field.Select>

            <Field.Text name="name" label="Nom du documnt" />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Fichier</Typography>
              <Field.Upload name="file" maxSize={3145728} onDelete={handleRemoveFile} />
            </Stack>

            <Field.Checkbox
              name="disposition"
              label="Mettre à disposition le document sur l'espace employé Cf sera notifié par email de la mise à disposition du document sur son espace"
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Enregistrer
          </LoadingButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
