import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/ConsultInfo.css'

class ConsultInfo extends Component{
    render(){
        return(
            <div>
                <div id="consultInfoTitle"><h4>상담정보</h4></div>
                <form action="">
                    <table id ="consultForm">
                        <tr>
                            <th>이름</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td><label><input type="radio"/>남</label><label><input type="radio"/>여</label></td>
                        </tr>
                        <tr id="age">
                            <th>나이</th>
                            <td><input type="text" />세</td>
                        </tr>
                        <tr id="email">
                            <th>이메일</th>
                            <td>
                                <input type="text"/>  @ <input type="text" name="email"/>
                                <select name="email" id="">
                                    <option value="" checked></option>
                                    <option value="naver">직접입력</option>
                                    <option value="naver">naver.com</option>
                                    <option value="naver">hanmail.net</option>
                                    <option value="naver">daum.net</option>
                                    <option value="naver">nate.com</option>
                                    <option value="naver">hotmail.com</option>
                                    <option value="naver">gmail.com</option>
                                </select>
                            </td>
                        </tr>
                        <tr id="phoneNumber">
                            <th>전화번호</th>
                            <td><input type="text"/> -<input type="text"/> -<input type="text"/></td>
                        </tr>
                        <tr id="consultContent">
                            <th>상담내용</th>
                            <td><input type="textarea" /></td>
                        </tr>
                    </table>
                </form>

                
            </div>
        )
    }
}
export default ConsultInfo