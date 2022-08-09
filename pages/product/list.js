//Pagina de encontrar produtos
import {
    Container,
    Typography,
    Box,
    Grid,
    IconButton,
    Paper,
    InputBase,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    searchBox: {
        display:'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 2),
        marginBottom: 20,
    }
}))

const List = () => {

    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="md" >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper input="form" className={classes.searchBox}>
                            <InputBase 
                                placeholder="Ex.: Iphone 12 com garantia"
                                fullWidth
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            
                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6">
                            Anuncios
                        </Typography>
                        <Typography component="span" variant="subtitle2">
                            Encontrados 200 anuncios
                        </Typography>
                        <br /><br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={`https://source.unsplash.com/random?a=1`}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={`https://source.unsplash.com/random?a=1`}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={`https://source.unsplash.com/random?a=1`}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export default List