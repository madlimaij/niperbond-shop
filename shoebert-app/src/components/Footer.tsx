import { normalize } from "path";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";


  

const useStyles = createUseStyles ({
    footer: {
    position: "fixed",
    display: "flex",    
    justifyContent: "center",
    height: 102,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.colors.lightBrown,
    
     
},

   title: {
        fontFamily: theme.font.fontFamily,
        color: theme.colors.black,
        fontSize: theme.typography.body,
        fontWeight: "400px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        


    }
}
)

const Footer =() => {
    const classes = useStyles();
    return (
        
        <div className={classes.footer}>
        <span className={classes.title}>Selle nägusa saapapoe lõid sulle: Madli, Merje, Hanna ja Liisi</span>
    </div>)
}

//Teha css (pruun kast). Viimase asjana teha copyright asi. Teistel lehtedel footeri taust helepruun

export default Footer;