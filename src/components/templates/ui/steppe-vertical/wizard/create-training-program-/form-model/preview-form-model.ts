import { FormValues } from '../form/what-you-learn'

export default {
  formId: 'checkoutForm',
  formField: {
    title: {
      name: 'title',
      label: 'Title',
      requiredErrorMsg: 'Title is required',
    },
    description: {
      name: 'description',
      label: 'Description',
      requiredErrorMsg: 'Description is required',
    },
    cover: {
      name: 'cover',
      label: 'Add cover',
      requiredErrorMsg: 'Cover is required',
    },
    learn: {
      // name: 'learn',
      name: 'learn' as keyof FormValues,
      label: 'What you will learn',
      requiredErrorMsg: 'What to learn is required',
    },
    requirement: {
      name: 'requirement' as keyof FormValues,
      label: 'Requirement',
      requiredErrorMsg: 'Requirement is required',
    },
    lessonModuleOne: {
      name: 'lessonModuleOne',
      label: 'Lesson Module 1',
      requiredErrorMsg: 'Lesson Module is required',
    },
    lessonModuleTwo: {
      name: 'lessonModuleTwo',
      label: 'Lesson Module 2',
      requiredErrorMsg: 'Lesson Module is required',
    },
    uploadOne: {
      name: 'uploadOne',
      label: 'Upload',
      requiredErrorMsg: 'File Upload is required',
    },
    uploadTwo: {
      name: 'uploadTwo',
      label: 'Upload',
      requiredErrorMsg: 'File Upload is required',
    },
  },
}
