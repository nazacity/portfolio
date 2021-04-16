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
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                TabIndicatorProps={{
                  style: { backgroundColor: COLORS.primary },
                }}
                className={classes.tabsStyle}
              >
                <AnchorLink
                  ref={homeRef}
                  href="#home"
                  style={{ textDecoration: 'none' }}
                >
                  <Tab
                    label={t('common:home')}
                    className={classes.tabStyle}
                    value={0}
                  />
                </AnchorLink>

                <AnchorLink href="#aboutme">
                  <Tab
                    label={t('common:aboutme')}
                    className={classes.tabStyle}
                    value={1}
                  />
                </AnchorLink>
                <Tab
                  label={t('common:experiences')}
                  className={classes.tabStyle}
                  value={2}
                />
                <Tab
                  label={t('common:services')}
                  className={classes.tabStyle}
                  value={3}
                />
                <Tab
                  label={t('common:portfolio')}
                  className={classes.tabStyle}
                  value={4}
                />
              </Tabs>
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
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={t('common:home')}
                  className={classes.menuList}
                  onClick={(e) => {
                    handleChange(e, 0);
                    handleMenuClose();
                  }}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={t('common:aboutme')}
                  className={classes.menuList}
                  onClick={(e) => {
                    handleChange(e, 1);
                    handleMenuClose();
                  }}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={t('common:experiences')}
                  className={classes.menuList}
                  onClick={(e) => {
                    handleChange(e, 2);
                    handleMenuClose();
                  }}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={t('common:services')}
                  className={classes.menuList}
                  onClick={(e) => {
                    handleChange(e, 3);
                    handleMenuClose();
                  }}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={t('common:portfolio')}
                  className={classes.menuList}
                  onClick={(e) => {
                    handleChange(e, 4);
                    handleMenuClose();
                  }}
                />
              </ListItem>
            </List>
          </Collapse>
        </Hidden>
      </AppBar>
    </React.Fragment>
  );
};

export default ElevateAppBar;
