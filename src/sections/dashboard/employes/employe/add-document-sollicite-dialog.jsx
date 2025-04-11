import React from 'react';
import { useForm } from 'react-hook-form';

import { LoadingButton } from '@mui/lab';
import {
  Box,
  Dialog,
  Button,
  Divider,
  MenuItem,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { Form, Field } from 'src/components/hook-form';

export default function AddDocumentSolliciteDialog({ open, onClose, onCreate }) {
  const defaultValues = {
    type: '',
    name: '',
    file: '',
    message: '',
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

  const onSubmit = handleSubmit(async (data) => {
    try {
      onCreate({
        type: data.type,
        name: data.name,
        file: data.file,
        message: data.message,
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" scroll="paper">
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle sx={{ pb: 2 }}>
          Solliciter la transmission d&apos;un document par cf
        </DialogTitle>

        <DialogContent tabIndex={-1} dividers>
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

            <Field.Text name="message" label="Message pour cf" multiline rows={4} />
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
