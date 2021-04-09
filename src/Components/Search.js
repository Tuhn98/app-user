import React, { Component } from 'react'
import EditUser from './EditUser.js';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      userEditInfo: {}
    }
  }

  isHienThiFormAddUser = () => {
    if (this.props.isHienThiForm === true) {
      return (
        <div
          className="btn btn-success"
          onClick={this.props.ketnoiApp}><i className="fas fa-user-plus"></i> Close Create User</div>
      )
    }
    else {
      return (
        <div
          className="btn btn-success"
          onClick={this.props.ketnoiApp}><i className="fas fa-user-plus"></i> Create User</div>
      )
    }
  }

  getValueText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  showEditUserForm = () => {
    if (this.props.showEditUser) {
      return (
        <EditUser
          isShowEditUserOfEdit={this.props.isShowEditUserOfSearch}
          getEditUser={this.props.getEditUser}
          userEditInfo={(userAfterEdit) => this.userEditInfo(userAfterEdit)}
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

  clickXXX = () => {
    this.setState({
      text: ''
    })
    this.props.getText('')
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="container" style={{ backgroundColor: '#EEEEEE', height: 60 }}>
          <div className="row" style={{
            display: 'flex',
            marginRight: -15,
            justifyContent: 'space-between',
            marginLeft: -15,
            alignItems: 'center',
            height: '100%',
            paddingLeft: 20,
            paddingRight: 20
          }}>
            <p style={{ margin: 0 }}>All Users</p>
            {this.isHienThiFormAddUser()}
          </div>
        </div>
        { this.showEditUserForm()}
        <div className="col-12" >
          <div className="form-group">
            <div className="btn-group float-right" style={{ marginBottom: 10 }}>
              <input onChange={(event) => this.getValueText(event)} style={{ width: '300px' }} type="text" className="form-control" aria-describedby="helpId" value={this.state.text} placeholder="Search Users..." />
              <div className="btn-group">
                <button onClick={() => this.clickXXX()}
                  type="button" className="btn btn-warning"><i className="fas fa-times"></i></ button>
                <button onClick={(dl) => this.props.getText(this.state.text)} type="button" className="btn btn-secondary"><i className="fas fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
