import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContactsStart, deleteContactStart } from "../redux/actions";
import { NavLink } from "react-router-dom";


const ListRecord = () => {
  // const [data, setData] = useState({});
  const { contacts: data } = useSelector((state) => state.data);
  // console.log("data", data);
  // console.log("state", state);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsStart());
  }, []);

  // useEffect(() => {
  //   firebaseDb.child("contacts").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setData({
  //         ...snapshot.val(),
  //       });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteContactStart(id));
      dispatch(getContactsStart());
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-2">Team Member</h1>
              <NavLink to="/add" className="btn" style={{ color: "white" , background:"blue"}}>
          Add Member+
        </NavLink>
            </div>
            
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Company</th>
                  <th scope="col">Status</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].company}</td>
                      <td>{data[id].status}</td>
                      <td>{data[id].notes}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil-alt" />
                          </p>
                        </Link>

                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </p>
                        <Link to={`/view/${id}`}>
                          <p className="btn text-info">
                            <i className="fas fa-eye" />
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
