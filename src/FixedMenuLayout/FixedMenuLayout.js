import React from "react";
import ClientMatterGrid from "../ClientMatterGrid/ClientMatterGrid";
import ClientMatterSearch from "../ClientMatterSearch/ClientMatterSearch";
import ClientMatterProfile from "../ClientMatterProfile/ClientMatterProfile";
import ClientMatterSource from "../ClientMatterSource/ClientMatterSource";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Message,
  Table,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  GridColumn,
  FormField,
  Button,
  Checkbox,
  Form,
  FormSelect,
  Accordion,
  FormInput,
  AccordionTitle,
  AccordionContent,
  Icon,
  FormGroup,
  Search,
} from "semantic-ui-react";

export default function FixedMenuLayout() {
  const rowHeaders = ["", "DFS", "DMS", "Total"];

  const { loading, results, value } = "";

  const CMDataDetails = [
    {
      month: "Jan 24",
      DMS: 1.25,
      DFS: 1.5,
      Total: 2.75,
    },
    {
      month: "Dec 23",
      DMS: 1.1,
      DFS: 1.2,
      Total: 2.3,
    },
    {
      month: "Nov 24",
      DMS: 1.25,
      DFS: 0,
      Total: 1.25,
    },
    {
      month: "Oct 24",
      DMS: 1.0,
      DFS: 0,
      Total: 1.0,
    },
    {
      month: "Sep 24",
      DMS: 1.25,
      DFS: 1.5,
      Total: 2.75,
    },
    {
      month: "Aug 24",
      DMS: 0.75,
      DFS: 0.2,
      Total: 0.95,
    },
    {
      month: "Jul 24",
      DMS: 0.75,
      DFS: 0.2,
      Total: 0.95,
    },
  ];

  const columnKeys = Object.keys(CMDataDetails[1]);

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <div id="kandE-logo"></div>

            <Image size="medlaium" src="" style={{ marginRight: "1.5em" }} />
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Item as="a">Matters</Menu.Item>
          <Menu.Item as="a">File Shares</Menu.Item>
          <Menu.Item as="a">Events</Menu.Item>
          <Menu.Item as="a">Reports</Menu.Item>
          <Dropdown item simple text="Admin">
            <Dropdown.Menu>
              <Dropdown.Item>Grant Access</Dropdown.Item>
              <Dropdown.Item>Users</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Audit Trail</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Search loading={loading} placeholder="Search..." />
          </Menu.Item>
        </Container>
      </Menu>

      <Container fluid style={{ padding: "5em" }}>
        <Header as="h2"></Header>
        <Grid>
          <GridColumn width={6}>
            <Segment attached="top">
              <ClientMatterSearch />
            </Segment>

            <ClientMatterGrid />

            <div>
              <ClientMatterSource />
            </div>
          </GridColumn>

          <GridColumn width={10}>
            <Segment>
              <Header as="h3">Client Matter</Header>
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
                    {CMDataDetails.map((CMDataDetail) =>
                      index == 0 ? (
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
                      )
                    )}
                  </Table.Row>
                ))}
              </Table>
            </Segment>
            <ClientMatterProfile />
          </GridColumn>
        </Grid>
      </Container>
    </div>
  );
}
