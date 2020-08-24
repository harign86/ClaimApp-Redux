import React,{useEffect} from 'react';
import axios from 'axios';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchClaimList} from '../../store/actions/claimActions.js'

class ViewClaim extends React.Component {
   
 componentDidMount(){
  this.props.dispatch(fetchClaimList());
 }
  
  render() {
    const { error, loading, claimList } = this.props;
    console.log("props" + claimList)
                      if(!loading){
                        return (
     
                          <div >
                            <Header showNav="true" clicked="vclaim" />
                            <main role="main" className="main-content">
                              <div id="viewclaim" className="myDiv container-fluid" >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="table-responsive table--no-card m-b-30">
                                      <table id="tblviewclaim" className="table table-borderless table-striped table-earning"> 
                                        <thead>
                                          <tr>
                                            <th>Employee ID</th>
                                            <th>Employee Name</th>
                                            <th>Claim Number</th>
                                            <th >Claim Type</th>
                                            <th >Claim Program</th>
                                            <th >Claim Start Date</th>
                                            <th >Claim End Date</th>
                                            <th >Update</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {/* {this.state.claimlist}  */}
                                        { 
                                        claimList.map(u =>

                                              <tr>
                                                <td>{u.empId}</td>
                                                <td>{u.empName}</td>
                                                <td>{u.claimNumber}</td>
                                                <td >{u.claimType}</td>
                                                <td >{u.claimProgram}</td>
                                                <td>{u.claimStartDate}</td>
                                                <td>{u.claimEndDate}</td>
                                                <td><Link  to={{pathname: "/update",state:{id: u.id, empId : u.empId,empName:u.empName,claimNumber:u.claimNumber,
                                                claimType:u.claimType,claimProgram:u.claimProgram,claimStartDate:u.claimStartDate,
                                                claimEndDate:u.claimEndDate  }}} >Update </Link></td>
                                              </tr>
                                        )
                                              }
                                          

                                        </tbody>
                                      </table> 

                                    </div>
                                  </div>
                                </div>
                              </div>

                            </main>
                            <Footer  />
                          </div>

                        );
                      }
                      else{
                        return <div>Loading...</div>;
                      }
}
}

const mapStateToProps = (state) =>{
  console.log("state ",state);
  return{
    claimList: state.claim.items,
    loading: state.claim.loading,   
    error: state.claim.error
  };
}

export default connect(mapStateToProps)(ViewClaim);   