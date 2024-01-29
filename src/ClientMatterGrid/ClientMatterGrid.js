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

function ClientMatterGrid({ setSelectedId, filterStatus, filterName }) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: jsonData,
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
        {data
          ?.filter((item) =>
            filterStatus === "all"
              ? true
              : item?.status?.toString() === filterStatus
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
