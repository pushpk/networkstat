import _ from "lodash";
import React from "react";
import {
  FormField,
  FormSelect,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import jsonData from "../data/data.json";
import "./ClientMatterSource.css";
import { TabPane, Tab } from "semantic-ui-react";
import Source1Data from "../ClientMatterSource/Source1Data/Source1Data";

const panes = (selectedId) => {
  return [
    {
      menuItem: "Data Source 1",
      render: () => (
        <TabPane>
          <Source1Data selectedId={selectedId} />
        </TabPane>
      ),
    },
    {
      menuItem: "Data Source 2",
      render: () => <TabPane>Data Source 2</TabPane>,
    },
    {
      menuItem: "Data Source 3",
      render: () => <TabPane>Data Source 3</TabPane>,
    },
  ];
};

const ClientMatterSource = ({ selectedId }) => (
  <div>
    <Tab panes={panes(selectedId)} />
  </div>
);

export default ClientMatterSource;
