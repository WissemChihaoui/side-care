import React from 'react'

export default function FiltersTromb() {
    const renderFilterName = (
        <TextField
          value={filters.state.name}
          onChange={handleFilterName}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: 1, md: 260 } }}
        />
      );
  return (
    <div>FiltersTromb</div>
  )
}
