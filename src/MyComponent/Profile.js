//simple crud  and increment & decrement  use redux-toolkit
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  Add,
  Delete,
  Edit,
  Update,
} from "../Redux/Reducer";

const Profile = () => {
  const count = useSelector((state) => state?.counter?.value);
  const Record = useSelector((state) => state?.counter?.User);
  const object = useSelector((state) => state?.counter?.isEdit);
  const id = useSelector((state) => state?.counter?.id);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    body: "",
    id: "",
  });
  const handleSave = (e) => {
    e.preventDefault();
    var Data = state;
    if (id) {
      dispatch(Update(Data));
    } else {
      dispatch(Add(Data));
    }

    setState({
      ...state,
      Data,
      title: "",
      body: "",
    });
  };
  const handleDelete = (id) => {
    dispatch(Delete(id));
  };
  const handleEdit = (id) => {
    dispatch(Edit(id));
  };
  const handleCancel = () => {
    window.location.href = "localhost:3001";
  };
  useEffect(() => {
    if (object)
      setState({
        ...state,
        title: object?.title,
        body: object?.body,
        id: id,
      });
  }, [object, id]);
  return (
    <div>
      <div>
        <input 
        />
        <h2>{count}</h2>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
        <div>
          <form>
            <input
              type="text"
              value={state.title}
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />
            <br />
            <input
              type="text"
              value={state.body}
              onChange={(e) => setState({ ...state, body: e.target.value })}
            />
            <br />

            {id ? (
              <span>
                <button onClick={(e) => handleSave(e)} type="submit">
                  Save
                </button>
                <button onClick={() => handleCancel()} type="reset">
                  Cancel
                </button>
              </span>
            ) : (
              <button onClick={(e) => handleSave(e)} type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
        <div>
          <center>
            <table border="1px">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {Record?.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                      <td>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                      </td>
                      <td>
                        <button onClick={() => handleEdit(id)}>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Profile;
