import React from 'react'
import { Box, Chip, Tab, Tabs } from '@mui/material'

interface TabLabel {
  name: string
  count?: number
  chipColor?: string // Optional: Allow dynamic chip color
}

interface PlotTabsProps<T = any> {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  labels: TabLabel[]
  tabIndicatorColor?: string // Optional: Allow dynamic tab indicator color
  tabStyles?: React.CSSProperties // Optional: Allow custom styles for tabs
}

const TabComponent: React.FC<PlotTabsProps> = ({
  value,
  handleChange,
  labels,
  tabIndicatorColor, // Default color
  tabStyles = {}, // Default styles
}) => {
  return (
    <Box sx={{ width: '100%', borderBottom: 0.2, marginRight: 10, borderColor: 'divider', zIndex: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="plot tabs"
        sx={{
          marginRight: 10,
          '.MuiTabs-indicator': {
            backgroundColor: tabIndicatorColor || '#199675',
          },
          zIndex: 1,
        }}
      >
        {labels.map((label, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex' }}>
                {label.name}
                {label.count && (
                  <Chip
                    label={label.count}
                    size="small"
                    sx={{
                      marginLeft: 1,
                      backgroundColor: label.chipColor || '', // Use dynamic chip color
                    }}
                  />
                )}
              </Box>
            }
            sx={{
              textTransform: 'none',
              '&.Mui-selected': { color: tabIndicatorColor },
              ...tabStyles, // Apply custom styles
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default TabComponent
