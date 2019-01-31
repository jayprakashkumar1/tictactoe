import React,{Component} from 'react';

export class Welcome extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);

    }
handleSubmit(e) {

    this.props.onSubmit(e);
    e.preventDefault()
}
handleClick(e) {
    this.props.onClick(e);
}
handlePlayAgain(e) {
    this.props.playAgain(e);
    
}
    render() {

    const forPlayer1 = (
              <div>
                <h1>COMMING soon!</h1>       
            </div>
            );
    const forPlayer2 = (
                    <div>
                    <form  onSubmit={this.handleSubmit} >
                    <label className="nameInputs">Player1 <input required name='name1' type = 'text' />
                    </label> <br /> <br/>
                    <label className="nameInputs">Player2 <input required name='name2' type = 'text' />
                    </label><br/> <br/> <br/>
                    <input type="submit" className='submit' value = 'START'/>
                    </form>
                    </div>
        );

        var playerChoose = (
           <div>
           <button type="button" value="1player" onClick={this.props.onClick}>1 Player</button>
            <br/> <br/>
            <button type="button" value = '2player' onClick={this.props.onClick}>2 Player</button>
        </div>
        );
            
        return (
            <div className = 'welcomeWrapper'>
              {
                  !this.props.playerChoose?playerChoose:''
              }

                {
                    this.props.between1Player && !this.props.startGame ? forPlayer1:''                    
                }
                {
                    this.props.between2Player && !this.props.startGame ? forPlayer2:''

                }
                
            </div>
        );
    }
}
