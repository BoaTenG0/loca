import React from 'react'
import { Box, Chip, Tab, Tabs } from '@mui/material'

interface TabLabel {
  name: string
  count?: number
  color?: string
  backgroundColor?: string
}

interface PlotTabsProps {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  labels: TabLabel[]
}

const PlotTabs: React.FC<PlotTabsProps> = ({ value, handleChange, labels }) => {
  return (
    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', zIndex: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="plot tabs"
        sx={{
          px: 1,
          '.MuiTabs-indicator': {
            backgroundColor: '#199675',
          },
          zIndex: 1,
        }}
      >
        {labels.map((label, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 12 }}>
                {label.name}
                {label.count && (
                  <Chip
                    label={label.count}
                    size="small"
                    sx={{ marginLeft: 1, backgroundColor: label.backgroundColor || '#e8f5f1', color: label.color || '' }}
                  />
                )}
              </Box>
            }
            sx={{
              textTransform: 'none',
              fontFamily: 'Poppins',
              '&.Mui-selected': { color: '#199675' },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default PlotTabs
