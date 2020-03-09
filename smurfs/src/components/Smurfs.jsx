import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../store/actions";

function Smurfs({ getSmurf, smurfs, error, isFetching }) {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  console.log("PROPS SMURF: ", smurfs);

  return (
    <div>
      <div className="smurf-list">
        {smurfs.map(item => {
          return (
            <div>
              <h1>Name: {item.name}</h1>
              <p>age: {item.age}</p>
              <p>Height: {item.height}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurf })(Smurfs);
