import React from 'react';
import { z as zod } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Grid from '@mui/material/Unstable_Grid2';
import { Card, Stack, Button, Divider, MenuItem, CardHeader, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { today } from 'src/utils/format-time';

import { Form, Field } from 'src/components/hook-form';

export const EntrepriseFormSchema = zod
  .object({
    isCreated: zod.string(),
    formeJuridique: zod.string(),
    raison: zod
      .string()
      .min(1, { message: "Raison sociale de l'entreprise est requis" })
      .optional(),
    siret: zod.string().min(1, { message: 'SIRET est requis' }).optional(),
  })
  .refine((data) => data.raison || data.siret, {
    message: 'Vous devez remplir au moins la raison sociale ou le SIRET',
    path: ['raison'],
  });

export function EntrepriseAddEditForm({ entreprise }) {
  const router = useRouter();
  const defaultValues = {
    isCreated: entreprise?.isCreated || '0',
    id: entreprise?.id || '',
    formeJuridique: entreprise?.formeJuridique || '',
    raison: entreprise?.name || '',
    createdAt: entreprise?.createdAt || today(),
    tva: entreprise?.tva || '',
    siren: entreprise?.siren || '',
    siret: entreprise?.siret || '',
    adresse: entreprise?.adresse || '',
    zipCode: entreprise?.zipCode || '',
    country: entreprise?.country || '',
    activity: entreprise?.activity || '',
    convention: entreprise?.convention || '',
    sales: entreprise?.sales || '',
    logo: entreprise?.logo || '',
    employes: {
      employesNumber: entreprise?.employes || 0,
      avgAge: entreprise?.avgAge || 0,
      manageres: entreprise?.manageres || 0,
      avgAgeManagers: entreprise?.avgAgeManagers || 0,
      nonManagers: entreprise?.nonManagers || 0,
      avgAgeNonManagers: entreprise?.avgAgeNonManagers || 0,
    },
    masseSalaireA: entreprise?.masseSalaireA || 0,
    masseSalaireB: entreprise?.masseSalaireB || 0,
  };

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(EntrepriseFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success('Ajouter succés!');
      router.push(paths.dashboard.entreprise.successAddEntreprise);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });
  const renderInfo = (
    <Card>
      <CardHeader
        title="Information générale"
        sx={{ mb: 3 }}
        subheader="Configurez les informations sur votre entreprise pour bénéficier de la meilleure expérience sur SideCare."
      />
      <Divider />
      <Grid container spacing={2.5} sx={{ p: 3 }}>
        <Grid xs={12}>
          <Typography variant="subtitle2">Entreprise créée</Typography>
          <Field.RadioGroup
            row
            name="isCreated"
            options={[
              { label: 'Oui', value: '1' },
              { label: 'Non', value: '0' },
            ]}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Forme juridique de l’entreprise</Typography>
          <Field.Select name="formeJuridique">
            <MenuItem value="">Aucun</MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            {['Juridique 1'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Field.Select>
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Raison sociale</Typography>
          <Field.Text name="raison" sx={{ maxHeight: 480 }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Date de création</Typography>
          <Field.DatePicker name="createdAt" />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Numéro de TVA</Typography>
          <Field.Text name="tva" sx={{ maxHeight: 480 }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">SIREN</Typography>
          <Field.Text name="siren" sx={{ maxHeight: 480 }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">SIRET</Typography>
          <Field.Text name="siret" sx={{ maxHeight: 480 }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Adresse du siège social</Typography>
          <Field.Text name="adresse" sx={{ maxHeight: 480 }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Code postal</Typography>
          <Field.Text name="zipCode" sx={{ maxHeight: 480 }} />
        </Grid>
        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Ville</Typography>
          <Field.Text name="country" sx={{ maxHeight: 480 }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Activité de l&apos;entreprise / Code APE/NAF</Typography>
          <Field.Select name="activity">
            <MenuItem value="">Aucun</MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            {['Activité 1'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Field.Select>
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Votre Convention collective</Typography>
          <Field.Text name="convention" sx={{ maxHeight: 480 }} />
        </Grid>
        <Grid xs={12} md={6}>
          <Typography variant="subtitle2">Chiffre d&apos;affaire</Typography>
          <Field.Text name="sales" sx={{ maxHeight: 480 }} />
        </Grid>
      </Grid>
    </Card>
  );

  const renderLogo = (
    <Card>
      <CardHeader
        title="Logo de votre entreprise"
        sx={{ mb: 3 }}
        subheader="Ce logo s’affichera sur les espaces des collaborateurs de l’entreprise"
      />
      <Divider />
      <Stack p={3}>
        <Field.Upload name="logo" />
      </Stack>
    </Card>
  );

  const renderSalaire = (
    <Card>
      <CardHeader
        title="Masse salariale annuelle"
        sx={{ mb: 3 }}
        subheader="Ce logo s’affichera sur les espaces des collaborateurs de l’entreprise"
      />
      <Divider />
      <Stack p={3} height="1">
        <Grid container spacing={2.5} sx={{ p: 3 }}>
          <Grid xs={12}>
            <Typography variant="subtitle2">Masse salariale Tranche A</Typography>
            <Field.Text name="masseSalaireA" type="number" />
          </Grid>
          <Grid xs={12}>
            <Typography variant="subtitle2">Masse salariale Tranche B</Typography>
            <Field.Text name="masseSalaireB" type="number" />
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );

  const renderProperities = (
    <Card>
      <CardHeader title="Taille de votre entreprise" sx={{ mb: 3 }} />
      <Divider />
      <Stack p={3}>
        <Grid container spacing={2.5} sx={{ p: 3 }}>
          <Grid xs={12} md={6}>
            <Typography variant="subtitle2">Nombre de salariés</Typography>
            <Field.Text name="employes.employesNumber" type="number" />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="subtitle2">Moyenne d&apos;âge</Typography>
            <Field.Text name="employes.avgAge" type="number" />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="subtitle2">Nombre de salariés cadres</Typography>
            <Field.Text name="employes.manageres" type="number" />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="subtitle2">Moyenne d&apos;âge des salariés cadres</Typography>
            <Field.Text name="employes.avgAgeManagers" type="number" />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="subtitle2">Nombre de salariés non cadres</Typography>
            <Field.Text name="employes.nonManagers" type="number" />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="subtitle2">Moyenne d&apos;âge des salariés non cadres</Typography>
            <Field.Text name="employes.avgAgeNonManagers" type="number" />
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );
  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={2.5}>
        <Grid xs={12}>{renderInfo}</Grid>
        <Grid xs={12} md={5}>
          {renderLogo}
        </Grid>
        <Grid xs={12} md={7}>
          {renderSalaire}
        </Grid>
        <Grid xs={12}>{renderProperities}</Grid>
      </Grid>
      <Stack alignItems="flex-end" mt={2} px={2}>
        <Button type="submit" color="primary" variant="contained">
          Enregistrer
        </Button>
      </Stack>
    </Form>
  );
}
