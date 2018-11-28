import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  }
};

class Header3 extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    Menus: [
      {
        id: 1,
        text: 'PROFIL',
        link: '/profil'
      },
      {
        id: 2,
        text: 'PELAYANAN',
        link: '/layanan'
      },
      {
        id: 3,
        text: 'PENGADUAN',
        link: '/aduan'
      },
      {
        id: 4,
        text: 'INFORMASI SPASIAL',
        link: '/informasi'
      },
      {
        id: 5,
        text: 'UNDUH',
        link: '/unduh'
      },
      {
        id: 6,
        text: 'GALERI',
        link: '/galeri'
      },
      {
        id: 7,
        text: 'KONTAK',
        link: '/kontak'
      },
      {
        id: 8,
        text: 'LOGIN',
        link: '/login'
      },
    ]
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
            <Link to="/">
              <ListItem button>
                <ListItemIcon><FontAwesomeIcon icon={faHome} /></ListItemIcon>
                <ListItemText primary="BERANDA" />
              </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
          {this.state.Menus.map(list_menu => (
            <Link to={list_menu.link}>
              <ListItem button key={list_menu.id} className="list-menu-drawer">
                {/* <ListItemIcon><FontAwesomeIcon icon={faHome} /></ListItemIcon> */}
                <ListItemText primary={list_menu.text}/>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
    return (
        <div>
            <div className="row justify-content-between navbar-drawer pl-5 pr-5">
                <div className="col-8 text-left brand-drawer">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="mt-1 mr-2 float-left"/>
                        <p className="text-brand-drawer"></p>
                    </Link>
                </div>
                <div className="col-1 pt-1 menu-drawer">
                    <Button onClick={this.toggleDrawer('left', true)}><FontAwesomeIcon icon={faBars} /></Button>
                </div>
            </div>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
            </Drawer>
        </div>
    );
  }
}

Header3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header3);
