import React, { useState } from "react";
import ClientMatterGrid from "../ClientMatterGrid/ClientMatterGrid";
import ClientMatterProfile from "../ClientMatterProfile/ClientMatterProfile";
import ClientMatterSearch from "../ClientMatterSearch/ClientMatterSearch";
import ClientMatterSource from "../ClientMatterSource/ClientMatterSource";

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
import jsonData from "../data/data.json";
import { Link } from "react-router-dom";

export default function FixedMenuLayout() {
  const rowHeaders = ["", "DFS", "DMS", "Total"];
  const [selectedId, setSelectedId] = useState(1);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterName, setFilterName] = useState("");

  const { loading, results, value } = "";

  let selectedCmDetail = {};
  if (selectedId) {
    selectedCmDetail = jsonData?.filter((item) => item?.id === selectedId)[0];
  }

  const columnKeys = Object.keys(jsonData[0]?.dateData[0]);
  return (
    <div>
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

          <Menu.Item>
            <Search
              value={filterName}
              onSearchChange={(e) => setFilterName(e?.target?.value)}
              loading={loading}
              placeholder="Search..."
            />
          </Menu.Item>
        </Container>
      </Menu>

      <Container fluid style={{ padding: "5em" }}>
        <Header as="h2"></Header>
        <Grid>
          <GridColumn width={6}>
            <Segment attached="top">
              <ClientMatterSearch
                setFilterStatus={setFilterStatus}
                filterStatus={filterStatus}
                setFilterName={setFilterName}
                filterName={filterName}
              />
            </Segment>

            <ClientMatterGrid
              filterStatus={filterStatus}
              setSelectedId={setSelectedId}
              filterName={filterName}
            />

            <div>
              <ClientMatterSource selectedId={selectedId} />
            </div>
          </GridColumn>

          <GridColumn width={10}>
            <Segment>
              <Header as="h3">
                {selectedCmDetail?.clientname} - {selectedCmDetail?.mattername}{" "}
                ({selectedCmDetail?.client}-{selectedCmDetail?.matter})
              </Header>
            </Segment>
            <Segment>
              <Table
                attached="top"
                basic
                verticalAlign="top"
                style={{ "overflow-x": "scroll" }}
              >
                {rowHeaders.map((header, index) => (
                  <Table.Row key={header}>
                    <Table.HeaderCell bold style={{ "padding-left": "10px" }}>
                      {header}
                    </Table.HeaderCell>
                    {jsonData
                      ?.filter((item) => item?.id === selectedId)[0]
                      ?.dateData.map((CMDataDetail) => {
                        console.log("CMDataDetail", columnKeys);
                        return index === 0 ? (
                          <Table.Cell
                            style={{ "font-weight": "bold" }}
                            key={CMDataDetail.id}
                          >
                            {CMDataDetail[columnKeys[index]]}
                          </Table.Cell>
                        ) : (
                          <Table.Cell key={CMDataDetail.id}>
                            {CMDataDetail[columnKeys[index]]}
                          </Table.Cell>
                        );
                      })}
                  </Table.Row>
                ))}
              </Table>
            </Segment>
            <ClientMatterProfile selectedId={selectedId} />
          </GridColumn>
        </Grid>
      </Container>
    </div>
  );
}
