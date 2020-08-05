import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Box,
  AppBar,
  Tabs,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Hidden,
  ButtonGroup
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import DoneIcon from '@material-ui/icons/Done'
import { Link } from 'react-router-dom'
import c4clogo from '../temp.jpg'

const useStyles = makeStyles({
  navBarLogo: {
    height: 40,
    margin: 0
  },
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    flexGrow: 1
  },
  navlinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: '100%'
  },
  disableLinkColor: {
    color: 'inherit',
    textDecoration: 'inherit'
  },
  navlink: {
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    textTransform: 'none',
    fontWeight: 300
  }
})

const NavBar: React.FC = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Container maxWidth='md'>
        <Toolbar disableGutters>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            component={Link}
            to='/'
          >
            <img className={classes.navBarLogo} src={c4clogo} />
          </IconButton>

          <div className={classes.navlinks}>
            {/* <Box paddingX={5}>
              <Typography variant='h6'>Apply</Typography>
            </Box>
            <Box paddingRight={'2em'}>
              <Typography variant='h6'>Projects</Typography>
            </Box> */}
            <Hidden xsDown>
              <ButtonGroup
                variant='text'
                aria-label='text primary button group'
              >
                <Button component={Link} to='/apply'>
                  <Typography variant='h6' className={classes.navlink}>
                    Apply
                  </Typography>
                </Button>
                <Button component={Link} to='/projects'>
                  <Typography variant='h6' className={classes.navlink}>
                    Projects
                  </Typography>
                </Button>
                <Button component={Link} to='/jumpstart'>
                  <Typography variant='h6' className={classes.navlink}>
                    Jumpstart
                  </Typography>
                </Button>
                <Button component={Link} to='/board'>
                  <Typography variant='h6' className={classes.navlink}>
                    Board
                  </Typography>
                </Button>
              </ButtonGroup>
            </Hidden>
            <Hidden smUp>
              <IconButton
                edge='end'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
              >
                <MenuIcon fontSize='large' />
              </IconButton>

              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to='/apply'>
                  <Typography variant='body1'>Apply</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/projects'>
                  <Typography variant='body1'>Projects</Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to='/jumpstart'
                >
                  <Typography variant='body1'>Jumpstart</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/board'>
                  <Typography variant='body1'>Board</Typography>
                </MenuItem>
              </Menu>
            </Hidden>
          </div>
        </Toolbar>
        {/* <Tabs value={false} centered>
        <Box p="5px">
          <Link to="/">
            <img
              className={classes.navBarLogo}
              src={c4clogo}
              alt="Code4Community Logo"
            />
          </Link>
        </Box>
        <Tab label="Apply" component={Link} to="/apply" />
        <Tab label="Partner" component={Link} to="/partner" />
        <Tab label="Projects" component={Link} to="/projects" />
        <Tab label="Jumpstart" component={Link} to="/jumpstart" />
        <Tab label="Events" component={Link} to="/events" />
        <Tab label="Board" component={Link} to="/board" />
      </Tabs> */}
      </Container>
    </AppBar>
  )
}

export default NavBar
