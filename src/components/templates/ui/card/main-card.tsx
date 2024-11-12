import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react'
// material-ui
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, CardHeader, Divider, Typography, SxProps, Theme } from '@mui/material'

// ==============================|| CUSTOM - MAIN CARD ||============================== //
interface MainCardProps<T = any> {
  // Default type T is set to any
  border?: boolean
  boxShadow?: boolean
  children?: ReactNode
  subheader?: ReactNode | string
  content?: boolean
  contentSX?: SxProps<Theme>
  darkTitle?: boolean
  divider?: boolean
  elevation?: number
  height?: number
  secondary?: ReactNode | string | object
  shadow?: string
  sx?: SxProps<Theme>
  title?: ReactNode | string | object
  modal?: boolean
  codeHighlight?: boolean
  codeString?: string
  [others: string]: boolean | string | number | object | ReactNode | T // Adjust as needed
}

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = true,
      boxShadow = true,
      children,
      subheader,
      content = true,
      contentSX = {},
      darkTitle,
      divider = true,
      elevation,
      secondary,
      shadow = '1',
      sx = {},
      title,
      codeHighlight = false,
      codeString,
      modal = false,
      height = 500,
      ...others
    },
    ref
  ) => {
    const theme = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
      if (cardRef.current) {
        const scrollPosition = cardRef.current.scrollTop
        console.log('Scroll position:', scrollPosition)
        setScrolled(scrollPosition > 64)
      }
    }

    useEffect(() => {
      const cardElement = cardRef.current
      if (cardElement) {
        cardElement.addEventListener('scroll', handleScroll)
      }
      return () => {
        if (cardElement) {
          cardElement.removeEventListener('scroll', handleScroll)
        }
      }
    }, [])

    const headerSX = {
      p: 2.5,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: scrolled ? theme.palette.background.paper : 'transparent',
      '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' },
    }

    return (
      <div style={{ position: 'relative' }}>
        <Card
          elevation={elevation || 0}
          ref={cardRef}
          {...others}
          sx={{
            position: 'relative',
            border: border ? '1px solid' : 'none',
            borderRadius: 5,
            height: height,
            overflow: 'auto',
            borderColor: theme.palette.divider,
            ...(boxShadow && { boxShadow: shadow }),
            ...(codeHighlight && {
              '& pre': {
                m: 0,
                p: '12px !important',
                fontFamily: theme.typography.fontFamily,
                fontSize: '0.75rem',
              },
            }),
            ...(modal && {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: `calc(100% - 50px)`, sm: 'auto' },
              '& .MuiCardContent-root': {
                overflowY: 'auto',
                minHeight: 'auto',
                maxHeight: `calc(100vh - 200px)`,
              },
            }),
            ...sx,
          }}
          className="no-scrollbar"
        >
          {/* Card header and action */}
          {!darkTitle && title && (
            <CardHeader
              sx={headerSX}
              titleTypographyProps={{ variant: 'subtitle1' }}
              title={title}
              action={secondary}
              subheader={subheader}
            />
          )}
          {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}
          {/* Content & header divider */}
          {content && <CardContent sx={{ px: 1 }}>{children}</CardContent>}
          {!content && children}
          {/* Card footer - clipboard & highlighter */}
          {codeString && (
            <>
              <Divider sx={{ borderStyle: 'dashed' }} />
              {/* <Typography variant="h4">Plots</Typography> */}
            </>
          )}
        </Card>
      </div>
    )
  }
)

export default MainCard
