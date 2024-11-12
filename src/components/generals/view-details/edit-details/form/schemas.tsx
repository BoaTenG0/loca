import * as Yup from 'yup'
import _ from 'lodash'

export const Schema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string().max(255).required('Password is required'),
  resetEmail: Yup.string().email('Must be a valid email').max(255).required('Reset Email is required'),
  name: Yup.string().required('Farmer Name is required'),
  title: Yup.string().required('Title is required'),
  workLocation: Yup.string().required('Work Location is required'),
  startTime: Yup.string().required('Start Time is required'),
  endTime: Yup.string().required('End Time is required'),
  plotName: Yup.string().required('Plot Name is required'),
  cropType: Yup.string().required('Crop Type is required'),
  address: Yup.string(),
  size: Yup.number().required('Plot Size is required'),
  location: Yup.string().required('Location is required'),
  whatYouLearn: Yup.string().required('What you will learn is required'),
  date: Yup.date().required('Sowing Date is required'),
  workDate: Yup.date().required('Work Date is required'),
  trainingTitle: Yup.string().required('Training Title is required'),
  requirement: Yup.string().required('Requirement is required'),
  trainingDescription: Yup.string().required('Training Description is required'),
  moduleOne: Yup.string().required('Lesson Module 1 is required'),
  moduleTwo: Yup.string().required('Lesson Module 2 is required'),
  addRoleTitle: Yup.string().required('Title is required'),
  addRoleDescription: Yup.string().required('Description is required'),
  uploadedFiles: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('File name is required'),
        size: Yup.number().max(5000000, 'File size must be less than 5MB').required('File size is required'),
        type: Yup.string()
          .matches(/image\/(jpeg|jpg|png|gif)/, 'Only image files are allowed (jpeg, jpg, png, gif)')
          .required('File type is required'),
      })
    )
    .required('At least one file is required')
    .min(1, 'At least one file is required'),
  uploadOne: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('File name is required'),
        size: Yup.number().max(5000000, 'File size must be less than 5MB').required('File size is required'),
        type: Yup.string()
          .matches(/image\/(jpeg|jpg|png|gif)/, 'Only image files are allowed (jpeg, jpg, png, gif)')
          .required('File type is required'),
      })
    )
    .required('At least one file is required')
    .min(1, 'At least one file is required'),
  uploadTwo: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('File name is required'),
        size: Yup.number().max(5000000, 'File size must be less than 5MB').required('File size is required'),
        type: Yup.string()
          .matches(/image\/(jpeg|jpg|png|gif)/, 'Only image files are allowed (jpeg, jpg, png, gif)')
          .required('File type is required'),
      })
    )
    .required('At least one file is required')
    .min(1, 'At least one file is required'),
})

export const getInitialValues = (account: any) => {
  const editDetails = {
    name: '',
    plotName: '',
    cropType: '',
    size: '',
    location: '',
    date: '',
  }

  if (account) {
    return _.merge({}, editDetails, account)
  }

  return editDetails
}
export const getInitialValuesForRole = (role: any) => {
  const details = {
    addRoleTitle: '',
    addRoleDescription: '',
    assignedUsers: [],
  }

  if (role) {
    return _.merge({}, details, role)
  }

  return details
}

export const validationSchema = Yup.object().shape({
  addRoleTitle: Yup.string().required('Title is required'),
  addRoleDescription: Yup.string().required('Description is required'),
  assignedUsers: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        name: Yup.string().required(),
        image: Yup.string().url().required(),
      })
    )
    .min(1, 'At least one user must be assigned'),
})

// export const CreateWorkShopValues = {
// }

export const initialValues = {
  title: '',
  workLocation: '',
  workDate: '',
  startTime: '',
  endTime: '',
  email: '',
  password: '',
  submit: undefined,
  resetEmail: '',
}
