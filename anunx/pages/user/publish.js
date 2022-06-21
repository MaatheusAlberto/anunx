//Página de publicações
import { Box, Container, Select, TextField, Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles ((theme) => ({
    container: {
        padding: theme.spacing(8, 0 , 6)
    },
    boxContainer: {
        paddingBottom:theme.spacing(3),
        
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        boxShadow: '0 3px 5px 2px rgba(195,195,195,0.3)',
    }

}))

const Publish = () => {
    const classes = useStyles()

    return (
        <TemplateDefault> 
            
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Titulo do Anúncio
                    </Typography>
                    <TextField 
                        label="Ex.: Bicicleta aro 18 com garantia"
                        size="small"
                        fullWidth
                    />
                    <br /> <br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                    </Typography>
                    <Select
                    native
                    value=""
                    fullWidth
                    onChange={() => {}}
                    inputProps={{
                        name: 'age',    
                    }}
                    >
                        <option value=""> Selecione </option>
                        <option value={1}> Bebê e Criança </option>
                        <option value={2}> Agricultura </option>
                        <option value={3}> Moda </option>
                        <option value={4}> Carros, Motos e Barcos </option>
                        <option value={5}> Lazer </option>
                        <option value={6}> Moveis </option>
                        <option value={7}> Imóveis </option>
                        <option value={8}> Equipamentos e Ferramentas </option>
                        <option value={9}> Celulares e Tablets </option>
                        <option value={10}> Outros </option>
                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box} >
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box} >
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Escreva os detalhes do que está vendendo
                    </Typography>

                    <TextField
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box} >
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer} >
                <Box align="right" >
                    <Button variant="contained" color="primary">
                        Publicar Anúncio
                    </Button>
                </Box>
            </Container>

        </TemplateDefault>
    )
}

export default Publish