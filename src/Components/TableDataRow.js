import React, { Component } from 'react';

class TableDataRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiSua: false,
      id : this.props.id,
      name : this.props.userName,
      tel : this.props.tel,
      permission : this.props.permission,
      
    }
  }
  isChangeEdit  = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }
  thayDoiTrangThaiSua = () => {
    this.setState({
      trangThaiSua: !this.state.trangThaiSua
    })
  }
  hienThiNutSua = () => {
    if (this.state.trangThaiSua === false) {
      return (
        <div className="btn btn-warning sua" onClick={() => this.thayDoiTrangThaiSua()}>
          <i className="fas fa-edit ">Sửa</i>
        </div>
      )
    }
    else return (
      <div className="btn btn-success sua" onClick={() => this.saveInfo()}>
        <i className="fas fa-edit ">Lưu</i>
      </div>
    )
  }
  hienThiFormSua = () => {
    if (this.state.trangThaiSua === false) {
      return (
        <tr>
          <td >{this.props.id}</td>
          <td>{this.props.userName}</td>
          <td>{this.props.tel}</td>
          <td>
            {this.permissionShow()}
          </td>
          <td>
            <div className="btn-group">
              {this.hienThiNutSua()}
              <div className="btn btn-danger sua"onClick={(idUser)=>this.deleteButton(this.props.id)}>
                <i className="fas fa-trash-alt    ">Xóa</i>
              </div>
            </div>
          </td>
        </tr >
      )
    }
    else return (
      <tr>

        <td><input name="id" type="text" className="form-control"  defaultValue={this.props.id} disabled /></td>
        <td><input name="name" type="text" className="form-control" defaultValue={this.props.userName} onChange={(event)=>this.isChangeEdit(event)} /></td>
        <td><input name="tel" type="text" className="form-control"  defaultValue={this.props.tel}  onChange={(event)=>this.isChangeEdit(event)} /></td>
        <td>
          <select id="my-select" name="permission" defaultValue={this.props.permission} onChange={(event) => this.isChangeEdit(event)} className="form-control">
            {/* <option selected>{this.props.permission}</option> */}
            <option value={1}>Admin</option>
            <option value={2}>Moderator</option>
            <option value={3}>Normal</option>
          </select>
        </td>
        <td>
          <div className="btn-group">
            {this.hienThiNutSua()}
            <div className="btn btn-danger sua" onClick={(idUser)=>this.deleteButton(this.props.id)}>
              <i className="fas fa-trash-alt    ">Xóa</i>
            </div>
          </div>
        </td>
      </tr >
    )
  }
  saveInfo = ()=>{
    var info={};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    this.props.truyenDuLieu(info);
    this.thayDoiTrangThaiSua();
  }
  permissionShow = () => {
    
    if (this.props.permission == 1) return 'Admin';
    else if (this.props.permission == 2) return 'Moderator';
    else return 'Normal';
  }
  editClick = () => {
    this.props.editFunClick();
    this.thayDoiTrangThaiSua();
  }
  deleteButton = (idUser)=>{
    this.props.deleteButtonClick(idUser)
  }
  render() {
    //console.log(this.state);
    return (
      
      this.hienThiFormSua()
    );
  }
}

export default TableDataRow;