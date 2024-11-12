// PermissionSection.tsx
import { Box, List, ListItem, Typography, Checkbox, Stack, Grid2 } from '@mui/material'
import InputLabelTemplate from '@/components/templates/ui/input/inputLabel'
import { useState } from 'react'

interface PermissionBoxProps {
  label: string
  permissions: string[]
  defaultChecked?: string[]
}

const PermissionBox = ({ label, permissions, defaultChecked = [] }: PermissionBoxProps) => {
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>(defaultChecked)

  const handleCheckboxChange = (permission: string) => {
    setCheckedPermissions((prev) => (prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission]))
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        border: '1px solid #ccc',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        padding: 3,
      }}
    >
      <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
        <InputLabelTemplate
          label={label}
          className="my-class text-black"
          variant="standard"
          sxOverrides={{
            flexShrink: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        />
        <List disablePadding sx={{ mt: 0, width: '100%' }} style={{ fontFamily: 'Poppins' }}>
          {permissions.map((permission, index) => (
            <ListItem
              key={index}
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: 1,
              }}
              style={{ marginTop: -17 }}
            >
              <Typography style={{ fontFamily: 'Poppins', fontWeight: 300 }}>{permission}</Typography>
              {/* <Checkbox /> */}
              <Checkbox checked={checkedPermissions.includes(permission)} onChange={() => handleCheckboxChange(permission)} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  )
}

interface PermissionSectionProps {
  userPermissions: string[]
  plotPermissions: string[]
  servicePermissions: string[]
  hideTitle?: boolean
  defaultCheckedPermissions?: {
    userPermissions?: string[]
    plotPermissions?: string[]
    servicePermissions?: string[]
  }
}

const PermissionSection = ({
  userPermissions,
  plotPermissions,
  servicePermissions,
  hideTitle,
  defaultCheckedPermissions = {},
}: PermissionSectionProps) => {
  // const sections = [
  //   { label: 'User Managements', permissions: userPermissions },
  //   { label: 'Plot Managements', permissions: plotPermissions },
  //   { label: 'Service Requests', permissions: servicePermissions },
  // ]

  const sections = [
    {
      label: 'User Managements',
      permissions: userPermissions,
      defaultChecked: defaultCheckedPermissions.userPermissions || [],
    },
    {
      label: 'Plot Managements',
      permissions: plotPermissions,
      defaultChecked: defaultCheckedPermissions.plotPermissions || [],
    },
    {
      label: 'Service Requests',
      permissions: servicePermissions,
      defaultChecked: defaultCheckedPermissions.servicePermissions || [],
    },
  ]

  return (
    <div className="w-full pt-7 pl-7">
      <Stack width="100%" spacing={1} alignItems="flex-start">
        {!hideTitle && <InputLabelTemplate label="Set Permissions" className="my-class" variant="standard" />}
        {sections.map((section, index) => (
          <PermissionBox key={index} label={section.label} permissions={section.permissions} defaultChecked={section.defaultChecked} />
        ))}
      </Stack>
    </div>
  )
}

export default PermissionSection
