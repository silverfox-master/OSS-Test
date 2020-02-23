import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Logo } from './../assets/puzzle.svg'


const useStyles = makeStyles(() => createStyles({
  body:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    height: '100px',
    width:'100%',
    padding: '10px 10px',
    border: [
        [2, 'solid', 'black']
    ],
  },
  logoContainer: {
    height: '100%',
    width: '15%',
    align:'right'

  },
  textContainer:{
    width:'70%',
    textAlign:'center',
    verticalAlign: 'baseline',
  },
    
}));



export default function Header() {
    const classes = useStyles();
    return(
        <Grid item xs={12}>
            <div className={classes.body}>
                <Logo className={classes.logoContainer}/>
                <p className={classes.textContainer}> 
                   Sorry, but you cannot actually buy Tesla here
                </p>
            </div>
        </Grid>
    );

}
