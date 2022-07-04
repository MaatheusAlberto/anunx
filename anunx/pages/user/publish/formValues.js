
import * as yup from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    name:'',
    email:'',
    phone:'',
    files:[],
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um titulo maior')
        .max(100, 'Titulo muito grande')
        .required('Campo obrigatório'),
    
    category: yup.string().required('Campo obrigatório'),

    description: yup.string()
        .min(20, 'Escreva uma descrição com no minimo 20 caracteres')
        .required('Campo obrigatório'),

    price: yup.number().required('Campo obrigatório'),

    name: yup.string().required('Campo obrigatório'), 
    email: yup.string().required('Campo obrigatório')
        .email('Digite um e-mail válido'),
    phone: yup.number().required('Campo obrigatório'),
    files: yup.array().min(1,'Envie pelo menos uma foto').required("Campo obrigatório")
    
})

export {
    initialValues,
    validationSchema,
}
