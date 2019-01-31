import React, { Component } from 'react';
import './App.css';
import {Board} from './Board';
import {Welcome} from './Welcome';
import {GameMenu } from './GameMenu';

const player1 = 'X';
// const player2 = 'O';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name1: '',
      name2: '',
      square: Array(9).fill(''),
      winner:false,
      playAgain:false,
      startGame:false,
      showMenu : false,
      playerChoose:false,
      between2Player:false,
      between1Player:false,
      currentPlayer: player1         // let's assume
    });
    this.submit = this.submit.bind(this);
    this.playerChoose = this.playerChoose.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.playAgainFunc = this.playAgainFunc.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.changePlayerChoose = this.changePlayerChoose.bind(this);
    this.quit = this.quit.bind(this);
}
  playerChoose(e) {
      this.setState({playerChoose:true});

      if(e.target.value === '1player') {
          this.setState({between1Player:true});
      }
      if(e.target.value === '2player') {
          this.setState({between2Player:true});
      }
  }

  submit(e) {
    
    let name11 = e.target.name1.value;
    let name22 = e.target.name2.value;
    if(name11.trim().length===0 || name22.trim().length===0) {
     alert('Enter a Valid Name');
    return false;
    }
    this.setState({
        name1:name11,
        name2:name22,
        startGame:true
      });
}
checkWinner(index) { 

  var newSquare = this.state.square;

  if(newSquare[index] === '' && !this.state.winner) {

    var newPlayer = this.state.currentPlayer ==='X'?'O':'X';
      newSquare[index] = newPlayer; 
      this.setState({ 
          square:newSquare,
          currentPlayer:newPlayer
      }); 
      }
      const winLines = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
    ];
    let len = winLines.length; 
    let i;
    for(i = 0; i<len ; i++) {
        const [x,y,z] = winLines[i];
        
        if(this.state.square[x] && this.state.square[x]===this.state.square[y] && this.state.square[x]===this.state.square[z]) {
            this.setState({
                winner:true
            });
            if(newPlayer==='X')
            alert(this.state.name1 + ' has Won!');
            else
            alert(this.state.name2 + ' has Won!');

            this.setState({
                square: Array(9).fill(''),
                playAgain:true,
                winner:false,
            });
            return true;
         }
    }   
        let sq = this.state.square; 
        for(i=0;i<9;i++) {
            if(sq[i]==='')
            break;
        }
        if(i===9) {
            alert('Tie');
            this.setState({
                // startGame:false
                square: Array(9).fill(''),
                playAgain:true,
                winner:false,
            });
        }
}
playAgainFunc(e) {
    this.setState({
        playAgain:false,
        square:Array(9).fill('')
    });
}
changeMode(e) {
    this.setState({
        showMenu:true,
        square:Array(9).fill(''),
        playAgain:false
    })
}
changePlayerChoose(e) {
   this.setState({
       playerChoose:false,
       startGame:false,
       between1Player:false,
       between2Player:false,
       square:Array(9).fill(''),
       playAgain:false
   })
}
quit(e) {
    this.setState({
        name1: '',
        name2: '',
        square: Array(9).fill(''),
        winner:false,
        playAgain:false,
        startGame:false,
        showMenu : false,
        playerChoose:false,
        between2Player:false,
        between1Player:false,
        currentPlayer: player1       
      });
}
  render() {
    return (
      <div className="container">
      <h1 style = {{textAlign:"center",opacity:0.4,textDecoration: "underline"}}> TicTacToe Game</h1>
      <Welcome 
      onSubmit = {this.submit}
      onClick = {this.playerChoose} 
      playerChoose = {this.state.playerChoose}
      name1={this.state.name1} 
      name2 = {this.state.name2}
      startGame ={this.state.startGame}
      between1Player={this.state.between1Player}
      between2Player={this.state.between2Player}
      />
      <Board 
      playAgain = {this.state.playAgain}
      playAgainFunc = {this.playAgainFunc}
      startGame={this.state.startGame} 
      square={this.state.square} 
      checkWinner={this.checkWinner}
      name1 = {this.state.name1}
      name2 = {this.state.name2} 
      winner = {this.state.winner}
      playerChoose = {this.state.playerChoose}
      changeMode = {this.changeMode}
      />
       <GameMenu 
            showMenu = {this.state.showMenu} 
            playerChoose = {this.state.playerChoose}
            changePlayerChoose = {this.changePlayerChoose}
            quit = {this.quit}
        />
        <br/>
        <div className="footer">
             <p>  <span style={{opacity:0.7}}>Developed By  </span>Jayprakash Kumar , 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jayprakashkumar1"> GitHub Profile , </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jayprakash-kumar-82882b154/"> LinkedIn Profile  </a>
            </p>
        </div>
    </div>
);
  }
}
export default App;
