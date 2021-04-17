import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Icon,
  IconButton,
  makeStyles,
  Tabs,
  Tab,
  Hidden,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import MenuIcon from '@material-ui/icons/Menu';
import { COLORS, FONTS } from '../../styles';
import useTranslation from 'next-translate/useTranslation';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import InfoBar from './InfoBar';

const useStyles = makeStyles((theme) => ({
  socialButton: {
    color: COLORS.secondaryTextColor,
    fontSize: 10,
    padding: 5,
    marginRight: 5,
    '&:hover': {
      color: COLORS.primaryTextColor,
      transform: 'scale(1.2)',
    },
  },
  tabStyle: {
    minWidth: 120,
    '&.MuiTab-textColorPrimary': {
      color: COLORS.secondaryTextColor,
      '&.Mui-selected': {
        color: COLORS.primaryTextColor,
      },
    },
    padding: 0,
    ...FONTS.body4,
  },
  menuList: {
    color: COLORS.secondaryTextColor,
    padding: 5,
    marginRight: 5,
    '&:hover': {
      color: COLORS.primaryTextColor,
    },
  },
  nested: {
    paddingLeft: theme.spacing(10),
  },
}));

const ElevateAppBar = (props) => {
  let { t } = useTranslation();
  const { window } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const homeRef = useRef();

  const handleClick = () => {
    setOpen(!open);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenuClose = (event, newValue) => {
    setOpen(false);
  };
  const menuItems = [
    {
      id: 1,
      title: t('common:home'),
      path: '#home',
      offset: '100',
    },
    {
      id: 2,
      title: t('common:aboutme'),
      path: '#aboutme',
      offset: '0',
    },
    {
      id: 3,
      title: t('common:experiences'),
      path: '#aboutme',
      offset: '0',
    },
    {
      id: 4,
      title: t('common:services'),
      path: '#aboutme',
      offset: '0',
    },
    {
      id: 5,
      title: t('common:portfolio'),
      path: '#aboutme',
      offset: '0',
    },
  ];

  const scrollItems = [];

  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  return (
    <React.Fragment>
      <AppBar
        position={trigger ? 'fixed' : 'static'}
        elevation={trigger ? 2 : 0}
        style={{
          backgroundColor: trigger ? 'white' : undefined,
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
        }}
        color={trigger ? undefined : 'transparent'}
      >
        <Toolbar
          style={{
            maxWidth: 1200,
            width: '100%',
            alignSelf: 'center',
            flex: 1,
          }}
        >
          <div style={{ width: '30vw' }}>
            <IconButton size="small" className={classes.socialButton}>
              <Icon className="fab fa-facebook-f" style={{ fontSize: 18 }} />
            </IconButton>
            <IconButton size="small" className={classes.socialButton}>
              <Icon className="fab fa-youtube" style={{ fontSize: 18 }} />
            </IconButton>
            <IconButton size="small" className={classes.socialButton}>
              <Icon className="fab fa-line" style={{ fontSize: 18 }} />
            </IconButton>
          </div>
          <Hidden smDown>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Scrollspy
                items={scrollItems}
                currentClassName="is-current"
                style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}
              >
                {menuItems.map((menu, index) => {
                  return (
                    // <li key={menu.id} className={'menu'}>
                    <AnchorLink
                      href={menu.path}
                      offset={menu.offset}
                      key={menu.id}
                      className="menu"
                      style={{ width: 100 }}
                    >
                      <Typography style={{ textAlign: 'center' }}>
                        {menu.title}
                      </Typography>
                    </AnchorLink>
                    // </li>
                  );
                })}
              </Scrollspy>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div style={{ flex: 1 }} />

            <div style={{ zIndex: 1 }}>
              <IconButton
                size="small"
                className={classes.socialButton}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <InfoBar />
            <List component="div" disablePadding>
              {menuItems.map((menu, item) => {
                return (
                  <AnchorLink
                    href={menu.path}
                    offset={menu.offset}
                    onClick={(e) => {
                      handleChange(e, 0);
                      handleMenuClose();
                    }}
                  >
                    <ListItem className={classes.nested} key={menu.id}>
                      <ListItemText
                        primary={menu.title}
                        className={classes.menuList}
                      />
                    </ListItem>
                  </AnchorLink>
                );
              })}
            </List>
          </Collapse>
        </Hidden>
      </AppBar>
    </React.Fragment>
  );
};

export default ElevateAppBar;
