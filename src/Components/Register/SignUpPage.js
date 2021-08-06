import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footers from '../Footers/Footers';
import Navbar from '../MenueBar/MenueBar'
import axios from 'axios';
import API_URL from '../../config';
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Cnic, setCnic] = useState();
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  const SubmitSignuP =(event)=>{
    event.preventDefault();
    if(!Username){
      alert('Fill in Username');
      return;
    }
    if(!Email){
      alert('Fill in Email');
      return;
    }
    if(!Cnic){
      alert('Fill in Cnic');
      return;
    }
    if(!Password){
      alert('Fill in Password');
      return;
    }
    if(!ConfirmPassword){
      alert('Fill in Confirm Password');
      return;
    }
    if(Password!==ConfirmPassword){
      alert('Password did not matched');
      return;
    }

        var Datatosend={
          Username:Username,
          Email:Email,
          Cnic:Cnic,
          Password:Password,
          Role:'User'
        }

        console.log(Datatosend);
        setSpinnerLoading(true)
        axios.post(API_URL+'/register',Datatosend)
        .then(res=>{
          if(res.status===200){
            setSpinnerLoading(false);
            window.location='/Login'
          }
        })
        .catch(err=>console.log(err));
    

  }
  

  return (

    <> 
    <Navbar />
    <Container component="main" maxWidth="xs" style={{paddingBottom:'10em'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
        
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="FullName"
                label="FullName"
                name="FullName"
                value={Username}
                onChange={(e)=>setUsername(e.target.value)}
                autoComplete="FullName"
              />
            </Grid>
            
            <Grid item xs={12}>
                    <p style={{color:'red'}}>* Note: Please provide your full name as per matriculation certificate.</p>
            </Grid>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CNIC"
                label="Enter CNIC"
                name="CNIC"
                autoComplete="CNIC"
                value={Cnic}
                onChange={(e)=>setCnic(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
                    <ul style={{color:'red'}}>
                        
                        <h6>*Note</h6>
                        
                        <li>
                        
                            Please use your own CNIC number to register.
                        </li>
                        <li>
                            CNIC can not be changed after registration.
                        </li>

                    </ul>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="ReType Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={ConfirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </Grid>


            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration updates via email."
              />
            </Grid>


          </Grid>
                  <Loader
              style={{textAlign:'center'}}
                type="Puff" 
                color="green"
                height={80}
                width={60}
                visible={spinnerLoading}
              />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={SubmitSignuP}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href='/Login' variant="body2" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     

       
    </Container>

            <Footers/>
       
    
            </>     

  );
}