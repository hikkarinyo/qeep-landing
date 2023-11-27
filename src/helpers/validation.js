import * as yup from 'yup'

export const schema = yup
    .object({
        name: yup.string().required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле'),
        companyName: yup.string().required('Обязательное поле'),
        comment: yup.string(),
    })
