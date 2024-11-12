import { Avatar, Box, Stack, Tooltip } from '@mui/material'
import { useState } from 'react'

interface AvatarGroupProps {
  avatars: {
    alt: string
    src: string
  }[]
  max: number
  componentsProps?: {
    additionalAvatar?: {
      onMouseEnter?: () => void
      onMouseLeave?: () => void
    }
  }
}

const AvatarGroup = ({ avatars, max, componentsProps = {} }: AvatarGroupProps) => {
  const [show, setShow] = useState(false)

  const handleMouseEnter = () => {
    setShow(true)
    componentsProps.additionalAvatar?.onMouseEnter?.()
  }

  const handleMouseLeave = () => {
    setShow(false)
    componentsProps.additionalAvatar?.onMouseLeave?.()
  }

  const displayedAvatars = avatars.slice(0, max)
  const additionalAvatars = avatars.slice(max)

  return (
    <Box>
      <Stack direction="row" spacing={-1.25}>
        {displayedAvatars.map((avatar, index) => (
          <Avatar
            key={index}
            alt={avatar.alt}
            src={avatar.src}
            sx={{ width: 32, height: 32, fontSize: '0.875rem', bgcolor: 'primary.lighter', color: 'primary.main' }}
          />
        ))}

        {additionalAvatars.length > 0 && (
          <Tooltip
            open={show}
            placement="top"
            title={
              <Stack direction="row" spacing={1} sx={{ backgroundColor: 'transparent' }}>
                {additionalAvatars.map((avatar, index) => (
                  <Avatar key={index} alt={avatar.alt} src={avatar.src} />
                ))}
              </Stack>
            }
          >
            <Avatar
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{ width: 32, height: 32, fontSize: '0.875rem', bgcolor: 'primary.lighter', color: 'primary.main' }}
            >
              +{additionalAvatars.length}
            </Avatar>
          </Tooltip>
        )}
      </Stack>
    </Box>
  )
}

export default AvatarGroup
