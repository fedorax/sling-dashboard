import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
// import AddNewTask from '../AddNewTask';
import Scrollbar from '../../../@crema/core/Scrollbar';
import {Fonts} from '../../../shared/constants/AppEnums';
import {makeStyles} from '@material-ui/core/styles';
import AppList from '../../../@crema/core/AppList';
import ListEmptyResult from '../../../@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../@crema/core/Skeleton/SidebarListSkeleton';
import AppsSideBarFolderItemCustom from '../../../@crema/core/AppsSideBarFolderItem/custom';

export const folderList = [
  {id: 120, name: 'Basic', alias: 'basic', icon: 'border_color'},
  {id: 121, name: 'Layout', alias: 'layout', icon: 'view_quilt'},
  // {id: 122, name: 'Routes', alias: 'routes', icon: 'mail'},
  {id: 123, name: 'Preview', alias: 'preview', icon: 'pageview-icon'},
  {id: 124, name: 'Data', alias: 'data', icon: 'storage-icon'},
  {id: 125, name: 'Guide', alias: 'guide', icon: 'help'},
];

const useStyle = makeStyles((theme) => ({
  appsSidebar: {
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '12rem',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15rem',
    },
  },
  btnRoot: {
    width: '100%',
    fontSize: 16,
    fontWeight: Fonts.MEDIUM,
    textTransform: 'capitalize',
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
    },
  },
}));

const PagesSideBar = ({basePath}) => {
  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const classes = useStyle();

  return (
    <>
      <Scrollbar className='scroll-app-sidebar'>
        <Box p={0} m={0} style={{textAlign: 'center'}}>
          <Box clone>
            <List component='nav' aria-label='main task folders'>
              <AppList
                pageClasses={classes}
                data={folderList}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={true}
                    placeholder={<SidebarPlaceholder />}
                  />
                }
                renderRow={(item) => (
                  <AppsSideBarFolderItemCustom
                    key={item.id}
                    item={item}
                    path={`${basePath}/${item.alias}`}
                  />
                )}
              />
            </List>
          </Box>

          {/*<Box component='h5' mt={{xs: 4, xl: 5}} fontWeight={Fonts.MEDIUM}>*/}
          {/*  Labels*/}
          {/*</Box>*/}

          {/*<List component='nav' aria-label='main mailbox folders'>*/}
          {/*  <AppList*/}
          {/*    data={labelList}*/}
          {/*    ListEmptyComponent={*/}
          {/*      <ListEmptyResult*/}
          {/*        loading={true}*/}
          {/*        placeholder={<SidebarPlaceholder />}*/}
          {/*      />*/}
          {/*    }*/}
          {/*    renderRow={(label) => <LabelItem key={label.id} label={label} />}*/}
          {/*  />*/}
          {/*</List>*/}
        </Box>
      </Scrollbar>

      {isAddTaskOpen ? (
        <>
          {/*// <AddNewTask*/}
          {/*//   isAddTaskOpen={isAddTaskOpen}*/}
          {/*//   onCloseAddTask={onCloseAddTask}*/}
          {/*// />*/}
        </>
      ) : null}
    </>
  );
};

export default PagesSideBar;
