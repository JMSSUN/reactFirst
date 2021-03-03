import React, {Component} from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name : "기본이름"
//     }
//     render(){
//         return (
//             <div>
//                 안녕! 내이름은 <b>{this.props.name}</b>!
//             </div>
//         );
//     }
// } 

const MyName = ({name}) => {
    return (
        <div>
            안녕! 내 이름은 {name}!!
        </div>
    );
}

export default MyName;