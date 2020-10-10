import React from 'react';

class CustomerDelete extends React.Component{

    deleteCustomer(id){
        // /api/customers/7: id가 7인 고객데이터를 삭제하겠다.
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        //삭제 이후 새롭게 바뀐 고객목록 화면에 재출력
        this.props.stateRefresh();
    }
    render(){
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;