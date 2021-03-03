import react, {Component} from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
      <div>
        
      </div>
    );
};

class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentWillMount(){
        console.log("componentWillMount (deprecated)");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        // 5의배수일때 리렌더링 안됨
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState(
            // number : this.state.number + 1
            ({number}) => ({
                number : number + 1
            })
        );
    }

    handleDecrease = () => {
        const {number} = this.state;
        this.setState({
            // number : this.state.number - 1
            number : number - 1
        });
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    render() {
        console.log("render");
        if(this.state.error) return (<h1>에러발생</h1>);
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problematic />} 
                {/* Problematic 값이 4가 되면 렌더링 */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
    
}

export default Counter;