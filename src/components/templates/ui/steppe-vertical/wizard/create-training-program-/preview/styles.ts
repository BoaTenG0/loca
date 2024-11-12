import { makeStyles } from '@mui/material/styles';

export const useStyles = makeStyles((theme: { spacing: (arg0: number, arg1: number) => any; }) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2, 0),
  },
}));