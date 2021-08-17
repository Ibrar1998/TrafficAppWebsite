import React,{useState , useEffect} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import Aos from 'aos';
import 'aos/dist/aos.css';



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
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [emailAlert, setemailAlert] = useState(false);
  
  // const [submitted, setsubmitted] = useState(false);

  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [Alert, setAlert] = React.useState(false);
  
      
        const SubmitLogin = (event) =>
        {
        event.preventDefault();
       
        setAlert(false);

          if (!Email) {
            alert('Please fill Email');
            return;
          }
          else {
            let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
            if(reg.test(Email)===false){
                  setemailAlert(true);
              return;
            }            
          }
            setemailAlert(false);
          if (!password) {
            alert('Please fill Password');
            return;
          }
          
        
       //   console.log(CNIC , password);
       setSpinnerLoading(true)
          axios.post(API_URL+'/login/',{
            Email:Email,
            Password: Base64.encode(password)
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

          useEffect(() => {
            Aos.init({duration : 2000})
         }, []); 


  return (
  
  <Container component="main" maxWidth="xs" style={{paddingBottom:'10em'}} data-aos="fade-up">
     <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
       
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        
       <form noValidate> 
       
        {
          Alert ? 
       
                  <CAlert
            color="danger"
          >
            <strong style={{alignItems:'center'}}>Invalid Username and Password!!</strong>
          </CAlert>
          :null
        }

        {
          emailAlert ? 
       
                  <CAlert
            color="danger"
          >
            <strong style={{alignItems:'center'}}>Invalid Email Formate eg.abc@xyz.com !!</strong>
          </CAlert>
          :null
        }
          <TextField
            margin="normal"
            required
            fullWidth
            id="Email"
            label="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            onFocus={() => setemailAlert(false)}
            value={Email} 
            onChange={(event) => setEmail(event.target.value)}
          
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(event) => setpassword(event.target.value)}
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
            color="primary"
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
       
        </form> 
      </div>
      
    </Container>
    
  );
}