import Header from './Header';
import './../App.css';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import React, { Component } from 'react'
import DataUser from './Data.json'
const { v4: uuidv4 } = require('uuid');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hienThiForm : false,
      data: [],
      textSearch: '',
      editUserStatus: false,
      editUserObject: {}
    }
  }

  componentDidMount() {
    if(localStorage.getItem('userData') === null) {
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

  addNewUser = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name
    item.tel = tel
    item.Permission = Permission

    var items = this.state.data
    items.push(item)
    this.setState({
      data: items
    })
    // console.log(items)
    localStorage.setItem('userData', JSON.stringify(items))
  }

  editUserOfApp =(user) => {
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
      this.state.data.forEach((item)=> {
        if(item.id===userAfterEdit.id){
          item.name=userAfterEdit.name
          item.tel=userAfterEdit.tel
          item.Permission=userAfterEdit.Permission         
        }
      })
      localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  deleteUserInfo = (idUser) => {
      var tempData = this.state.data
      tempData=tempData.filter(item => item.id !== idUser)
      this.setState({
        data: tempData
      })
      localStorage.setItem('userData', JSON.stringify(tempData))
  }

  render(){
    var ketqua = [];
    this.state.data.forEach((item)=> {
      if(item.name.indexOf(this.state.textSearch) !== -1){
        ketqua.push(item);
      }
    })

    return (
      <div >
        <Header/>
        <div className="">
        <div className="container">
          <div className="row">
            <Search 
              isHienThiForm={this.state.hienThiForm} 
              ketnoiApp = {this.setHienThiForm} 
              getText={(dl)=>this.getTextSearch(dl)}
              showEditUser ={this.state.editUserStatus}
              isShowEditUserOfSearch ={this.isShowEditUser}
              getEditUser={this.state.editUserObject}
              userEditInfoApp = {(userAfterEdit) => this.userEditInfoApp(userAfterEdit)}
            />
            <TableData 
              editUserOfTable={(user) => this.editUserOfApp(user)} 
              dataUserProps={ketqua}
              showEditUserOfTable ={this.isShowEditUser}
              deleteUserInfo = {(idUser) => this.deleteUserInfo(idUser)}
            />
            <AddUser 
              add={(name, tel, Permission) => this.addNewUser(name, tel, Permission)} 
              isHienThiForm={this.state.hienThiForm}
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

