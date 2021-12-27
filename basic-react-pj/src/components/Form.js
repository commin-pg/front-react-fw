import React from "react";
import './Form.css';

/** 
1. 텍스트 내용이 바뀌면 State 업데이트
2. 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
3. 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업 진행
*/
const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}> 추가 </div>
        </div>
    )
}

export default Form;