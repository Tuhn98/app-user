import React, { Component } from 'react'
import EditUser from './EditUser.js';


export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      userEditInfo: {}
    }
  }
  
  isHienThiFormAddUser = () => {
    if(this.props.isHienThiForm === true) {
      return(
        <div 
        style ={{width:'100%',marginBottom:'5px'}} 
        className="btn btn-lock btn-outline-info" 
        onClick={ this.props.ketnoiApp}>Đóng lại</div>
      )
    }
    else {
      return(
        <div 
        style ={{width:'100%',marginBottom:'5px'}} 
        className="btn btn-lock btn-outline-info" 
        onClick={ this.props.ketnoiApp}>Thêm mới</div>
      )
    }
  }

  getValueText = (event) => {
    this.setState ({
      text: event.target.value
    })
  }

  showEditUserForm =() => {
    if(this.props.showEditUser){
      return(
        <EditUser 
          isShowEditUserOfEdit = {this.props.isShowEditUserOfSearch}
          getEditUser = {this.props.getEditUser}
          userEditInfo = {(userAfterEdit) => this.userEditInfo(userAfterEdit)}
        />
      )
    }
  }

  userEditInfo = (userAfterEdit) => {
    this.setState({
      userEditInfo: userAfterEdit
    })
    this.props.userEditInfoApp(userAfterEdit)
  }
    render() {
        return (
            <div style={{width:'100%'}}>
              {this.showEditUserForm()}
              <div className="col-12">
                <div className="form-group">
                  <div className="btn-group">
                    <input onChange={(event) => this.getValueText(event)} style={{width: '300px'}} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa..." />
                    <div className="btn btn-info" onClick={(dl) => this.props.getText(this.state.text)}>Tìm</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
              <div className="btn-group1" style={{width:'100%'}}>
                {this.isHienThiFormAddUser()}
              </div>
              </div>
            <hr/>
            </div>
        )
    }
}
