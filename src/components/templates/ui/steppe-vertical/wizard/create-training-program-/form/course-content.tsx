import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { InputField } from '../form-fields'
import { Stack } from '@mui/material'
import { DropzoneArea } from 'material-ui-dropzone'
import { useStyles } from '../styles'
import { useField, useFormikContext } from 'formik'

export default function CourseContentForm(props: {
  formField: { lessonModuleOne: any; lessonModuleTwo: any; uploadOne: any; uploadTwo: any }
}) {
  const classes = useStyles()
  const { setFieldValue } = useFormikContext()
  const {
    formField: { lessonModuleOne, lessonModuleTwo, uploadOne, uploadTwo },
  } = props
  return (
    <Stack sx={{ p: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={lessonModuleOne.name} label={lessonModuleOne.label} fullWidth />
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
                setFieldValue(uploadOne.name, files)
              }}
              onDropRejected={(files) => {
                alert('File rejected: ' + files[0].name)
              }}
              dropzoneClass="custom-dropzone"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <InputField name={lessonModuleTwo.name} label={lessonModuleTwo.label} fullWidth />
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
                setFieldValue(uploadTwo.name, files)
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
