import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import TableData from './Components/TableData';
import AddUser from './Components/AddUser';
import Data from './Components/Data';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchText: ''
    }
  }
  
  componentWillMount() {
    // kiểm tra xem co localStorge chưa
    if(localStorage.getItem('data') === null){
      localStorage.setItem('data', JSON.stringify(Data));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('data'));
      this.setState({
        data:temp
      });
    }
  }
  
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    // console.log('Dữ liệu nhận được là : ' + dl);
  }

  getNewUserData = (name, tel, permission) => {
    // pakage ti item
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    // console.log(item);
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('data', JSON.stringify(items))
  }

  editUser = (user) => {
    console.log(user);
  }
  getUserEditInfoApp = (info) => {
    console.log(info);

    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id === info.id) {
        this.state.data[i].name = info.name;
        this.state.data[i].tel = info.tel;
        this.state.data[i].permission = info.permission;
      }
      localStorage.setItem('data', JSON.stringify(this.state.data))
      // this.setState({
      //   value: this.state.data[i]
      // })
    }
  }
  deleteUser = (idUser) => {

    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    });
    localStorage.setItem('data', JSON.stringify(tempData))
  }
  render() {
    //console.log(Data);
    //localStorage.setItem('userData',JSON.stringify(Data));
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    //console.log(ketqua);

    return (

      <Fragment>
        <div>
          <Header></Header>
        </div>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm check={(dl) => this.getTextSearch(dl)}></SearchForm>
              <TableData
                truyenDuLieuApp={(info) => this.getUserEditInfoApp(info)}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketqua}
                deleteUser={(idUser) => this.deleteUser(idUser)}
              ></TableData>
              <AddUser add={(name, tel, permission) => this.getNewUserData(name, tel, permission)}></AddUser>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
