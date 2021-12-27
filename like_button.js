'use strict';
const e = React.createElement;

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false};

    }
    render() {
        if(this.state.liked){
            return 'You liked this.';

        }
        return e('button',{ onClick: () => this.setState({liked:true})},
        'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);








//<div id="like_button_container"></div>//
//,<script src ="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
//<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"> </script>

//<script src="like_button.js"></script>//
