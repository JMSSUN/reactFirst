import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 수정버튼 눌렀을 때 editing을 true
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => { // editing 값을 반전시키는 함수
        const { editing } = this.state;
        this.setState({editing : !editing});
    }

    handleChange = (e) => { // onChange이벤트 발생할 때
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // 수정눌렀을때 기존값이 input에 나타나고
        // 수정을 적용할 때 input값들을 부모에게 전달

        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing){
            //editing 값이 false->true 될 때
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing) {
            //editing 값이 true->false
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if(!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }
        // 나머지 경우는 리렌더링
        return true;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if(editing) { //수정모드
            return(
                <div style={style}>
                    <div>
                        <input value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;