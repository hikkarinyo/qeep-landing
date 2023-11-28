import * as yup from 'yup'

export const schemaForm = yup
    .object({
        name: yup.string().required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле'),
        companyName: yup.string().required('Обязательное поле'),
        comment: yup.string(),
    })

export const schemaCalculator = yup
    .object({
        name: yup.string().required('Обязательное поле'),
        phone: yup.string().required('Обязательное поле'),
        companyName: yup.string().required('Обязательное поле'),
        comment: yup.string(),
        salePoints: yup.number(),
    })