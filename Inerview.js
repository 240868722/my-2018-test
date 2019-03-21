import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input ,Row,Col} from 'antd';
import styles from './Interview.less';
import { getUrlParam,getAddress } from '../../utils/utils';


const namespace = 'interview';
const { TextArea } = Input;

@connect(({ global, interview }) => ({
  dict: global.dict,
  data: interview.data,

}))
  @Form.create()
export default class Inerview extends Component {
    state = {

  
    }
    componentDidMount(){
      const shortkey= this.props.match.params.shortkey;
   
      this.props.dispatch({
          type: `${namespace}/getSmsRecordByShortkey`,
          payload: { shortkey:shortkey },
        });
      }

    render() {
      const { data ,dict} = this.props;
      const [a,b,c] = data&&data.interviewPlace&&data.interviewPlace.split('-');
      return (
        <div className={styles.resultContainer}> 
          <Row>
         
             <div className={styles.header} onClick={()=>this.qq()}>
                <h3>尊敬的{data.applicants}：</h3>
                <p>感谢您对本公司的信任，我司诚邀您参加面试，如有任何情况无法到场参加，请提前告知招聘联系人，我们会尽力为您提供帮助。最后，祝您面试成功</p>
                <p className={styles.lastP}>注：参加面试请携带个人简历及本人身份证，以便用于前台登记。</p>
             </div>
             <div className={styles.content}>
                <div>
                  <img style={{with:42,height:42}} src='/img/bluebox.svg'/>
                  <span>{data.position}</span>
                </div>
                <ul>
                  <li>
                     <span>面试时间</span>
                     <span>{data.interviewTime}</span>
                  </li>
                  <li>
                     <span>招聘联系人</span>
                     <span>{data.recruiter}</span>
                  </li>
                  <li>
                     <span>联系电话</span>
                     <span>{data.recruiterMobile}</span>
                  </li>
                  <li>
                     <span>面试地点</span>
                     <span>{getAddress(a,b,dict)}-{c}</span>
                  </li>
                  <li>
                     <span>面试官</span>
                     <span>{data.interviewer}</span>
                  </li>
                  <li>
                     <span>联系电话</span>
                     <span>{data.interviewerMobile}</span>
                  </li>
                </ul>
             </div>
             <div className={styles.footer}>
                <div>
                  <img style={{with:20,height:20,marginRight:7}} src='/img/orangebox.svg'/>
                  <span>以上信息为系统发送，如与招聘电话通知内容不符，请与招聘联系人确认</span>
                </div>
             </div>
          </Row>

        </div>

      );
    }
}
