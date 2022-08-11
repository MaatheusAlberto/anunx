//Pagina inicial da area do usuario logado
import { Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default'

import Card from '../../src/components/Card'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anúncios
        </Typography>
        <Link href='/user/publish'>
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            Publicar novo anúncio
          </Button>
        </Link>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />  
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export default Home