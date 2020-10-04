import React from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {
    AppBar,
    createMuiTheme,
    CssBaseline,
    List,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import Link from "@material-ui/core/Link";
import FeatureView from "./pages/FeatureView";
import Profile from "./pages/Profile";
import ListItemLink from "./ListItemLink";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ComputerIcon from '@material-ui/icons/Computer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: blue[500],
        },
    },
});


function App(props: any) {
    const classes = useStyles();
    const {window} = props;
    // const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/*<div className={classes.toolbar} />*/}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>
                        <small>My Project</small><br/>
                        <strong>Production</strong>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <ListItemText primary="First"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Second"/>
                        </ListItem>
                    </List>
                    <Divider/>
                </AccordionDetails>
            </Accordion>
            <Divider/>
            <List>
                <ListItemLink icon={<InboxIcon/>} primary={"Feature flags"} to="/" />
                <ListItemLink icon={<ComputerIcon/>} primary={"Applications"} to="/" />
                <ListItemLink icon={<PersonIcon/>} primary={"My profile"} to="/profile" />
                <ListItemLink icon={<ExitToAppIcon/>} primary={"Sign out"} to="/" />
            </List>
            <Divider/>
            <List>
                <ListItemLink icon={<InboxIcon/>} primary={"Users"} to="/users" />
                <ListItemLink icon={<MailIcon/>} primary={"Teams"} to="/" />
                <ListItemLink icon={<InboxIcon/>} primary={"Settings"} to="/settings" />
            </List>
            <Divider/>
            <Typography paragraph>Feagles 0.3.14<br/>Documentation<br/><Link
                href="https://github.com/lagren/feagles">github.com</Link></Typography>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                Feagles feature flags
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/* The implementation can be swaßpped with js to avoid SEO duplication of links. */}
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>

                        <Switch>
                            <Route path="/" exact>
                                <FeatureView featureId={42} />
                            </Route>
                            <Route path="/settings">
                                <Settings />
                            </Route>
                            <Route path="/profile">
                                <Profile name="John Doe" email="test@example.org" />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
