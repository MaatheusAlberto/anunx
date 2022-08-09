
import * as yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf:'',
}


const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Campo obrigatório'),
    email: yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),
    password: yup.string()
        .min(6, 'Minímo de 6 caracteres')
        .required('Campo obrigatório'),
    passwordConf: yup.string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password'), null], 'As senha precisam ser iguais')
})

export {
    initialValues,
    validationSchema,
}