import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footers from '../Footers/Footers';
import SocialAccounts from '../SocialAccounts/SocialAcc';
import Navbar from '../MenueBar/MenueBar';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100ch'
      
    },
},

    button: {
        marginTop : '1em',
        padding: "10px 40px",
        marginLeft: '1em'
    }
}));



export default function BasicTextFields() {
  const classes = useStyles();

  const [getVal, setgetVal] = useState('');

      const InputNumOnly = (e) =>{
            const re = /^[0-9\b]+$/;

            // if value is not blank, then test the regex
        
            if (e.target.value === '' || re.test(e.target.value)) {
                setgetVal(e.target.value)
            }
      }


  return (
      <>
      <Navbar />
        <div className="container   pt-3" style={{height:"450px", width:"1600px" , border:"none" , marginTop:'10em'}}>

            <div className="row ">
                <div className="col-12">
                <form  noValidate autoComplete="off">
                <TextField className={classes.root} value={getVal} onChange={InputNumOnly} maxLength='13' id="outlined-basic" variant="outlined" label="Please Enter CNIC without Dasehes" />
                <br></br>
                    <Button variant="contained" color="secondary" className={classes.button} style={{width:'300px'}}>
                        Verify
                    </Button>
                </form>
                </div>
            </div> 
        </div>

            <Footers/>
            <SocialAccounts />   

    </>
  );
}
