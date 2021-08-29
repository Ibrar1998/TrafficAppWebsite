import React, { useState } from 'react';
import './Quiz.css'
import {Card } from 'antd';
import { Button } from '@material-ui/core';
import axios from 'axios';
import API_URL from '../../config';
import {  toast } from 'react-toastify';
import Countdown from 'react-countdown';

export default function Quiz(props) {
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const[FineshTest,setFineshTest]= useState(false);
	const [Result,SetReult]= useState('');
	const [showTest, setshowTest] = React.useState(false);
	const [Id, setId] = useState('')

React.useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		setId(queryParams.get('licenseId'))
		
	}, [])



	const Completionist = () => <span>Time UP!</span>;

	// Renderer callback with condition
	const renderer = ({  minutes, seconds, completed }) => {
		if (completed) {
		  // Render a completed state
		  return <Completionist />;
		} else {
		  // Render a countdown
		  return <span><strong>{minutes}:{seconds}</strong></span>;
		}
	  };

	const questions = [
		{
			questionText: '1.THE SIGN IN THE PICTURE MEANS ”',
            Img_url:'http://www.roadsign.pk/signs/mandatory/Audible-warning-devices-prohibited.jpg',
			answerOptions: [
				{ answerText: 'HORN BAN IS LIFTED', isCorrect: false },
				{ answerText: 'HORN IS ALLOWED', isCorrect: false },
				{ answerText: 'RADIO LISTENING IS PROHIBITED', isCorrect: false  },
				{ answerText: 'USE OF HORN IS PROHIBITED', isCorrect: true },
			],
		},
		{
			questionText: '2.THE SIGN IN THE PICTURES MEANS”',
			Img_url:'http://www.roadsign.pk/signs/mandatory/slow.jpg',
            answerOptions: [
				{ answerText: 'Speed Up', isCorrect: false },
				{ answerText: 'Slow Down', isCorrect: true },
				{ answerText: 'I dont Know', isCorrect: false },
				{ answerText: 'Stop', isCorrect: false },
			],
		},
		{
			questionText: '3.THE SIGN IN THE PICTURE MEANS',
			Img_url:'http://www.roadsign.pk/signs/warning/falling-rock.jpg',
            answerOptions: [
				{ answerText: 'Falling Rock', isCorrect: true },
				{ answerText: 'Raining Area', isCorrect: false },
				{ answerText: 'Snow Falling', isCorrect: false },
				{ answerText: 'I dont know', isCorrect: false },
			],
		},
		{
			questionText: '4.THE SIGN IN THE PICTURES MEANS',
			Img_url:'http://www.roadsign.pk/signs/warning/road-works.jpg',
            answerOptions: [
				{ answerText: 'Road Works', isCorrect: true },
				{ answerText: 'Road is Fine', isCorrect: false },
				{ answerText: 'I DONT KNOW', isCorrect: false },
				{ answerText: 'NONE OF THESE', isCorrect: false },
			],
		},
		{
			questionText: '5.THE SIGN IN THE PICTURES MEANS',
			Img_url:'http://www.roadsign.pk/signs/information/parking.jpg',
            answerOptions: [
				{ answerText: 'Parking', isCorrect: true },
				{ answerText: 'No Parking', isCorrect: false },
				{ answerText: 'I DONT KNOW', isCorrect: false },
				{ answerText: 'OverTaking', isCorrect: false },
			],
		},
		{
			questionText: '6.Red Traffic Light signal means ',
            answerOptions: [
				{ answerText: 'You can Go', isCorrect: true },
				{ answerText: 'Stop', isCorrect: false },
				{ answerText: 'Slow Down', isCorrect: false },
				{ answerText: 'Nothin', isCorrect: false },
			],
		},
		{
			questionText: '7.WHEN MOTOR VEHICLES CROSS EACH OTHER ON A NARROW SLOPE, WHICH VEHICLE SHOULD GO FIRST ?',
            answerOptions: [
				{ answerText: 'THE VEHICLE GOING UP THE SLOPE', isCorrect: true },
				{ answerText: 'THE VEHICLE FAR FROM THE TOP OF THE SLOPE', isCorrect: false },
				{ answerText: 'THE VEHICLE GOING DOWN THE SLOPE', isCorrect: false },
				{ answerText: 'ALL OF THE ABOVE', isCorrect: false },
			],
		},
		{
			questionText: '8.WHILE DRIVING A VEHICLE ON EXPRESSWAY IN RAIN AND DRIVER NEEDS TO STOP, HE MAY STOP THE VEHICLE ON THE CARRIAGEWAY',
            answerOptions: [
				{ answerText: 'I DONT KNOW', isCorrect: true },
				{ answerText: 'RIGHT', isCorrect: false },
				{ answerText: 'WRONG', isCorrect: false },
				{ answerText: 'NONE OF THEM', isCorrect: false },
			],
		},
		
		{
			questionText: '9.TO AVOID CHANGE OF DIRECTION CAUSED DUE TO FRONT TYRE BURST, THE DRIVER SHOULD FIRMLY HOLD THE STEERING WHEEL WITH BOTH HANDS TO ENSURE THE VEHICLE GOES STRAIGHT	',
            answerOptions: [
				{ answerText: 'WRONG', isCorrect: true },
				{ answerText: 'RIGHT', isCorrect: false },
				{ answerText: 'I DONT KNOW', isCorrect: false },
				{ answerText: 'NONE OF THEM', isCorrect: false },
			],
		},		
		{
			questionText: '10.A MOTOR VEHICLE IS NOT ALLOWED TO TAKE TURN IN A TUNNEL',
            answerOptions: [
				{ answerText: 'RIGHT', isCorrect: true },
				{ answerText: 'WRONG', isCorrect: false },
				{ answerText: 'I DONT KNOW', isCorrect: false },
				{ answerText: 'NONE OF THEM', isCorrect: false },
			],
		}

	];
		const getResult= (score)=>{
				var temp= Math.floor((score/10)*100) ;
				SetReult(temp);
		}

	const handleAnswerOptionClick = (event,isCorrect) => {
		event.preventDefault();
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			getResult(score);
		}
	};

	const Submit=(event)=>{
		event.preventDefault();

		axios.post(API_URL+'/license/LicenseTest',{
			UserId:Id,
  			 LicenseTest:"Passed"
		})
		.then(()=>{
			toast.success('Your Test has been submitted successfully Passed');
			window.location = '/ApplyForLicense';
		})
		.catch((err)=>console.log(err))
	}

	return (

		<>
	
		{
			showTest?
			<Card title="License Test" bordered={false} style={{marginLeft:200, width: 900 ,height:600 }}>
			<h2>
			<Countdown
			date={Date.now() + 600000}
			renderer={renderer}
			 />
			</h2>
			<div className='app'>
		
		{showScore ? (
			<div className='score-section'>
			
			
				{
					FineshTest?
					<>
					You scored {score} out of {questions.length}
					<br/><br/><br/><br/><br/><br/>
					{Result >=70?
					<>
						<h2 style={{color:'green'}}>Passed</h2>

						<Button variant="contained" color="secondary" onClick={(event) =>Submit(event)} style={{width:200,borderRadius:5,marginTop:70,marginLeft:-140}}>Submit Test</Button>
					</>
					:
					<><h2 style={{color:'red'}} >Fail</h2>
					<Button variant="contained" color="secondary" onClick={() =>window.location='/ApplyForLicense'} style={{width:200,borderRadius:5,marginTop:70,marginLeft:-120}}> Go Back</Button>	
						
					</>
					}
					</>
					: 
					<Button  variant="contained" color="secondary" style={{marginTop:70,marginLeft:240}} onClick={()=>setFineshTest(true)} >Finish Test</Button>
				}
			</div>
		) : (
			<>
				<div className="site-layout-content">
				<div className='question-section'>
					<div className='question-count'>
						<span>Question {currentQuestion + 1}</span>/{questions.length}
					</div>
					<div className='question-text'>{questions[currentQuestion].questionText}</div>
					{
						questions[currentQuestion].Img_url?
						<>
							<img style={{float: 'right' ,borderRadius:10}} src={questions[currentQuestion].Img_url} width='150' height='100' alt='question img'/>
						</>
						
						:null
					}
				 
				</div>
				<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption) => (
						<>
						
						<Button   shape="round" onClick={(event) => handleAnswerOptionClick(event,answerOption.isCorrect)}>{answerOption.answerText}</Button><br></br><br></br>
						</>
					))}
				</div>
				</div>
			
				
			</>
		)}
	</div>

		   </Card>
			:
			<>
		   <Button  variant="contained" color="secondary" style={{width:300,marginLeft:500,marginTop:250 }} 
		   onClick={()=>setshowTest(true)}
		   >Start Test</Button>
			</>
		 }


		
		</>
	);
}