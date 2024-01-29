import React from "react";
import PropTypes from "prop-types";
import "./events.css";
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

const Events = () => (
  <div className="events">
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
    <Segment style={{ padding: "5em 10em", marginTop: "7em" }}>
      <h2>Events Table</h2>
    </Segment>
  </div>
);

Events.propTypes = {};

Events.defaultProps = {};

export default Events;
