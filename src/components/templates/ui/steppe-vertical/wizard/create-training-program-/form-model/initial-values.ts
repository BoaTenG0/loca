import checkoutFormModel from './preview-form-model'
const {
  formField: { title, description, requirement, lessonModuleOne, lessonModuleTwo, learn, cover, uploadOne, uploadTwo },
} = checkoutFormModel

export default {
  [title.name]: '',
  [description.name]: '',
  [requirement.name]: [''],
  [lessonModuleOne.name]: '',
  [lessonModuleTwo.name]: '',
  [learn.name]: [''],
  [cover.name]: '',
  [uploadOne.name]: '',
  [uploadTwo.name]: '',
}
