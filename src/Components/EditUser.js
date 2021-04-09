import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.getEditUser.id,
      name: this.props.getEditUser.name,
      email: this.props.getEditUser.email,
      created: this.props.getEditUser.created,
      updated: '',
      Permission: this.props.getEditUser.Permission,
    }
  }

  isChangeText = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  saveButton = () => {
    var date = new Date()
    var  updated=  `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    var userEditInfo = {}
    userEditInfo.id = this.state.id
    userEditInfo.name = this.state.name
    userEditInfo.email = this.state.email
    userEditInfo.created = this.state.created
    userEditInfo.updated = updated
    userEditInfo.Permission = this.state.Permission
    this.props.userEditInfo(userEditInfo);
    this.props.isShowEditUserOfEdit();
  }

  render() {
    return (
      <div className="col">
        <form>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Edit User</div>
            <div className="card-body">
              <div className="form-group">
                <input onChange={(event) => this.isChangeText(event)} defaultValue={this.props.getEditUser.name} type="text" name='name' className="form-control" placeholder="Name..." aria-describedby="helpIp" />
              </div>
              <div className="form-group">
                <input onChange={(event) => this.isChangeText(event)} defaultValue={this.props.getEditUser.email} type="text" name='email' className="form-control" placeholder="Email..." aria-describedby="helpIp" />
              </div>
              <div className="form-group">
                <select onChange={(event) => this.isChangeText(event)} className="custom-select" name='Permission' required defaultValue={this.props.getEditUser.Permission}>
                  <option value>Select permission</option>
                  <option value={1}>Admin</option>
                  <option value={2}>User</option>
                </select>
              </div>
              <div className="form-group">
                <input type='button' value='Save User' className="btn btn-info" style={{ width: '100%' }}
                  onClick={this.saveButton}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
