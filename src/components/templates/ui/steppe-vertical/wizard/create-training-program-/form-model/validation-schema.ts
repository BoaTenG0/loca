import * as Yup from 'yup'
import checkoutFormModel from './preview-form-model'
const {
  formField: { title, description, requirement, lessonModuleOne, lessonModuleTwo, learn, cover, uploadOne, uploadTwo },
} = checkoutFormModel

export default [
  Yup.object().shape({
    [title.name]: Yup.string().required(`${title.requiredErrorMsg}`),
    [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
    // [cover.name]: Yup.string().required(`${cover.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    // [learn.name]: Yup.string().required(`${learn.requiredErrorMsg}`),
    [learn.name]: Yup.array().of(Yup.string().required(`${learn.requiredErrorMsg}`)),
  }),
  Yup.object().shape({
    [requirement.name]: Yup.array().of(Yup.string().required(`${requirement.requiredErrorMsg}`)),
  }),
  Yup.object().shape({
    [lessonModuleOne.name]: Yup.string().required(`${lessonModuleOne.requiredErrorMsg}`),
    [lessonModuleTwo.name]: Yup.string().required(`${lessonModuleTwo.requiredErrorMsg}`),
    // [uploadOne.name]: Yup.string().required(`${uploadOne.requiredErrorMsg}`),
    // [uploadTwo.name]: Yup.string().required(`${uploadTwo.requiredErrorMsg}`),
  }),
]
