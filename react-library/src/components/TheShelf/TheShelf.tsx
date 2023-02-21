import React, {useState}  from 'react'
import { useGetData } from '../../custom-hooks'
import { Link } from 'react-router-dom';
import {Paper} from '@material-ui/core';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText, 
    DialogTitle  ,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";
import { DataTable } from '../../components/DataTable';
import { TheShelfForm } from '../TheShelfForm' 

interface LibraryProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    main:{
        display:'flex',
        flexDirection:'column',
        backgroundImage: `#FF3CAC; background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Courier New, Courier, monospace",
    },
    h3:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display:'flex',
        flexDirection: 'column',
        color: 'purple',
        textDecoration: 'none',
        backgroundColor: 'lavender',
        width: '60%',
        justifyContent:'center',
        alignItems: 'center',
    },
    logo:{
        margin:'0 0 0 0 0.45em',
        diplsay: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:' center',
    },
    logo_a:{
        color: '#4ef3b4',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    logo_navigation:{
        listStyle: 'none',
        terxtTransform: 'uppercase',
        textDecoration:'none',
    },
    root:{
        display: 'flex',
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    appBar:{
        transition: theme.transitions.create(['margin','width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% -${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'],{
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton:{
        msrginRight: theme.spacing(2),
    },
    hide:{
        display:'none',
    },
    drawer:{
        width: drawerWidth,
        flexShrink:0, 
    },
    drawerPaper:{
        width: drawerWidth,
    },
    drawerHeader:{
        display: 'flex',
        alignItems:'center',
        padding: theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent:'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
     }),
     marginLeft: -drawerWidth,
    },
    contentShift:{
        transition: theme.transitions.create('margin',{
            easing:theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
},
toolbar:{
    display: 'flex',
    backgroundColor: 'lavender',
    color:'purple',
    fontFamily: "Courier New, Courier, monospace",
},
toolbar_button:{
    marginLeft: 'auto',
    color:'purple',
    fontFamily: "Courier New, Courier, monospace",
},
margin_top:{
    margin_Top:'50px',
},
font:{
    fontFamily: "Courier New, Courier, monospace",
},
leftMargin:{
    marginLeft:'240px',
},
}))


export const TheShelf = withRouter((props: LibraryProps) => {

    console.log(props);
    const{history}= props;
    const classes = useStyles();
    const Theme = useTheme();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    
    const handleDrawerOpen =() => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClickClose = ()=> {
        setDialogOpen(false)
    };

    const ItemList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Sign In',
            onClick: () => history.push('/SignIn')
        },
        {
            text: 'About',
            onClick: () => history.push('/about')
        },
        {
            text: 'Restricted Section',
            onClick: () => history.push('/RestrictedSection')
        },
    ];


    return (
        <div className ={`${classes.root} ${classes.column}`} >
            <CssBaseline/>
            <AppBar position = "fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open })}> {/* We are using Mui to make another navbar */}
                <Toolbar className = {classes.toolbar}>
                    <IconButton color="inherit" aria-label = "open-drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton,open && classes.hide)}>
                        <MenuIcon/>
                    </IconButton> 
                    <Typography variant="h6" className={classes.font} noWrap>
                        The Library Shelf
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Shelf New Book</Button>
                    {/*Dialog Pop Up */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                        <DialogContent>
                            <DialogContentText></DialogContentText>
                            <TheShelfForm/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClickClose} color="primary">Cancle</Button>
                            <Button onClick={handleDialogClickOpen} color="primary">Done</Button>
                        </DialogActions>
                    </Dialog>
                    {/* End dialog pop-up */}
                </Toolbar>
            </AppBar>
            <MUIDrawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper:classes.drawerPaper,}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {Theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider/> {/* a fun educational game is to comment elements our while the compiler is running and see what disapears or breaks*/}
                <List>
                    {ItemList.map((item,index) => { { /*don't get lost here it's just a map function looping over our itemsList array! */}
                    const{text,onClick} = item;
                    return(
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary = {text}/>
                        </ListItem>
                    );
                })}
                </List>
            </MUIDrawer>
            <main className={`${clsx(classes.content, {[classes.contentShift]: open,})} ${classes.leftMargin}`}>
                <div className={classes.drawerHeader} />
                <DataTable /> 

            </main>
        </div>
    )
});
