import Header from './Header';
import './../App.css';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import React, { Component } from 'react'
import DataUser from './Data.json'
const { v4: uuidv4 } = require('uuid');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      textSearch: '',
      editUserStatus: false,
      editUserObject: {}
    }
  }

  componentDidMount() {
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser))
    }
    else {
      let temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      })
    }
  }

  setHienThiForm = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      textSearch: dl
    })
  }

  addNewUser = (name, email, created, Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name
    item.email = email
    item.created = created
    item.Permission = Permission

    var items = this.state.data
    items.push(item)
    this.setState({
      data: items
    })
    // console.log(items)
    localStorage.setItem('userData', JSON.stringify(items))
  }

  editUserOfApp = (user) => {
    this.setState({
      editUserObject: user
    });
  }

  isShowEditUser = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  userEditInfoApp = (userAfterEdit) => {
    this.state.data.forEach((item) => {
      if (item.id === userAfterEdit.id) {
        item.name = userAfterEdit.name
        item.email = userAfterEdit.email
        item.created = userAfterEdit.created
        item.updated = userAfterEdit.updated
        item.Permission = userAfterEdit.Permission
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  deleteUserInfo = (idUser) => {
    var tempData = this.state.data
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    })
    localStorage.setItem('userData', JSON.stringify(tempData))
  }

  render() {
    // function removeVietnameseTones(str) {
    //   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
    //   str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
    //   str = str.replace(/??|??|???|???|??/g, "i");
    //   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
    //   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
    //   str = str.replace(/???|??|???|???|???/g, "y");
    //   str = str.replace(/??/g, "d");
    //   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
    //   str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
    //   str = str.replace(/??|??|???|???|??/g, "I");
    //   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
    //   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
    //   str = str.replace(/???|??|???|???|???/g, "Y");
    //   str = str.replace(/??/g, "D");
    //   // Some system encode vietnamese combining accent as individual utf-8 characters
    //   // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
    //   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
    //   str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
    //   // Remove extra spaces
    //   // B??? c??c kho???ng tr???ng li???n nhau
    //   str = str.replace(/ + /g, " ");
    //   str = str.trim();
    //   // Remove punctuations
    //   // B??? d???u c??u, k?? t??? ?????c bi???t
    //   str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    //   return str;
    // }

    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textSearch) !== -1 || item.email.indexOf(this.state.textSearch) !== -1) {
        ketqua.push(item);
      }
    })

    return (
      <div >
        <Header />
        <div className="">
          <div className="container">
            <div className="row">
              <Search
                isHienThiForm={this.state.hienThiForm}
                ketnoiApp={this.setHienThiForm}
                getText={(dl) => this.getTextSearch(dl)}
                showEditUser={this.state.editUserStatus}
                isShowEditUserOfSearch={this.isShowEditUser}
                getEditUser={this.state.editUserObject}
                userEditInfoApp={(userAfterEdit) => this.userEditInfoApp(userAfterEdit)}
              />
              <TableData
                editUserOfTable={(user) => this.editUserOfApp(user)}
                dataUserProps={ketqua}
                showEditUserOfTable={this.isShowEditUser}
                deleteUserInfo={(idUser) => this.deleteUserInfo(idUser)}
              />
              <AddUser
                add={(name, email, created, Permission) => this.addNewUser(name, email, created, Permission)}
                isHienThiForm={this.state.hienThiForm}
                setHienThiForm={this.setHienThiForm}
              />

            </div>
          </div>

        </div>

      </div>
    );
  }
}

