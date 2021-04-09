import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      created: '',
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

  onSubmit = () => {
    var date = new Date()
    var created = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    this.props.add(this.state.name, this.state.email, created, this.state.Permission)
    this.props.setHienThiForm()
  }

  dataToApp = () => {
    if (this.props.isHienThiForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Creat User</div>
              <div className="card-body">
                <div className="form-group">
                  <input type="text" name='name' onChange={(event) => this.isChangeText(event)} className="form-control" placeholder="Name..." aria-describedby="helpIp" />
                </div>
                <div className="form-group">
                  <input type="text" name='email' onChange={(event) => this.isChangeText(event)} className="form-control" placeholder="Email..." aria-describedby="helpIp" />
                </div>
                <div className="form-group">
                  <select className="custom-select" name='Permission' onChange={(event) => this.isChangeText(event)} required>
                    <option value>Select Permission</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type='reset' value='Create User' className="btn btn-info" style={{ width: '100%' }} onClick={() => this.onSubmit()} />
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
