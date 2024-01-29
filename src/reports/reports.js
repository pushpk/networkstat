import React from "react";
import PropTypes from "prop-types";
import "./reports.css";
import {
  Container,
  Dropdown,
  Grid,
  GridColumn,
  Header,
  Image,
  Menu,
  Search,
  Segment,
  Table,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Reports = () => (
  <div className="reports">
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <div id="kandE-logo"></div>

          <Image size="medlaium" src="" style={{ marginRight: "1.5em" }} />
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/home">Home </Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/matters">Matters </Link>
        </Menu.Item>

        <Menu.Item as="a">
          <Link to="/fileshares">File Shares </Link>
        </Menu.Item>

        <Menu.Item as="a">
          {" "}
          <Link to="/events">Events </Link>
        </Menu.Item>
        <Menu.Item as="a">
          {" "}
          <Link to="/reports">Reports </Link>
        </Menu.Item>
        <Dropdown item simple text="Admin">
          <Dropdown.Menu>
            <Dropdown.Item>Grant Access</Dropdown.Item>
            <Dropdown.Item>Users</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Audit Trail</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>{" "}
    <div style={{ texAlign: "left" }}>
      <br />
      <br />
      <br />
      <h2>Reports</h2>
      <a href="" title="Weekly File Share Space Usage Snapshot">
        Weekly File Share Space Usage Snapshot -
      </a>
      List all file shares with sizes, file sizes, and growth from most recent
      network data load.
      <br />
      <a href="" title="File share matter breakout">
        File share matter breakout
      </a>
      Displays all matters that are contained on a file share.
    </div>
  </div>
);

Reports.propTypes = {};

Reports.defaultProps = {};

export default Reports;
