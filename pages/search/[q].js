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
import { formatCurrency } from '../../src/utils/currency'
import slugify from 'slugify'
import Link from 'next/link'

import ProductsModel from '../../src/models/products'

const useStyles = makeStyles((theme) => ({
    productLink: {
        textDecoration: 'none !important'
    },
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

const List = ({ products }) => {

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
                            Encontrados {products.length} anuncios
                        </Typography>
                        <br /><br />
                        <Grid container spacing={4}>
                            {
                                products.map(product => {
                                    const category = slugify(product.category).toLocaleLowerCase()
                                    const title = slugify(product.title).toLocaleLowerCase()

                                    return (
                                        <Grid key={product._id} item xs={12} sm={6} md={4}>
                                            <Link href={`/${category}/${title}/${product._id}`} passHref>
                                                <a className={classes.productLink}>
                                                    <Card
                                                        image={`/uploads/${product.files[0].name}`}
                                                        title={product.title}
                                                        subtitle={formatCurrency(product.price)}
                                                    />
                                                </a>
                                            </Link>
                                        </Grid> 
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ query }) {

    const { q } = query

    const products = await ProductsModel.find({
        $or: [
          { 
            title: { 
              $regex: q,
              $options: 'i' 
            } 
          },
          { 
            description: { 
              $regex: q,
              $options: 'i' 
            } 
          }
        ]
      })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }

}

export default List