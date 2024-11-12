import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { InputField } from '../form-fields'
import { DropzoneArea } from 'material-ui-dropzone'
import { Stack } from '@mui/material'
import { useStyles } from '../styles'
import { useField, useFormikContext } from 'formik'

export default function TrainingTitleForm(props: { formField: { title: any; description: any; cover: any } }) {
  const classes = useStyles()
  const { setFieldValue } = useFormikContext()
  const {
    formField: { title, description, cover },
  } = props
  return (
    <Stack sx={{ p: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={title.name} label={title.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={description.name} label={description.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1.5} alignItems="center">
            <DropzoneArea
              acceptedFiles={['image/*']}
              maxFileSize={5000000}
              dropzoneText={'Drag and drop for upload photos or videos or Choose files '}
              showAlerts={['error', 'info']}
              showPreviews
              showPreviewsInDropzone={false}
              useChipsForPreview
              previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
              previewChipProps={{ classes: { root: classes.previewChip } }}
              previewText="Selected files"
              onChange={(files) => {
                setFieldValue(cover.name, files)
                console.log('Files:', files)
              }}
              onDropRejected={(files) => {
                alert('File rejected: ' + files[0].name)
              }}
              dropzoneClass="custom-dropzone"
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
