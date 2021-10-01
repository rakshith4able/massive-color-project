import React from 'react';
//To use CSS in JS i.e JSS we import withStyles  by installing : npm install @mui/styles
import { withStyles } from '@mui/styles'

//We will write styles as object where key will be the name of the class which will get stored in classes property of props object
const styles = {
    // To style className main
    main: {
        backgroundColor: "purple",
        border: "1px solid black",
        //To style h1 in main class use & as prefix and give styles as object
        "& h1": {
            color: "red"
        }
    },
    //To style class secondary
    secondary: {
        backgroundColor: "black",
        color: "white"
    },


};

//We do not use any states here so we used functional component
//we have to send props in functional component.
function MiniPalette(props) {
    //Take classes property from props and use the class name given in object 
    return (<div className={props.classes.main}>
        <h1>hahaha</h1>
        <p className={props.classes.secondary}>I am Para styled using JSS</p>
    </div>);
}


//We should sendthe object variable consisting of styles as parameter in withStyles in export along with (component name)
export default withStyles(styles)(MiniPalette);