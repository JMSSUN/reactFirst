import react, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name : '',
        phone : ''
    }
    handleChange = (e) => {
        this.setState({
            // name: e.target.value
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        this.props.onCreate(this.state);
        this.setState({ // 상태 초기화
            name: '',
            phone: ''
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
                <div>{this.state.name} {this.state.phone}</div>                
            </form>
        );
    }
}

export default PhoneForm;