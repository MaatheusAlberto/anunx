import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core'

import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow:1,
  },
  headButton:{
    marginRight: 10,
  },
  userName: {
    marginLeft: 8,
  },
  divider: {
    margin: '8px 0'
  }
}))


export default function ButtonAppBar() {
  const classes = useStyles()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const { data: session } = useSession()

  const OpenUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" className={classes.title} >
              AnunX
            </Typography>
            <Link href={ session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" className={classes.headButton}>
                Anunciar e Vender
              </Button>
            </Link>
            {
              session? (
                <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                  {
                    session.user.image
                    ? <Avatar src={session.user.image} />
                    : <AccountCircle />
                  }
                  <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                    {session.user.name}
                  </Typography>
                </IconButton>
              ): null
            }

            <Menu
              anchorEl={anchorUserMenu}
              open={OpenUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Link href="/user/dashboard" passhref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passhref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem onClick={() => signOut({ callbackUrl:'/' })}>Sair</MenuItem>
            </Menu> 
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
