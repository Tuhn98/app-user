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
    //   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    //   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    //   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    //   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    //   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    //   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    //   str = str.replace(/đ/g, "d");
    //   str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    //   str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    //   str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    //   str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    //   str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    //   str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    //   str = str.replace(/Đ/g, "D");
    //   // Some system encode vietnamese combining accent as individual utf-8 characters
    //   // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    //   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    //   str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    //   // Remove extra spaces
    //   // Bỏ các khoảng trắng liền nhau
    //   str = str.replace(/ + /g, " ");
    //   str = str.trim();
    //   // Remove punctuations
    //   // Bỏ dấu câu, kí tự đặc biệt
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

