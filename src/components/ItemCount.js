import { useState } from "react";
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions, CardMedia } from '@mui/material';
import { Height} from '@mui/icons-material';
import Cartwidget from "./Cartwidget";


export default function App({stock, initial, onAdd}) {

  const useStyles = makeStyles({
    root: {
      width: 275,
      media: Height,
      margin: 'auto', 
    },
    bullet: {
      display: "inline",
      marginLeft: "auto",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height:100,
        paddingTop:'56%',
    }
  });

  const classes = useStyles();
  const [counter, setCounter] = useState(initial);

  const suma = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const resta =() => {
    if (counter > initial) {

      setCounter(counter -1);
    }
  };

  return (
    <>
    <Card className={classes.root} variant="outlined">

      <CardMedia className={classes.media} image="https://www.hola.com/imagenes/cocina/recetas/20200910175033/muffins-centeno-chocolate/0-863-761/muffins-adobe-m.jpg"
      title="muffin" />
      <CardContent>
        <Typography
          className={classes.root}
          color="textSecondary"
          variant="h5"
          component="h2"
          gutterbuttom
        >
          Muffin Frambuesa
        </Typography>
        <div> <h3>Cantidad productos: {counter} </h3></div>
       
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={suma}
        >
           {" "}
            +{" "}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={resta}
        >
           {" "}
            -{" "}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => onAdd(counter)}
          >
         <Cartwidget />
        </Button>
      </CardActions>
    </Card>
  </>
    
  );
}

