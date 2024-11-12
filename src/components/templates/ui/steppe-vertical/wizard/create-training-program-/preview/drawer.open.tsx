import { Box, Stack, Typography } from '@mui/material'
import { Magicpen, Play } from 'iconsax-react'
import { FaCheck } from 'react-icons/fa'
import { RiFileListFill } from 'react-icons/ri'

const DrawerOpen = ({ formValues }: { formValues: any }) => {
  const { title, description, learn, lessonModuleOne, lessonModuleTwo, requirement, cover, uploadTwo, uploadOne } = formValues
  console.log('🚀 ~ DrawerOpen ~ formValues:', formValues)

  return (
    <Stack spacing={5} padding={2} sx={{ position: 'relative' }}>
      {cover && cover.length > 0 && (
        <img src={URL.createObjectURL(cover[0])} alt="Uploaded Cover" style={{ width: '100%', height: '150px' }} />
      )}
      <Typography gutterBottom sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography gutterBottom sx={{ fontFamily: 'Poppins', color: '#808080' }}>
        {description}
      </Typography>
      <Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <Box
            sx={{
              border: '2px solid #199675',
              borderRadius: '4px',
              padding: '8px',
              display: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Magicpen size="20" color="#199675" />
          </Box>
          <Typography style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>What you will learn</Typography>
        </Stack>
        <Stack direction="column" alignItems="flex-start" gap={2} paddingTop={3}>
          {learn?.map((item: string, index: number) => (
            <Stack key={index} direction="row" alignItems="center" gap={2}>
              <FaCheck />
              <Typography gutterBottom style={{ fontFamily: 'Poppins' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <Box
            sx={{
              border: '2px solid #199675',
              borderRadius: '4px',
              padding: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <RiFileListFill size="20" color="#199675" />
          </Box>
          <Typography style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Requirement</Typography>
        </Stack>
        {/* <Stack direction="row" alignItems="center" gap={2} paddingTop={3}>
          <FaCheck />
          <Typography gutterBottom style={{ fontFamily: 'Poppins' }}>{`${requirement}`}</Typography>
        </Stack> */}
        <Stack direction="column" alignItems="flex-start" gap={2} paddingTop={3}>
          {requirement?.map((item: string, index: number) => (
            <Stack key={index} direction="row" alignItems="center" gap={2}>
              <FaCheck />
              <Typography gutterBottom style={{ fontFamily: 'Poppins' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" alignItems="center" gap={2} marginBottom={3}>
          <Box
            sx={{
              border: '2px solid #199675',
              borderRadius: '4px',
              padding: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <RiFileListFill size="20" color="#199675" />
          </Box>
          <Typography style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Course Content</Typography>
        </Stack>
        <div
          style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            width: '100%',
            height: 60,
            backgroundColor: '#F2F2F2',
            padding: 20,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <Typography style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>01</Typography>
            <Typography style={{ fontFamily: 'Poppins', color: '#199675' }}>{`${lessonModuleOne}`}</Typography>
          </Stack>

          <Play color="#199675" />
        </div>
        {/* <Typography gutterBottom style={{ fontFamily: 'Poppins' }}>{`${lessonModuleTwo}`}</Typography> */}
      </Stack>
      {/* {uploadTwo && uploadTwo.length > 0 && (
        <img src={URL.createObjectURL(uploadTwo[0])} alt="Uploaded Cover" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      )}
      {uploadOne && uploadOne.length > 0 && (
        <img src={URL.createObjectURL(uploadOne[0])} alt="Uploaded Cover" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      )} */}
    </Stack>
  )
}
export default DrawerOpen
