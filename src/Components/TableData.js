import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {
  
  hienThiRow = () => 
    this.props.dataUserProps.map((value,key)=> (
      <TableDataRow
        key={key} 
        STT={key+1}
        id={value.id}
        name ={value.name} 
        sdt={value.tel} 
        permission={value.Permission}
        editUserOfTableRow={(user) => this.props.editUserOfTable(value)}
        showEditUserOfTableRow= {this.props.showEditUserOfTable}
        deleteUserInfo = {(idUser) => this.props.deleteUserInfo(idUser)}
      />
    ))


    render() {
        return (
                <div className="col">
                    <table className="table table-striped table-inverse table-hover">
                      <tbody><tr>
                          <th>STT</th>
                          <th>Tên</th>
                          <th>Số điện thoại</th>
                          <th>Quyền</th>
                          <th>Thao tác</th>
                        </tr>
                      </tbody>
                      <tbody>
                        {this.hienThiRow()}
                      </tbody>
                    </table>
                  </div>
        )
    }
}
