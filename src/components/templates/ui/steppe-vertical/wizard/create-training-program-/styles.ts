import { createStyles, makeStyles } from '@mui/material/styles'

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
)

export default makeStyles((theme: { spacing: (arg0: number, arg1: number | undefined, arg2: number | undefined) => any }) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3, 0, 0),
    marginLeft: theme.spacing(1, 0, 0),
    borderRadius: '20px',
    textTransform: 'none',
  },
  wrapper: {
    margin: theme.spacing(1, 0, 0),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}))
