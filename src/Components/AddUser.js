import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name: '',
      tel: '',
      Permission: ''
    }
  }

  isChangeText = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  dataToApp =() => {
    if(this.props.isHienThiForm===true){
      return(
            <div className="col">
              <form>
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Thêm mới User</div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" name='name' onChange={(event) => this.isChangeText(event)} className="form-control" placeholder="Tên user..." aria-describedby="helpIp" />
                  </div>
                  <div className="form-group">
                    <input type="text" name='tel' onChange={(event) => this.isChangeText(event)} className="form-control" placeholder="Điện thoại..." aria-describedby="helpIp" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" name='Permission' onChange={(event) => this.isChangeText(event)} required>
                      <option value>Chọn Quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Mordrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type='reset' value='Thêm mới' className="btn btn-info" style={{width: '100%'}} onClick={(name, tel, Permision) =>this.props.add(this.state.name, this.state.tel, this.state.Permission)}/>
                  </div>
                </div>
              </div>
              </form>
           </div>
            )
        }
  }

  render() {
        return (
                <div>
                  {this.dataToApp()}
                </div>
        )
 }
}
