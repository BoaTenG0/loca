import React from 'react'
import { IconButton, Tooltip, Stack } from '@mui/material'

interface ButtonConfig {
  icon: React.ReactNode
  tooltip: string
  onClick: (e: React.MouseEvent) => void
  color?: 'primary' | 'secondary' | 'error' | 'inherit' | 'default' | 'info' | 'success' | 'warning'
}

interface IconButtonGroupProps {
  contents: ButtonConfig[]
  mode?: 'dark' | 'light'
  tooltipBgColorDark?: string
  tooltipBgColorLight?: string
}

const IconButtonGroup = ({ contents, mode = 'light', tooltipBgColorDark = '#fff', tooltipBgColorLight = '#333' }: IconButtonGroupProps) => {
  const tooltipBgColor = mode === 'dark' ? tooltipBgColorDark : tooltipBgColorLight

  return (
    <Stack direction="row" alignItems="center" spacing={-1}>
      {contents.map((content, index) => (
        <Tooltip
          key={index}
          title={content.tooltip}
          slotProps={{
            tooltip: {
              sx: {
                backgroundColor: tooltipBgColor,
                opacity: 0.9,
              },
            },
          }}
        >
          <IconButton
            color={content.color || 'default'}
            onClick={(e) => {
              e.stopPropagation()
              content.onClick(e)
            }}
          >
            {content.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  )
}

export default IconButtonGroup

// usage
// const contentConfigs = [
//     {
//       icon: <Edit />,
//       tooltip: "Edit",
//       color: "primary",
//       onClick: handleEditClick,
//     },
//     {
//       icon: <Eye />,
//       tooltip: "View",
//       color: "secondary",
//       onClick: handleViewClick,
//     },
//   ];
//  <IconButtonGroup contents={contentConfigs} mode="dark" tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />;
