import React from "react";
import {
  Button,
  Divider,
  Form,
  FormField,
  FormGroup,
  FormSelect,
  Segment,
  TextArea,
} from "semantic-ui-react";
import "./ClientMatterProfile.css";

import jsonData from "../data/data.json";

const options = [
  { key: "ADM", text: "ALL DIGITAL MATTERS", value: "ALL DIGITAL MATTERS" },
  { key: "AIP", text: "ARCHIVE IN PROGRESS", value: "ARCHIVE IN PROGRESS" },
  { key: "AC", text: "ARCHIVE COMPLETED", value: "ARCHIVE COMPLETED" },
  { key: "AI", text: "ARCHIVE INCOMPLETE", value: "ARCHIVE INCOMPLETE" },
  { key: "AR", text: "ARCHIVE RESTORE", value: "ARCHIVE RESTORE" },
];

const chargedOptions = [
  { key: "y", text: "Yes", value: "Yes" },
  { key: "n", text: "No", value: "No" },
];

const ClientMatterProfile = ({ selectedId }) => {
  let details = {};
  if (selectedId) {
    details = jsonData?.filter((item) => item?.id === selectedId)[0];
  }

  return (
    <div className="ClientMatterProfile">
      <Segment>
        <Form>
          <FormGroup widths="equal">
            <FormField>
              <label>Activity</label>
              <input value={details?.activity} placeholder="Activity" />
            </FormField>
            <FormField>
              <label>DFS</label>
              <input value={details?.dfs} placeholder="DFS" />
            </FormField>
            <FormField>
              <label>Status</label>
              <input value={details?.status} placeholder="Status" />
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>POC</label>
              <input value={details?.poc} placeholder="POC" />
            </FormField>

            <FormField>
              <label>LIT SUP</label>
              <input value={details?.litsup} placeholder="LIT SUP" />
            </FormField>
            <FormField>
              <FormSelect
                fluid
                options={chargedOptions}
                label="Charged"
                placeholder="Charged"
              />{" "}
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>Office</label>
              <input
                placeholder="Office"
                readOnly
                value={details?.office}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Opened</label>
              <input
                placeholder="Opened"
                readOnly
                value={details?.opened}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>Bill Atty</label>
              <input
                placeholder="Bill Atty"
                readOnly
                value={details?.billatty}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Rec Atty</label>
              <input
                placeholder="Rec Atty"
                readOnly
                value={details?.recatty}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Billing</label>
              <input
                placeholder="Billing"
                value={details?.bill}
                readOnly
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
          </FormGroup>
          <FormField
            control={TextArea}
            label="Noted"
            placeholder="More details about client matter..."
          />

          <Divider />
          <Button type="submit">Update</Button>
          <Button type="button">Clear</Button>
        </Form>
      </Segment>
    </div>
  );
};

ClientMatterProfile.propTypes = {};

ClientMatterProfile.defaultProps = {};

export default ClientMatterProfile;
