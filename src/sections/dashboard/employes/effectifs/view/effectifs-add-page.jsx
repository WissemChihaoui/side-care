import React from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

import { Box, Card, Stack, Divider, MenuItem, CardHeader } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

import { Form, Field } from 'src/components/hook-form';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

export default function EffectifsAddPage() {
  const router = useRouter();
  const methods = useForm({
    // resolver: zodResolver(NewProductSchema),
    // defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast.success('Create success!');
      router.push(paths.dashboard.product.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderInformations = (
    <Card>
      <CardHeader
        title="Informations générale"
        subheader="Toutes les informations sont requises afin de créer un compte SideCare pour votre employé"
        sx={{ mb: 3 }}
      />

      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.RadioGroup
          row
          name="gender"
          label="Civilité"
          options={[
            { label: 'Homme', value: 'm' },
            { label: 'Femme', value: 'f' },
          ]}
          sx={{ gap: 4 }}
        />
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <Field.Text name="lastName" label="Prénom" />
          <Field.Text name="firstName" label="Nom" />
          <Field.Text name="mail" label="E-mail" type="email" />
          <Field.Select name="entreprise" label="Entreprise">
            {['entreprise 1', 'entreprise 2'].map((entreprise)=> (
              <MenuItem value={entreprise}>{entreprise}</MenuItem>
            ) )}
          </Field.Select>
        </Box>
      </Stack>
    </Card>
  );

  const renderContract = (
    <Card>
      <CardHeader
        title="Contrat"
        subheader="Toutes les informations liées au contrat de travail de l'employé"
        sx={{ mb: 3 }}
      />

      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.RadioGroup
          row
          name="gender"
          label="Civilité"
          options={[
            { label: 'Homme', value: 'm' },
            { label: 'Femme', value: 'f' },
          ]}
          sx={{ gap: 4 }}
        />
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
           <Field.Select name="type" label="Type de contrat">
            {['CDI', 'CDD'].map((entreprise)=> (
              <MenuItem value={entreprise}>{entreprise}</MenuItem>
            ) )}
          </Field.Select>
           <Field.Select name="college" label="Collège">
            {['Cadre', 'Non Cadre'].map((entreprise)=> (
              <MenuItem value={entreprise}>{entreprise}</MenuItem>
            ) )}
          </Field.Select>
          <Field.DatePicker name="entreDate" label="Date d'entrée dans l'entreprise" />
         
        </Box>
      </Stack>
    </Card>
  )
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Ajout d'un nouvel employé"
        links={[
          { name: 'Tableau du bord', href: paths.dashboard.root },
          { name: 'Effectifs', href: paths.dashboard.employes.root },
          { name: 'Nouveau' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <Form methods={methods} onSubmit={onSubmit}>
        <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
          {renderInformations}
          {renderContract}
        </Stack>
      </Form>
    </DashboardContent>
  );
}
