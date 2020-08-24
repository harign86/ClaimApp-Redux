import React from 'react';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import axios from 'axios';

class UpdateClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state={cUpdated: false,isformValid : true,invalidclmno:true,invalidclmpgm:true,invalidstrdate:true,invalidenddate:true};
    this.handleUpdate = this.handleUpdate.bind(this);
  }
validateForm(){
  for (const field in this.refs) {
    console.log(field);
    formData[field] = this.refs[field].value;
  }
  if(formData.claimnumber == ''){
    this.setState({invalidclmno:false});
    this.setState({isformValid:false});
  } 
  if(formData.clmpgm == ''){
    this.setState({invalidclmpgm:false});
    this.setState({isformValid:false});
  } 
  if(formData.startdate == ''){
    this.setState({invalidstrdate:false});
    this.setState({isformValid:false});
  } 
  if(formData.enddate == ''){
    this.setState({invalidenddate:false});
    this.setState({isformValid:false});
  } 
}
  handleUpdate(e) {
    e.preventDefault();
    validateForm();
    if(this.state.isformValid)
    {
        const claim = this.state.claim;
        this.SaveClaim(claim);
    }
  }
  SaveClaim(claim){
    const params ={
      empId : claim.empId,
      empName : claim.empName,
      claimNumber : this.refs['claimnumber'].value,
      claimType : this.refs['clmType'].value,
      claimProgram : this.refs['clmpgm'].value,
      claimStartDate : this.refs['startdate'].value,
      claimEndDate : this.refs['enddate'].value
    }
    //console.log('http://localhost:7000/claims/',+ JSON.stringify(this.props.location.state.id));
    const resp = axios.put('http://localhost:7000/claims/'+ this.props.location.state.id, params)
    .then(resp =>{
      this.setState({cUpdated:true});
    });
  }
  componentDidMount () {
    const { claimSummary } = this.props.location.state;
    this.setState({ claim : this.props.location.state });
    console.log(this.props.location.state);
  }
  render() {
   
    return (
    <div>
          <Header showNav="true" clicked="uclaim" />
      <main role="main" className="main-content">
        <div id="updateclaim" className="form container" >
          <form  onSubmit={this.handleUpdate}>
            <div className="form-group">
              <label htmlFor="usr">Claim Number:</label>
              <input ref="claimnumber" type="text" defaultValue={this.props.location.state.claimNumber} className="form-control" id="inclmno" />
              <         div  hidden={this.state.invalidclmno}>
                        <small  class="text-danger"> claim number is required </small>      
                      </div>
            </div>
            <div className="form-group">
              <label htmlFor="usr">Claim Type:</label>
              {/* <input type="text" defaultValue={this.props.location.state.claimType} className="form-control" id="inclmtype" /> */}
              <select id="clmtype" ref="clmType" className="form-control" value={this.props.location.state.claimType}>
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Submitted">Submitted</option>
                <option value="Recieved">Recieved</option>
                <option value="Denied">Denied</option>
                <option value="Rejected">Rejected</option>
              </select>
                      
            </div>
            <div className="form-group">
              <label htmlFor="usr">Claim Program:</label>
              <input ref="clmpgm" type="text" defaultValue={this.props.location.state.claimProgram} className="form-control" id="inclmprg" />
                      <div  hidden={this.state.invalidclmpgm}>
                        <small  class="text-danger"> Claim program is required </small>      
                      </div>
            </div>
            <div className="form-group">
              <label htmlFor="usr">Claim Start Date:</label>
              <input ref="startdate" type="date" defaultValue={this.props.location.state.claimStartDate} className="form-control" id="instartdate" />
                      <div  hidden={this.state.invalidstrdate}>
                        <small  class="text-danger"> Start date is required </small>      
                      </div>
            </div>
            <div className="form-group">
              <label htmlFor="usr">Claim End Date:</label>
              <input ref="enddate" type="date" defaultValue={this.props.location.state.claimEndDate} className="form-control" id="inenddate" />
                        <div  hidden={this.state.invalidenddate}>
                        <small  class="text-danger"> End date is required </small>      
                      </div>
            </div>
            {this.state.cUpdated == false ? (
            <div id="submitclaim" >
             <button type="submit" className="btn btn-outline-success my-2 my-sm-0"  >Update</button>
             
             <button type="button" className="btn btn-outline-success my-2 my-sm-0">Cancel</button>
            </div>
            ):(
            <div id="alert" className="alert alert-success" role="alert">
              Claim updated successfully <a href="#" className="alert-link">Go back to Home</a>
            </div>
            )
            }
          </form>
        </div>
       </main>
        <Footer  />
    </div>
    );
  }
}

export default UpdateClaim;   