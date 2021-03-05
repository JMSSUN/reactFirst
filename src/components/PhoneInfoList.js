import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onRemove not defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        //다음 받아올 data 가 현재 data 랑 다른 배열일 때 true 로 설정
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (<PhoneInfo 
                    key={info.id} 
                    info={info} 
                    onRemove={onRemove} 
                    onUpdate={onUpdate}
                    />)
        );
        // key : 리액트에서 배열을 렌더링할 때 꼭 필요한 값(고유값)
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;