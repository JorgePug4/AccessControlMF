import * as React from 'react';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import Logo from '../../Images/Logo.jpeg'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from '*.module.css';
import { LoginStyles } from './LoginStyles';
import { rootCertificates } from 'node:tls';


interface formdata {
    User: string,
    Password: string
}
 export default function Login() {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data: formdata) => console.log(data.User, data.Password);
    const classes = LoginStyles();
    return (
        <div className={classes.rootCont}>
            <div className="row justify-content-center">
                <div className="col-3 ">
                    <img src={Logo} alt="Logo" className={classes.logo} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 ">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.pos} color="textSecondary">Ingresa tus credenciales para ingresar</Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>Usuario:</Typography>
                                <input className={classes.inputs} {...register("User", { required: true })} />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>Contraseña:</Typography>
                                <input type="password" className={classes.inputs} {...register("Password", { required: true })} />
                                <CardActions>
                                    <Button type="submit" size="small">Ingresar</Button>
                                </CardActions>
                            </form >
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}


