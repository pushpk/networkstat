import _ from "lodash";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";

import jsonData from "../data/data.json";

const cmData = [
  {
    id: 1,
    client: 10326.0,
    matter: "0002",
    clientname: "f",
    mattername: "f",
    office: "CH",
    bill: "CLOSED",
    gb: 100.04,
    pn: 1.0,
    activity: "a",
    status: "Completed",
    dateData: [{}],
  },
  {
    id: 2,
    client: 10341.0,
    matter: "0004",
    office: "CH",
    bill: "CLOSED",
    gb: 0.01,
    pn: 1.0,
  },
  {
    id: 3,
    client: 10585.0,
    matter: "0005",
    office: "NY",
    bill: "CLOSED",
    gb: 1.19,
    pn: 1.0,
  },
  {
    id: 4,
    client: 10670.0,
    matter: "0018",
    office: "CH",
    bill: "CLOSED",
    gb: 1.0,
    pn: 1.0,
  },
  {
    id: 5,
    client: 10930.0,
    matter: "0001",
    office: "NY",
    bill: "CLOSED",
    gb: 1.0,
    pn: 1.0,
  },
  {
    id: 6,
    client: 10987.0,
    matter: "0002",
    office: "CH",
    bill: "CLOSED",
    gb: 1.39,
    pn: 1.0,
  },
  {
    id: 7,
    client: 11012.0,
    matter: "0032",
    office: "DC",
    bill: "CLOSED",
    gb: 1.0,
    pn: 1.0,
  },
  {
    id: 8,
    client: 11012.0,
    matter: "0144",
    office: "NY",
    bill: "CLOSED",
    gb: 1.0,
    pn: 1.0,
  },
  {
    id: 9,
    client: 11054.0,
    matter: "0004",
    office: "SF",
    bill: "CLOSED",
    gb: 284.9,
    pn: 1.0,
  },
  {
    id: 10,
    client: 11181.0,
    matter: "0001",
    office: "UK",
    bill: "CLOSED",
    gb: 261.31,
    pn: 1.0,
  },
];

function exampleReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

function handleRowClick(id) {
  console.log(id);
}

function ClientMatterGrid({ setSelectedId, filterStatus, filterName }) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: cmData,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <Table sortable celled fixed compact selectable className="cmGrid">
      <TableHeader>
        <TableRow>
          <TableHeaderCell
            sorted={column === "client" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "client" })}
          >
            CMID
          </TableHeaderCell>
          <TableHeaderCell
            sorted={column === "office" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "office" })}
          >
            Office
          </TableHeaderCell>
          <TableHeaderCell
            sorted={column === "bill" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "bill" })}
          >
            Bill
          </TableHeaderCell>

          <TableHeaderCell
            sorted={column === "gb" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "gb" })}
          >
            GB
          </TableHeaderCell>

          <TableHeaderCell
            sorted={column === "pn" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "pn" })}
          >
            +/-
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonData
          ?.filter((item) =>
            filterStatus === "all"
              ? true
              : item?.status?.toLocaleLowerCase() === filterStatus
          )
          ?.filter((item) =>
            !filterName
              ? true
              : item?.mattername?.toLocaleLowerCase()?.includes(filterName) ||
                item?.clientname?.toLocaleLowerCase()?.includes(filterName)
          )
          ?.map(({ id, client, matter, office, bill, gb, pn }) => (
            <TableRow
              key={id}
              // onClick={() => {
              //   handleRowClick(id);
              // }}
              onClick={() => setSelectedId(id)}
            >
              <TableCell>
                {client}-{matter}
              </TableCell>
              <TableCell>{office}</TableCell>
              <TableCell>{bill}</TableCell>
              <TableCell>{gb}</TableCell>
              <TableCell>{pn}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ClientMatterGrid;
