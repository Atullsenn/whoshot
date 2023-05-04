import React, { useState, useEffect } from "react";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { Link, useParams } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReactPaginate from "react-paginate";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import axios from "axios";
import { URL } from "../../url/url";
import { toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
// import Avatar from "@mui/material/Avatar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { css } from 'glamor'
import defaultwhoshotpic from "../../images/defaultwhoshotpic.png";
import moment from "moment";




const AllHunters = () => {
  // const id = useParams()
 
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(datas.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


 

  

  //getHunterData
  const getHunterData = () => {
    axios
      .get(URL + "/web/api/getAllHunters", {
        Accept: "Application",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(res, "responseeeeeee")
        setDatas(res.data.hunters);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHunterData();
  }, []);

  


  //Handle Status
  const handleStatus = async(hunter_status, hunterID) => {
    var getStatus = "";
    if (hunter_status === 1) {
      getStatus = '2';
    } else {
      getStatus = '1';
    }

    // console.log(hunter_status+" , "+ hunterID);
    const request = {
      id: hunterID,
      hunter_status: getStatus,
    };

    await axios
      .post(URL + '/web/api/hunterStatus', request)
      .then((res) => {
        if(res){
          getHunterData() 
          toast.success(res.data.message)
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Handle Status


  //Hunter Delete
  

  const hunterDelete = (th) => {
    axios
      .post(URL + "/web/api/hunterDelete", { id: th })
      .then((res) => {
        getHunterData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleremove = (e, th) => {
    const text = "Are you sure want to delete"
    if (window.confirm(text) == true) {
      toast.success("Data deleted successfully");
      hunterDelete(th);
      return true
    } else {
      toast.warn("You cancelled!");
      return false
    }
    
  };
  
  
  

  //Hunter Delete

  return (
    <>
      <div className="page-wrapper" style={{ minHeight: "250px"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="py-2 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="heading-top">
                      <h2>All Hunters</h2>
                    </div>
                  </div>
                  <div>
                    <div className="table-data-search-box-manage">
                      <div className="search-bar">
                        <input
                          type="text"
                          onChange={(e) => setSearch(e.target.value)}
                          className="searchTerm-input"
                          placeholder=" Search Hunter Name"
                        />
                        <button type="submit" className="searchButtons">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {datas.length === 0 ? 

<div className="manage-admins-main-area">
<div className="manage-admins-table-area">
            <table className="table table-column-center" >
  <thead>
    <tr>
    <SkeletonTheme baseColor="#912c00" highlightColor="#777777">
    <th>
      <Skeleton width={150} height={40}/>
    </th>
    <th>
      <Skeleton width={150} height={40}/>
    </th>
    <th>
      <Skeleton width={150} height={40}/>
    </th>
    <th>
      <Skeleton width={150} height={40}/>
    </th>
    <th>
      <Skeleton width={150} height={40}/>
    </th>
    <th>
      <Skeleton width={150} height={40}/>
    </th>

    </SkeletonTheme>

    </tr>
    
  </thead>
  <tbody>
    <tr>
      <td>
        <Skeleton count={5} width={150} height={45}/>
      </td>
      <td>
        <Skeleton count={5} width={45} height={45} circle={true}/>
      </td>
      <td>
        <Skeleton count={5} width={150} height={45}/>
      </td>
      <td>
        <Skeleton count={5} width={150} height={45}/>
      </td>
      <td>
        <Skeleton count={5} width={150} height={45}/>
      </td>
      <td>
        <Skeleton count={5} width={150} height={45}/>
      </td>
    </tr>
  </tbody>
</table>
</div>
</div> : 

              <div className="manage-admins-main-area">
                <div className="manage-admins-table-area">
                  <table className="table table-column-center">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Profile </th>
                        <th> Name </th>
                        <th>Email</th>
                        <th>Total Hunts</th>
                        <th>Date</th>
                        <th>Action</th>
                        <th>Active/Inactive</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datas
                        .filter(
                          (row) =>
                            !search.length ||
                            row.fullName
                              .toString()
                              .toLowerCase()
                              .includes(search.toString().toLowerCase()),
                        )

                        .slice(pagesVisited, pagesVisited + usersPerPage)
                        .map((Item, i) => {
                          return (
                            <tr>
                              <td>{i + pagesVisited + 1}</td>
                              <td>
                                <div className="d-flex align-items-center justify-content-center">
                                  <LazyLoadImage
                                    src={
                                      Item.profile === ""
                                        ? defaultwhoshotpic
                                        : `${URL}/image/${Item.profile}`
                                    }
                                    style={{
                                      width: "45px",
                                      height: "45px",
                                      borderRadius: "50px",
                                    }}
                                    effect="blur"
                                    visibleByDefault={false}
                                  />
                                </div>
                              </td>
                              <td>{Item.userType == "2" ? Item.fullName + "(Guest Hunter)" : Item.fullName + "(Hunter)"}</td>
                              <td>{Item.email}</td>
                              <td>{Item.totalJoinedHunts}</td>
                              <td>{moment(Item.date).format("L")}</td>
                              <td>
                                <Link
                                  to={`/app/all-hunters`}
                                  datalist={Item.id}
                                  onClick={(e) => handleremove(e, Item.id)}
                                >
                                  <DeleteForever style={{ color: "#912c00" }} />
                                </Link>

                                {/* <EditIcon style={{ color: "#912c00" }} /> */}
                                {/* <InfoIcon style={{ color: "#912c00" }} /> */}
                                {
                                  Item.totalJoinedHunts !== 0 ?
                                <Link
                                  to={`/app/hunter-details/${Item.id}`}
                                  className="mange-admins-dlt-btn"
                                >
                                  <i
                                    className="fas fa-eye"
                                    style={{ color: "#912c00" }}
                                  ></i>
                                </Link>
                                :
                                <Link
                                  to={`/app/all-hunters`}
                                  className="mange-admins-dlt-btn"
                                >
                                  <i
                                    className="fas fa-eye"
                                    style={{ color: "#955c00" }}
                                  ></i>
                                </Link>
                        } 
                              </td>

                              <td>
                                <BootstrapSwitchButton
                                  onlabel="Active"
                                  checked={
                                    Item.hunterStatus == "1" ? true : false
                                  }
                                  width={100}
                                  offlabel="Inactive"
                                  onstyle="success"
                                  onChange={(checked) => {
                                    handleStatus(Item.hunterStatus, Item.id);
                                    setStatus(checked);
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <div style={{ display: datas.length > 5 ? "block" : "none" }}>
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>
              </div>
}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer" style={{textAlign: 'center', color: '#912c00', textDecoration: 'underline', letterSpacing: '2px',fontWeight: '500',width:'100%', paddingLeft:'30px'}}>
      © 2023 Who Shot, LLC. All rights reserved.
      </footer>
    </>
  );
};

export default AllHunters;
