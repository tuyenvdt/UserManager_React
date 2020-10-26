import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="card border-primary bg-warning mt-3">
                    <form>
                        <div className="card-body">
                            <h4 className="card-title">Sửa User</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="name">Tên User</label>
                                <input name="name" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tel">Số Điện Thoại</label>
                                <input name="tel" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="my-select">Chọn Quyền</label>
                                <select id="my-select" name="permission" onChange={(event) => this.isChange(event)} className="form-control">
                                    <option>Chọn quyền mặc định</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Moderator</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) =>
                                    this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default EditUser;