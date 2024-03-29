import React from "react";
import PropTypes from "prop-types";
import "./fileshare.css";
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

const Fileshare = () => (
  <div className="fileshare">
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
        <Dropdown item simple text="Source">
          <Dropdown.Menu>
            <Dropdown.Item>Data Source 1</Dropdown.Item>
            <Dropdown.Item>Data Source 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Data Source 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
    <Segment style={{ padding: "5em 10em", marginTop: "7em" }}>
      <h2>File Share Table</h2>
    </Segment>
  </div>
);

Fileshare.propTypes = {};

Fileshare.defaultProps = {};

export default Fileshare;
