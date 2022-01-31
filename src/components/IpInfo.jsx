import { useContext } from "react";
import IpContext from "../context/IpContext";
const IpInfo = () => {
  const { location } = useContext(IpContext);
  return (
    <div
      className="container position-absolute bg-light shadow top-100 start-50 translate-middle p-3 rounded-3 ipInfo"
      style={{ zIndex: "500" }}
    >
      <div className="row">
        <div className="col-md-3 text-md-start">
          <p className="text-muted fw-bold m-0">
            <small>IP ADDRESS</small>
          </p>
          <h3 className="fw-bold">{location.ip}</h3>
        </div>
        <div className="col-md-3 text-md-start">
          <p className="text-muted fw-bold m-0">
            <small>LOCATION</small>
          </p>
          <h3 className="fw-bold">
            {location.location.region}, {location.location.country}
          </h3>
        </div>
        <div className="col-md-3 text-md-start">
          <p className="text-muted fw-bold m-0">
            <small>TIMEZONE</small>
          </p>
          <h3 className="fw-bold">{location.location.timezone}</h3>
        </div>
        <div className="col-md-3 text-md-start">
          <p className="text-muted fw-bold m-0">
            <small>ISP</small>
          </p>
          <h3 className="fw-bold">{location.isp}</h3>
        </div>
      </div>
    </div>
  );
};

export default IpInfo;
