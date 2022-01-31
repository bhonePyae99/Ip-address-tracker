import IpInfo from "./IpInfo";
import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_MAP_API_KEY;
const HeaderSearchBox = ({ setLocation, location }) => {
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      const resp = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${e.target.ipaddress.value}`
      );
      setLocation(resp.data);
    } catch (ex) {
      const errorObj = {};
      errorObj.ipInput = ex.response.data.messages;
      setErrors(errorObj);
    }
  };
  return (
    <div className="container-fulid text-center pt-4 top position-relative">
      <div className="row justify-content-center">
        <div className="col-md-5 col-10">
          <h2 className="fw-bold text-light">Ip Address Tracker</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group input-group-lg rounded rounded-3 mt-3">
              <input
                type="text"
                name="ipaddress"
                className={
                  Object.keys(errors).length === 0
                    ? "form-control"
                    : "form-control is-invalid"
                }
                aria-label="Dollar amount (with dot and two decimal places)"
              />
              <button className="btn btn-dark" type="submit">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            {Object.keys(errors).length !== 0 && (
              <div className="text-danger mt-2">{errors.ipInput}</div>
            )}
          </form>
        </div>
      </div>
      {Object.keys(location).length !== 0 && <IpInfo />}
    </div>
  );
};

export default HeaderSearchBox;
