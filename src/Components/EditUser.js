import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.getEditUser.id,
            name: this.props.getEditUser.name,
            tel: this.props.getEditUser.tel,
            Permission: this.props.getEditUser.Permission 
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
      var userEditInfo = {}
      userEditInfo.id = this.state.id
      userEditInfo.name = this.state.name
      userEditInfo.tel = this.state.tel
      userEditInfo.Permission = this.state.Permission
      this.props.userEditInfo(userEditInfo);
      this.props.isShowEditUserOfEdit();
    }

    render() {
        return (
            <div className="col">
              <form>
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Sửa thông tin User</div>
                <div className="card-body">
                  <div className="form-group">
                    <input onChange={(event) => this.isChangeText(event)} defaultValue={this.props.getEditUser.name} type="text" name='name' className="form-control" placeholder="Tên user..." aria-describedby="helpIp" />
                  </div>
                  <div className="form-group">
                    <input onChange={(event) => this.isChangeText(event)} defaultValue={this.props.getEditUser.tel} type="text" name='tel' className="form-control" placeholder="Điện thoại..." aria-describedby="helpIp" />
                  </div>
                  <div className="form-group">
                    <select onChange={(event) => this.isChangeText(event)} className="custom-select" name='Permission'  required defaultValue={this.props.getEditUser.Permission}>
                      <option value>Chọn Quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Mordrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type='button' value='Lưu Thông Tin' className="btn btn-info" style={{width: '100%'}} 
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
