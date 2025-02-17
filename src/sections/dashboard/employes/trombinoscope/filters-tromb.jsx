import { Checkbox, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField } from '@mui/material';
import React, { useCallback } from 'react'
import { ENTREPRISE } from 'src/_mock/_employes';
import { ENTREPRISE_LIST } from 'src/_mock/_entreprises';
import { Iconify } from 'src/components/iconify';

export default function FiltersTromb({filters, onResetPage}) {
  const handleFilterName = useCallback(
    (event) => {
      onResetPage();
      filters.setState({ name: event.target.value });
    },
    [filters, onResetPage]
  );

  const handleCompanyChange = useCallback(
    (event) => {
      onResetPage();
      filters.setState({ company: event.target.value });
    },
    [filters, onResetPage]
  )
    const renderFilterName = (
        <TextField
          value={filters.state.name}
          onChange={handleFilterName}
          placeholder="Rechercher par nom..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{width: { xs: 1} }}
        />
      );

      const renderFilterCompany = (
        <FormControl sx={{width: { xs: 1, md: 250 } }}>
          <InputLabel htmlFor="invoice-filter-service-select-label">Entreprise</InputLabel>

          <Select
            value={filters.state.company}
            onChange={handleCompanyChange}
            input={<OutlinedInput label="Entreprise" />}
            renderValue={(selected) => selected}
            inputProps={{ id: 'invoice-filter-service-select-label' }}
            sx={{ textTransform: 'capitalize' }}
          >
            {ENTREPRISE.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  disableRipple
                  size="small"
                  checked={filters.state.company === option}
                />
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
  return (
    <>
    <Stack
        spacing={3}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-end', sm: 'center' }}
      >
    {renderFilterName}
    {renderFilterCompany}
    </Stack>
    </>
  )
}
