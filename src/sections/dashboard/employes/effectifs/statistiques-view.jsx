import {
  Card,
  CardHeader,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { _employesList, ENTREPRISE } from 'src/_mock/_employes';
import { useSetState } from 'src/hooks/use-set-state';

export default function StatistiquesView() {
  const [tableData, setTableData] = useState(_employesList);
  const entreprise = useSetState('Toutes mes entreprises');

  const handleFilterEntreprise = useCallback(
    (event) => {
      const newValue = event.target.value;
      entreprise.setState(newValue);
    },
    [entreprise]
  );

  const dataFiltered = applyFilter({
    inputData: tableData,
    entreprise: entreprise.state,
  });
  return (
    <>
      <Stack>
        <Card>
          <Stack sx={{ p: 2 }}>
            <FormControl sx={{ flexShrink: 0 }}>
              <InputLabel htmlFor="user-filter-role-select-label">Entreprise</InputLabel>
              <Select
                value={entreprise.state}
                onChange={handleFilterEntreprise}
                input={<OutlinedInput label="Entreprise" />}
                renderValue={(selected) => selected}
                inputProps={{ id: 'user-filter-role-select-label' }}
                MenuProps={{ PaperProps: { sx: { maxHeight: 240 } } }}
              >
                <MenuItem value="Toutes mes entreprises">
                  <Checkbox
                    disableRipple
                    size="small"
                    checked={entreprise.state === 'Toutes mes entreprises'}
                  />
                  Toutes mes entreprises
                </MenuItem>
                {ENTREPRISE.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    <Checkbox disableRipple size="small" checked={entreprise.state === option} />
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Card>
      </Stack>
    </>
  );
}

function applyFilter({ inputData, entreprise }) {
  if (entreprise !== 'Toutes mes entreprises') {
    inputData = inputData.filter((user) => user.entreprise === entreprise);
  }

  return inputData;
}
