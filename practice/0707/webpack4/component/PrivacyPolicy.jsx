import React,{Component} from 'react'
import '../css/PrivacyScroll.css'


class PrivacyPolicy extends Component{
    
    render(){
        return(
            <div id="privacyPolicy">
                <h4> 개인정보취급방침</h4>
                <div id="privacyScroll">
                    가. 수집하는 개인정보 항목 및 수집방법<br/>
                    나. 개인정보의 수집 및 이용목적<br/>
                    다. 수집한 개인정보의 보유 및 이용기간<br/>

                    가. 수집하는 개인정보 항목 및 수집방법<br/>
                    본원은 고객님의 온라인상담을 위해 개인정보를 아래와 같이 수집하고 있습니다.<br/>
                    - 이름, 핸드폰, 직업, 나이, 이메일 등 기록<br/>
                    본원은 다음과 같은 방법으로 개인정보를 수집합니다.<br/>
                    - 상담 게시판에 상담 신청 게시글 등록<br/>
                    나. 개인정보의 수집 및 이용목적<br/>
                    본 학원은 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br/>
                    - 과정문의에 대한 학과담당자들의 전화 및 이메일상담<br/>
                    - 신규 서비스(강좌) 개발 및 특화, 이벤트 등 광고성 정보 전달<br/>
                    다. 수집한 개인정보의 보유 및 이용기간<br/>
                    원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당정보를 지체 없이 파기합니다.<br/>
                </div>
                <div id="consentCheck">
                    <label>
                        <input type="radio" />
                        동의하지 않습니다.
                    </label>
                    <label>
                        <input type="radio" />
                        동의합니다.
                    </label>
                </div>
            </div>
        )
    }
}

export default PrivacyPolicy