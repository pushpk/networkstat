import React, { useState } from "react";
import ClientMatterGrid from "../ClientMatterGrid/ClientMatterGrid";
import ClientMatterProfile from "../ClientMatterProfile/ClientMatterProfile";
import ClientMatterSearch from "../ClientMatterSearch/ClientMatterSearch";
import ClientMatterSource from "../ClientMatterSource/ClientMatterSource";
import "./FixedMenuLayout.css";
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
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function FixedMenuLayout() {
  const rowHeaders = ["", "DFS", "DMS", "Total"];
  const [selectedId, setSelectedId] = useState(1);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterName, setFilterName] = useState("");

  const { loading, results, value } = "";

  const renderTooltip = (payload) => {
    console.log(payload.payload[0]?.value);
    return (
      <div className="custom-tooltip">
        <p className="intro">
          DFS : {payload.payload[0]?.value} <br />
          DMS : {payload.payload[1]?.value}
          <br />
          Total : {payload.payload[0]?.value + payload.payload[1]?.value}
        </p>
      </div>
    );
  };

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
            <ClientMatterProfile selectedId={selectedId} />
            <Segment>
              <ResponsiveContainer width="99%" height={300}>
                <BarChart
                  data={jsonData[selectedId - 1 ?? 0].dateData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={renderTooltip} />
                  <Legend />
                  <Bar dataKey="dfs" fill="#8884d8" stackId="total">
                    {/* <LabelList dataKey="dfs" position="middle" /> */}
                  </Bar>
                  <Bar dataKey="dms" fill="#82ca9d" stackId="total">
                    {/* <LabelList dataKey="dms" position="middle" /> */}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Segment>
            {/* 
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
              </Table> </Segment>*/}
          </GridColumn>
        </Grid>
      </Container>
    </div>
  );
}
