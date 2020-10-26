import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    constructor(props){
      super(props);
      this.state={
        userObj:{}
      }
    }
    getInfoUserEdit = (info)=>{
      this.setState({
        userObj:info
      });
      this.props.truyenDuLieuApp(info)
    }
    deleteButtonClick = (idUser)=> {
      this.props.deleteUser(idUser);
    }
    mappingDataUser = ()=>this.props.dataUserProps.map((value,key)=>(
      <TableDataRow
      
      deleteButtonClick = {(idUser)=> this.deleteButtonClick(idUser)}
       editFunClick ={(user)=>this.props.editFun(value)} 
       userName={value.name} tel={value.tel} 
       permission = {value.permission} 
       id={value.id} 
       key={key}
       truyenDuLieu = {(info)=>this.getInfoUserEdit(info)}
       ></TableDataRow>
    ))
    
     colStyle = {
      width: '100px'
    };
    
    render() {
      //console.log(this.props.dataUserProps);
        return (
            <div className="col-9">
  <table className="table table-striped table-inverse table-hover">
    <thead className="thead-inverse">
      <tr>
        <th style={this.colStyle}> STT</th>
        <th>Tên</th>
        <th>SDT</th>
        <th>Quyền</th>
        <th>Chức Năng</th>
      </tr>
    </thead>
    <tbody>
      {this.mappingDataUser()}
      
    </tbody>
  </table>
</div>
/* het col  9  */

        );
    }
}

export default TableData;