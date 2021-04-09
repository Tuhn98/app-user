import React, { Component } from 'react';

class TableDataRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permission: ''
        }
    }
    setPermission = () => {
        if (this.props.permission === "1") { return <button className="btn btn-info">Admin</button> }
        else if (this.props.permission === "2") { return <button className="btn btn-info">User</button> }
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
                <td>{this.props.email}</td>
                <td>
                    {this.setPermission()}
                </td>
                <td>{this.props.created}</td>
                <td>{this.props.updated}</td>
                <td>
                    <div className="btn-group" style={{ width: '100%' }}>
                        <div className="btn btn-info sua" onClick={this.clickSUA} >
                            <i className="fas fa-pencil-alt">  Edit User</i>
                        </div>
                        <div className="btn btn-danger xoa" onClick={(idUser) => this.props.deleteUserInfo(this.props.id)}>
                            <i className="far fa-trash-alt"> Delete User</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;