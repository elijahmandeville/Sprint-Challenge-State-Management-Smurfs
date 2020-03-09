import React, { useState } from "react";
import { addSmurf } from "../store/actions";
import { connect } from "react-redux";

function SmurfsForm({ addSmurf }) {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(smurf);
    addSmurf(smurf);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={smurf.name}
          onChange={handleChange}
        />
        <input
          name="age"
          type="text"
          value={smurf.age}
          onChange={handleChange}
        />
        <input
          name="height"
          type="text"
          value={smurf.height}
          onChange={handleChange}
        />
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
}

export default connect(null, { addSmurf })(SmurfsForm);
