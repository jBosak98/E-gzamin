
import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    mainHeaders:{
      color: theme.palette.text.primary,
      margin: "1vh 3vw",
    },
  
  }));
  

type HeaderType = {
    content: string;
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "srOnly" | undefined;
  }
  
  function Header(props: HeaderType){
  const {content, variant} = props;
  const styles = useStyles();
  
  return <Typography className={styles.mainHeaders} variant={variant}>
    {content}
  </Typography>
  }
  
  export default Header;