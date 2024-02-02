import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome to the Blood Bank Admin Page, where you have the power to
            oversee and manage critical aspects of our blood donation system.
            This platform empowers you to efficiently handle various tasks
            associated with blood donations, ensuring the seamless operation of
            our blood bank. You can effortlessly update donor records, keeping
            them current and accurate.{" "}
          </p>
          <p>
            One of the key features is the ability to monitor our blood
            inventory closely. With real-time information at your fingertips,
            you can assess the current stock levels, facilitating better
            planning and organization. This ensures that we are always
            well-prepared to meet the demand for blood in times of need.
          </p>
          <p>
            {" "}
            Our user-friendly interface allows you to easily navigate through
            the system, making updates, additions, and modifications as
            necessary. Whether it's adding new donor information or making
            changes to existing records, you have the tools to keep our database
            up-to-date.{" "}
          </p>
          <p>
            Your role in managing this system is crucial to the success of our
            blood bank and, ultimately, to saving lives. By dedicating your
            efforts to maintaining an efficient and organized blood donation
            process, you are contributing significantly to the well-being of our
            community. We extend our sincere gratitude for your commitment to
            this essential service.{" "}
          </p>
          <p>
            Thank you for being an integral part of our blood bank community and
            for helping us make a positive impact on the health and lives of
            those in need. Your work here plays a vital role in our mission to
            ensure a stable and accessible blood supply for the benefit of all.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
