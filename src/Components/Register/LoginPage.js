import React,{useState} from 'react';
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
import API_URL from '../../config'


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



        const SubmitLogin = (event) =>
        {
        event.preventDefault();
          if (!Email) {
            alert('Please fill Email');
            return;
          }
          if (!password) {
            alert('Please fill Password');
            return;
          }

       //   console.log(CNIC , password);

          axios.post(API_URL+'/login/',{
            Email:Email,
            Password:password
          })
          .then(res =>{
            
            if(res.data[0].Role){
              localStorage.setItem('UserData',JSON.stringify(res.data[0]));
              window.location='/Profile'
            }
          }
              
          
               
           
           
            
          )
          .catch(err=>console.log(err));

          // if(CNIC===Login.CNIC && password===Login.password){
         
          //   } 

          // else {
          //   setAlert(true); 
          //   }


          
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
        <form noValidate>

        

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Email"
            label="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            value={Email} 
            onChange={ (e) => setEmail(e.target.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) =>setpassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
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