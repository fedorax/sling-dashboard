import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {orange} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';
import Card from '@material-ui/core/Card';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import CardContent from '@material-ui/core/CardContent';
import Edit from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AppSearch from "../../../../@crema/core/SearchBar";
const demoApiList = [
  {
    key: 'listing',
    title: 'Product List Api',
    description: 'Product list search Api with aggregated filters',
    image_url: '',
    enabled: true,
  },
  {
    key: 'detail',
    title: 'Category List Api',
    description: 'List of all available categories',
    image_url: '',
    enabled: true,
  },
  {
    key: 'home',
    title: 'User Details Api',
    description: 'Logged in User Details',
    image_url: '',
    enabled: true,
  },
  {
    key: 'home',
    title: 'Product Details Api',
    description: 'Details of a single product',
    image_url: '',
    enabled: true,
  },
];

const Basic = (props) => {
  const useStyles = makeStyles((theme) => ({
    taskBtn: {
      borderRadius: theme.overrides.MuiCard.root.borderRadius,
    },
    pointer: {
      cursor: 'pointer',
    },
    minWidth100: {
      minWidth: 100,
      width: '100%',
    },
    divider: {
      marginTop: 20,
      marginBottom: 20,
    },
    textArea: {
      width: '100%',
      marginBottom: 16,
    },
    button: {
      backgroundColor: orange[500],
      color: theme.palette.primary.contrastText,
      fontWeight: Fonts.BOLD,
      paddingRight: 20,
      paddingLeft: 20,
      '&:hover, &:focus': {
        backgroundColor: orange[700],
        color: theme.palette.secondary.contrastText,
      },
    },
    basicFormTxt: {
      margin: 10,
    },
    apiCard: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      border: '1px solid #eae8e8',
      padding: '15px',
      background: '#f1f1f1',
      borderRadius: '5px',
    },
    apiCardImage: {
      height: '100%',
      padding: theme.spacing(2),
      border: '1px solid',
      borderColor: orange[100],
    },
    actionsBox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    iconRoot: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles(props);
  const {titleKey} = props;
  return (
    <>
      <AppsHeader>
        <Box fontWeight={Fonts.BOLD} component='h3'>
          Headless Api List
        </Box>
        <AppSearch
            placeholder='Search here'
            onChange={(e) => (e.target.value)}
        />
      </AppsHeader>
      <Box px={6} pb={8}>
        {demoApiList.map((apiObj) => {
          return (
            <Box key={apiObj.key} pt={6} className={classes.boxSection}>
              <Card className={classes.apiCard}>
                <Grid container>
                  <Grid item xs={2}>
                    <Box className={classes.apiCardImage}>Image</Box>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent>
                      <Box fontWeight={Fonts.BOLD} component='h3' mb={2}>
                        {apiObj.title}
                      </Box>
                      <Box fontWeight={Fonts.MEDIUM} component='h5' mb={2}>
                        {apiObj.description}
                      </Box>
                    </CardContent>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Box
                      className={classes.actionsBox}
                      display='flex'
                      alignItems='center'>
                      <Box>
                        <label htmlFor='icon-button-file'>
                          <IconButton
                            className={classes.iconRoot}
                            aria-label='upload picture'
                            component='span'>
                            <Close />
                          </IconButton>
                        </label>
                      </Box>
                      <Box>
                        <label htmlFor='icon-button-file'>
                          <IconButton
                            className={classes.iconRoot}
                            aria-label='upload '
                            component='span'>
                            <Edit />
                          </IconButton>
                        </label>
                      </Box>
                      <Box>
                        <label htmlFor='icon-button-file'>
                          <IconButton
                            className={classes.iconRoot}
                            aria-label=' picture'
                            component='span'>
                            <AccountTreeIcon />
                          </IconButton>
                        </label>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          );
        })}

        <Divider className={classes.divider} />

        <Button className={classes.button} onClick={() => {}}>
          Save
        </Button>
      </Box>
    </>
  );
};

export default Basic;