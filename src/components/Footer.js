import Link from "next/link"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        }
    }
}))

const Footer = () => {

    const classes = useStyles()

    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={3} >
                <Grid item xs={6} sm={3}>
                    <Box align="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">
                                Ajuda e Contato
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box align="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">
                                Dicas de Segurança
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box align="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">
                                Anunciar e Vender
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box align="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">
                                Plano Profissional
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer