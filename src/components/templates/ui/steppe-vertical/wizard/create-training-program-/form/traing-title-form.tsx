import React from 'react'
import { Grid, Typography } from '@mui/material'
import { InputField } from '../form-fields'
import { Stack } from '@mui/material'
import { useStyles } from '../styles'
import { useField, useFormikContext } from 'formik'
import { useDropzone } from 'react-dropzone'

export default function TrainingTitleForm(props: { formField: { title: any; description: any; cover: any } }) {
  const { setFieldValue } = useFormikContext()
  const {
    formField: { title, description, cover },
  } = props

  const onDrop = (acceptedFiles: File[]) => {
    setFieldValue(cover.name, acceptedFiles)
    console.log('Files:', acceptedFiles)
  }

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxSize: 5000000,
    multiple: true,
  })

  return (
    <Stack sx={{ p: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={title.name} label={title.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={description.name} label={description.label} fullWidth />
        </Grid>
        {/* <Grid item xs={12}>
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
        </Grid> */}

        <Grid item xs={12}>
          <Stack spacing={1.5} alignItems="center">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 w-full cursor-pointer text-center h-40 ${
                isDragActive ? 'bg-green-100 border-green-500' : 'bg-gray-50 border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              <Typography variant="body1" className="text-gray-700">
                {isDragActive ? 'Drop files here...' : 'Drag and drop files here, or click to select files'}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                Accepted file types: Images (Max size: 5MB)
              </Typography>
            </div>

            {/* Preview of Selected Files */}
            {acceptedFiles.length > 0 && (
              <div className="w-full mt-4 space-y-2">
                <Typography variant="body2" className="font-semibold">
                  Selected Files:
                </Typography>
                {acceptedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-lg shadow-sm">
                    <Typography variant="body2">{file.name}</Typography>
                    <Typography variant="caption" className="text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </Typography>
                  </div>
                ))}
              </div>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
