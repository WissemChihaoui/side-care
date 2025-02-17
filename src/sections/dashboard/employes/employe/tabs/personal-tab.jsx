import { Box, Button, Card, Divider, MenuItem, Switch, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { Field } from 'src/components/hook-form';
import { Label } from 'src/components/label';
import { UploadAvatar } from 'src/components/upload';
import { fData } from 'src/utils/format-number';

export function PersonalTab() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card
            sx={{
              pt: 10,
              pb: 5,
              px: 3,
              textAlign: 'center',
            }}
          >
            <Label color="success" sx={{ position: 'absolute', top: 24, right: 24 }}>
              Active
            </Label>
            <Field.UploadAvatar
              name="photoURL"
              maxSize={3145728}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 3,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.disabled',
                  }}
                >
                  Autorisé *.jpeg, *.jpg, *.png, *.gif
                  <br /> Taille maximale de {fData(3145728)}
                </Typography>
              }
            />

            <Button variant="soft" color="error" sx={{ mt: 3 }}>
              Supprimer le collaborateur
            </Button>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
                <Field.Select name="civility" label="Civilité">
                <MenuItem value="">Aucun</MenuItem>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  {[{label: 'Monsieur', value: 'm'}, {label: 'Madame', value: 'mdm'}].map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field.Select>
                <Field.Text name="lastName" label="Nom" />
                <Field.Text name="maidenName" label="Nom de naissance" />
                <Field.Text name="firstName" label="Prénom" />
                <Field.Text name="nationality" label="Nationalité" />
                <Field.Text name="idCard" label="Pièce d’identité" />
                <Field.Text name="address" label="Adresse" />
                <Field.Text name="postalCode" label="Code postal" />
                <Field.Text name="city" label="Ville" />
                <Field.DatePicker name="birthDate" label="Date de naissance" />
                <Field.Text name="birthCity" label="Ville de naissance" />
                <Field.Text name="birthPostalCode" label="Code postal de naissance" />
                <Field.Text name="birthCountry" label="Pays de naissance" />
                <Field.Text name="personalEmail" label="E-mail personnel" />
                <Field.Phone name="phone" label="Téléphone" />
                <Field.Text name="socialSecurityNumber" label="N° de sécurité sociale" />
                <Field.Text name="ameliCertificate" label="Attestation Ameli" />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
