import React,{Component} from 'react';

export class GameMenu extends Component {
    constructor(props) {
        super(props);

        this.handleMode = this.handleMode.bind(this);
        this.handleQuit = this.handleQuit.bind(this);
    }

handleMode(e) {
    this.props.changePlayerChoose(e);
}
handleQuit(e) {
    this.props.quit(e);
}
    render() {
                var menu =  (
                    <div>
                        <br/>
                        <button type="button" onClick = {this.handleMode} value="Change Mode">Change Mode</button>
                            <br/> <br/>
                        <button type="button" onClick = {this.handleQuit} value = 'quit'>QUIT</button>
                    </div>
                );
        
            return (
                <div className = "welcomeWrapper" >
                {this.props.playerChoose?menu:''}
                </div>
        );
    }
}
