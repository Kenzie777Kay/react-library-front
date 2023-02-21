import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import {Link} from 'react-router-dom';

interface Props{
    title:string;
}


const useStyles  = makeStyles({
    background:{
        backgroundImage: `#FF3CAC; background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);`,
        width: '100%',
        height:'100%',
        backgroundPosition:'center',
        position:'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign:'right',
        position:'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color:'white',
        fontFamily: "Courier New, Courier, monospace",
        padding: '300px'
    },
    button_text: {
        color:'white',
        textDecoration:'none',
        fontFamily: "Courier New, Courier, monospace",
    },
});

export const Home = ( props: Props) => {
    
    const classes = useStyles();

    return(
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <Button>
                        <Link to = '/TheShelf' className={classes.button_text}> To The Shelf!</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}