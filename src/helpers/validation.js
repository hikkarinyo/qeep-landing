import * as yup from 'yup'

export const schemaClientForm = yup
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

export const schemaCandidateForm = yup
    .object({
            name: yup.string().required('Обязательное поле'),
            email: yup.string().required('Обязательное поле'),
            telegram: yup.string(),
            comment: yup.string().required('Обязательное поле'),
    })
