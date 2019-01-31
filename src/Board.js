import React, {Component} from 'react';

export class Board extends Component {
    constructor(props) {
    super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
    }

handleClick(index) {
      this.props.checkWinner(index);
}
handlePlayAgain(e) {
    this.props.playAgainFunc(e);
    e.preventDefault()
}

render() {
    const allSquare = this.props.square.map((sq,index) => { 
    return (
    <div 
    key={index} 
    className="square" 
    onClick = {e=> {this.handleClick(index)}}>
    {sq}    
    </div>
    );
    }
);
    const sign1 = 'X',sign2 = 'O';
    const nameShow1 = (
        <p><b>{this.props.name1} : </b> {sign1}</p>
    );
    const nameShow2 = (
        <p><b>{this.props.name2} : </b> {sign2}</p>
    );
    var showBoard;
    if(this.props.playAgain ) {
       showBoard = (
                 <div className = "welcomeWrapper"> 
                <button type="button" value="Play Again" onClick={this.handlePlayAgain}>Play Again</button>
                </div>
        );
    }
    else {
      showBoard = ( 
          <div>
            <div className = "nameShow">
                {this.props.startGame?nameShow1:''}
                {this.props.startGame?nameShow2:''}

            </div>     

             <div className = 'board'>    
                {   
                    this.props.startGame?allSquare:''
                }
             </div>
    </div>
        );
    }

    return ( 
             <div className = "boardContainer">
                 {
                     showBoard
                 }
             </div>    
          );
}
}