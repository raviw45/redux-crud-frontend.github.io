import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetApiAction, DeleteApiAction } from "../redux/action/actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);
  console.log("response data is___________________", responseData);

  const result = responseData.map((data, index) => {
    return (
      <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.country}</td>
        <td>
          <Link to={`/edit/${data.id}`} className="mx-2">
            <EditIcon color="warning" />
          </Link>
          <Button
            onClick={() => {
              dispatch(DeleteApiAction(data.id));
            }}
          >
            <DeleteIcon on color="error" />
          </Button>
        </td>
      </tr>
    );
  });

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux crud operation</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <hr></hr>
      <Button
        variant="contained"
        color="secondary"
        sx={{ color: "#ffff", textTransform: "none" }}
      >
        <Link
          to="/forms"
          style={{
            color: "#ffff",
            fontFamily: "cursive",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          To Insert click here
        </Link>
      </Button>
    </div>
  );
};

export default Home;
