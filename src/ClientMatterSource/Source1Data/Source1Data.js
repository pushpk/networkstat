import React from "react";
import PropTypes from "prop-types";
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
import jsonData from "../../data/data.json";

const Source1Data = ({ selectedId }) => (
  <div className="Source1Data">
    <Table sortable celled fixed compact>
      <TableHeader>
        <TableRow>
          <TableHeaderCell width={10}>Path</TableHeaderCell>
          <TableHeaderCell collapsing>Office</TableHeaderCell>
          <TableHeaderCell collapsing>GB</TableHeaderCell>
          <TableHeaderCell collapsing>Deleted</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonData
          ?.filter((item) => item?.id === selectedId)[0]
          ?.networkData?.map(({ deleted, gb, office, path }) => (
            <TableRow key={path}>
              <TableCell width={10}>{path}</TableCell>
              <TableCell>{office}</TableCell>
              <TableCell>{gb}</TableCell>
              <TableCell>{deleted}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </div>
);

Source1Data.propTypes = {};

Source1Data.defaultProps = {};

export default Source1Data;
