import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state={
      tempValue:''
    }
  }
  isChange = (event)=>{
    //console.log(event.target.value);
    this.setState(
      {
        tempValue: event.target.value
      }
    );
    this.props.check(this.state.tempValue)
  }
  render() {
   // console.log(this.props.check());
    return (
      <div className="col-12">
        <div className="form-group">
          <div className="btn-group">
            <input id="my-input" onChange={(event)=>this.isChange(event)} className="form-control" type="text" placeholder="Nhập từ khóa" style={{ width: '100%', maxWidth: '1000px' }} />
            <button type="button" className="btn btn-primary" onClick={(dl)=>this.props.check(this.state.tempValue)} style={{ width: '200px' }}>Tìm Kiếm</button>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchForm;