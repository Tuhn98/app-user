import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      newsPerPage: 3
    };
  }

  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  select = (event) => {
    this.setState({
      newsPerPage: event.target.value
    })
  }

  render() {
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = this.props.dataUserProps.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((value, index) => {
      return <TableDataRow
        key={index}
        STT={index + 1 + (currentPage - 1) * newsPerPage}
        id={value.id}
        name={value.name}
        email={value.email}
        created={value.created}
        updated={value.updated}
        permission={value.Permission}
        editUserOfTableRow={(user) => this.props.editUserOfTable(value)}
        showEditUserOfTableRow={this.props.showEditUserOfTable}
        deleteUserInfo={(idUser) => this.props.deleteUserInfo(idUser)}
      />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.dataUserProps.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="col">
        <table className="table table-striped">
          <thead><tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {renderTodos}
          </tbody>
        </table>
        <div className="news-per-page">
          <p>{this.props.dataUserProps.length} user total</p>
          <select style={{ marginBottom: 10 }} defaultValue="0" onChange={this.select} >
            <option value="0" disabled>Get by</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className="pagination-custom">
          <ul id="page-numbers">
            {
              pageNumbers.map(number => {
                if (this.state.currentPage === number) {
                  return (
                    <button style={{ marginRight: 5 }} className="btn btn-info active" key={number} id={number} >
                      {number}
                    </button>
                  )
                }
                else {
                  return (
                    <button style={{ marginRight: 5 }} className="btn btn-info" key={number} id={number} onClick={this.chosePage} >
                      {number}
                    </button>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
