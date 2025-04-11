import React, { useState, useCallback } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import {
  Box,
  Card,
  Stack,
  Paper,
  Button,
  MenuList,
  MenuItem,
  Accordion,
  CardHeader,
  Typography,
  IconButton,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { fDate, today } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import AddDocumentDialog from '../add-document-dialog';
import AddDocumentSolliciteDialog from '../add-document-sollicite-dialog';

export function DocumentsTab() {
  const addDoc = useBoolean();
  const addSol = useBoolean();
  const popover = usePopover();
  const [controlled, setControlled] = useState(false);
  const [addressId, setAddressId] = useState('')

  const handleChangeControlled = (panel) => (event, isExpanded) => {
    setControlled(isExpanded ? panel : false);
  };

  const handleSelectedId = useCallback(
    (event, id) => {
      popover.onOpen(event);
      setAddressId(id);
    },
    [popover]
  );

  const handleClose = useCallback(() => {
    popover.onClose();
    setAddressId('');
  }, [popover]);

  const handleAddDocument = useCallback((document) => {
    console.info('document', document);
  }, []);
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Card
            sx={{
              pt: 2,
              pb: 5,
              px: 3,
            }}
          >
            <CardHeader
              title="Documents"
              sx={{ pb: 3 }}
              action={
                <Button
                  size="small"
                  color="primary"
                  startIcon={<Iconify icon="mingcute:add-line" />}
                  onClick={addDoc.onTrue}
                >
                  Ajouter
                </Button>
              }
            />
            <Stack spacing={2.5} sx={{ p: 3 }}>
              <Accordion expanded={controlled === 0} onChange={handleChangeControlled(0)}>
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography variant="subtitle1">Documents professionnels</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper
                    sx={{
                      gap: 2,
                      display: 'flex',
                      position: 'relative',
                      alignItems: { md: 'flex-end' },
                      flexDirection: { xs: 'column', md: 'row' },
                      p: 2.5,
                      borderRadius: 1,
                    }}
                    variant="outlined"
                  >
                    <Stack flexGrow={1} spacing={1}>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="subtitle2">
                          Contrat de travail
                          <Box
                            component="span"
                            sx={{ ml: 0.5, typography: 'body2', color: 'text.secondary' }}
                          >
                            (nom du document)
                          </Box>
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {fDate(today())}
                      </Typography>
                    </Stack>
                  </Paper>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={controlled === 1} onChange={handleChangeControlled(1)}>
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography variant="subtitle1">Justificatifs de transport</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper
                    sx={{
                      gap: 2,
                      display: 'flex',
                      position: 'relative',
                      alignItems: { md: 'flex-end' },
                      flexDirection: { xs: 'column', md: 'row' },
                      p: 2.5,
                      borderRadius: 1,
                    }}
                    variant="outlined"
                  >
                    <Stack flexGrow={1} spacing={1}>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="subtitle2">
                          Justificatifs de transport
                          <Box
                            component="span"
                            sx={{ ml: 0.5, typography: 'body2', color: 'text.secondary' }}
                          >
                            (nom du document)
                          </Box>
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {fDate(today())}
                      </Typography>
                    </Stack>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card
            sx={{
              pt: 2,
              pb: 5,
              px: 3,
            }}
          >
            <CardHeader
              title="Documents sollicités"
              sx={{ pb: 3 }}
              action={
                <Button
                  size="small"
                  color="primary"
                  startIcon={<Iconify icon="mingcute:add-line" />}
                  onClick={addSol.onTrue}
                >
                  Solliciter un document
                </Button>
              }
            />
            <Stack spacing={2.5} sx={{ p: 3 }}>
              <Paper
                sx={{
                  gap: 2,
                  display: 'flex',
                  position: 'relative',
                  alignItems: { md: 'flex-end' },
                  flexDirection: { xs: 'column', md: 'row' },
                  p: 2.5,
                  borderRadius: 1,
                }}
                variant="outlined"
              >
                <Stack flexGrow={1} spacing={1}>
                  <Stack direction="row" alignItems="center">
                    <Typography variant="subtitle2">
                      Contrat signé - CCDi
                      <Box
                        component="span"
                        sx={{ ml: 0.5, typography: 'body2', color: 'text.secondary' }}
                      >
                        (nom du document)
                      </Box>
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fDate(today())}
                  </Typography>
                </Stack>
                <IconButton
                  onClick={(event) => {
                    handleSelectedId(event, 1);
                  }}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <Iconify icon="eva:more-vertical-fill" />
                </IconButton>
              </Paper>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={handleClose}>
        <MenuList>
          <MenuItem
            onClick={() => {
              handleClose();
              console.info('Relancer', addressId);
            }}
          >
            <Iconify icon="eva:star-fill" />
            Relancer
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              console.info('Annuler', addressId);
            }}
          >
            <Iconify icon="material-symbols:cancel-outline-rounded" />
            Annuler
          </MenuItem>

        </MenuList>
      </CustomPopover>

      <AddDocumentDialog
        open={addDoc.value}
        onClose={addDoc.onFalse}
        onCreate={handleAddDocument}
      />

      <AddDocumentSolliciteDialog
        open={addSol.value}
        onClose={addSol.onFalse}
        onCreate={handleAddDocument}
      />
    </>
  );
}
