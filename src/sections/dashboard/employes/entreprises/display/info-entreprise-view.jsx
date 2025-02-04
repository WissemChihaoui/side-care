import { Button, Card, CardHeader, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export default function InfoEntrepriseView() {
  return (
    <>
      <Card>
        <CardHeader
          title="Informations générales"
          action={
            <Button variant="contained" color="primary">
              Modifier
            </Button>
          }
          sx={{ pb: 1 }}
        />
        <Divider />
        <Grid container spacing={2} p={2}>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Forme juridique de l’entreprise</Typography>
            </Grid>
            <Grid xs={6}>Association</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Raison sociale</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">SIREN</Typography>
            </Grid>
            <Grid xs={6}>12345678</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">SIRET</Typography>
            </Grid>
            <Grid xs={6}>12345678</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Numéro de TVA</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Siège social</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Code Postal</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Ville</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Activité de l&apos;entreprise</Typography>
            </Grid>
            <Grid xs={6}>Accueil de jeunes enfants</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Code APE/NAF</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Votre convention collective</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Votre convention collective</Typography>
            </Grid>
            <Grid xs={6}>-</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Chiffre d&apos;affaires</Typography>
            </Grid>
            <Grid xs={6}>Non renseigné</Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid xs={6}>
              <Typography variant="caption">Entreprise créée</Typography>
            </Grid>
            <Grid xs={6}>Oui</Grid>
          </Grid>
        </Grid>
      </Card>

      <Card>
          <CardHeader title="Démographie de votre entreprise" subheader="Afin de répondre à toutes vos obligations sociales il est important pour les assureurs de connaître les caractéristiques sur l'ensemble de vos salariés ainsi que la répartition entre cadres et non cadres." />
      </Card>
    </>
  );
}
