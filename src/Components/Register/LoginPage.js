import React,{useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API_URL from '../../config';
import { Base64 } from 'js-base64';
import Loader from "react-loader-spinner";
import { CAlert} from '@coreui/react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  // const [Email, setEmail] = useState('');
  // const [password, setpassword] = useState('');
  const [formData, setformData] = useState([
    {
      Email : ''
    },
    {
      password : ''
    }
    
  ])
  // const [submitted, setsubmitted] = useState(false);

  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [Alert, setAlert] = React.useState(false);
  
      
  const handleChange = (event) => {
    const {formData} = setformData;
    formData[event.target.name] = event.target.value;
    setformData({ formData });

  }
  
        const SubmitLogin = (event) =>
        {
        event.preventDefault();
       
        setAlert(false);

          if (!formData.Email) {
            alert('Please fill Email');
            return;
          }
          if (!formData.password) {
            alert('Please fill Password');
            return;
          }
        


       //   console.log(CNIC , password);
       setSpinnerLoading(true)
          axios.post(API_URL+'/login/',{
            Email:formData.Email,
            Password: Base64.encode(formData.password)
          })
          .then(res =>{
           
              console.log(res)
              if(res.data.message){
                setSpinnerLoading(false);
                setAlert(true);
              }
            if(res.data[0].Role){
              localStorage.setItem('UserData',JSON.stringify(res.data[0]));
              setSpinnerLoading(false);
              window.location='/Profile'
            }
          })
          .catch(err=>console.log(err));
          }
  return (
  
  <Container component="main" maxWidth="xs" style={{paddingBottom:'10em'}}>
     <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
       
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        
        {/* <form noValidate> */}
        <ValidatorForm>
        {
          Alert ? 
       
                  <CAlert
            color="danger"
          >
            <strong style={{alignItems:'center'}}>Invalid Username and Password!!</strong>
          </CAlert>
          :null
        }
          <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Email"
            label="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            value={formData.Email} 
            onChange={handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
            

          />
          <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            validators={['required']}
            errorMessages={['this field is required']}
            autoComplete="current-password"
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
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
            color="secondary"
            className={classes.submit}
            onClick={SubmitLogin}
          >
            LogIn
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/SignUpPage' variant="body2" style={{cursor:'pointer'}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </ValidatorForm>
        {/* </form> */}
      </div>
      
    </Container>
    
  );
}