import React, { Component } from 'react';

class TableDataRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            permission: ''
        }
    }
    setPermission = () => {
        if(this.props.permission===1) {return 'Admin';}
        else if(this.props.permission===2) {return 'Mordrator';}
        else{return 'Normal';}
    }

    clickSUA = () => {
        this.props.editUserOfTableRow();
        this.props.showEditUserOfTableRow();
    }
    render() {
        return (
                <tr>
                    <td >{this.props.STT}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.sdt}</td>
                    <td>
                        {this.setPermission()}
                    </td>
                    <td>
                    <div className="btn-group" style={{width:'100%'}}>
                        <div className="btn btn-warning sua" onClick={this.clickSUA} >
                        <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div className="btn btn-danger xoa" onClick = {(idUser) => this.props.deleteUserInfo(this.props.id)}>
                        <i className="fa fa-delete">Xóa</i>
                        </div>
                    </div>   
                    </td>
                </tr>
        );
    }
}

export default TableDataRow;