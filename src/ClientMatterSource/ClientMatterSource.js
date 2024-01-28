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
import "./ClientMatterSource.css";

const clientMatterSourceData = [
  {
    path: "\\ch-fps-pan-p01\\cloudfs\\ch-fps-pan-p01\\databases100\\11181_PUBLI_0001_TAOS_DC",
    office: "CH",
    gb: "12.23",
    deleted: "",
  },
  {
    path: "\\ch-fps-pan-p01\\cloudfs\\ch-fps-pan-p01\\file1000\\111_PRI_0001_TAOS_DC",
    office: "CH",
    gb: "2.93",
    deleted: "",
  },
  {
    path: "\\NY-CFS-SVM-P11\\FILES11$\\10326_IMPER_0002_TFC",
    office: "CH",
    gb: "0.23",
    deleted: "",
  },
];

function clientMatterSourceReducer(state, action) {
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

function ClientMatterSource({ selectedId }) {
  const [state, dispatch] = React.useReducer(clientMatterSourceReducer, {
    column: null,
    data: clientMatterSourceData,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    selectedId && (
      <Table sortable celled fixed compact>
        <TableHeader>
          <TableRow>
            <TableHeaderCell
              width={10}
              sorted={column === "path" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "path" })}
            >
              Path
            </TableHeaderCell>
            <TableHeaderCell
              sorted={column === "office" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "office" })
              }
            >
              Office
            </TableHeaderCell>
            <TableHeaderCell
              sorted={column === "gb" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "gb" })}
            >
              GB
            </TableHeaderCell>
            <TableHeaderCell
              sorted={column === "deleted" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "deleted" })
              }
            >
              Deleted
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jsonData
            ?.filter((item) => item?.id === selectedId)[0]
            ?.networkData?.map(({ deleted, gb, office, path }) => (
              <TableRow key={path}>
                <TableCell>{path}</TableCell>
                <TableCell>{office}</TableCell>
                <TableCell>{gb}</TableCell>
                <TableCell>{deleted}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    )
  );
}

export default ClientMatterSource;
