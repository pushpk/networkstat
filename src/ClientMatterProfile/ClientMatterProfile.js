import React from "react";
import PropTypes from "prop-types";
import {
  FormField,
  Button,
  Segment,
  Form,
  FormSelect,
  Accordion,
  FormInput,
  AccordionTitle,
  AccordionContent,
  Icon,
  FormGroup,
  Divider,
  Checkbox,
  TextArea,
} from "semantic-ui-react";
import "./ClientMatterProfile.css";

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

const ClientMatterProfile = () => (
  <div className="ClientMatterProfile">
    <Segment>
      <Form>
        <FormGroup widths="equal">
          <FormField>
            <label>Activity</label>
            <input placeholder="Activity" />
          </FormField>
          <FormField>
            <label>DFS</label>
            <input placeholder="DFS" />
          </FormField>
          <FormField>
            <label>Status</label>
            <input placeholder="Status" />
          </FormField>
        </FormGroup>

        <FormGroup widths="equal">
          <FormField>
            <label>POC</label>
            <input placeholder="POC" />
          </FormField>

          <FormField>
            <label>LIT SUP</label>
            <input placeholder="LIT SUP" />
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
              className="ClientMatterProfileInputGrey"
            />
          </FormField>
          <FormField>
            <label>Opened</label>
            <input
              placeholder="Opened"
              readOnly
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
              className="ClientMatterProfileInputGrey"
            />
          </FormField>
          <FormField>
            <label>Rec Atty</label>
            <input
              placeholder="Rec Atty"
              readOnly
              className="ClientMatterProfileInputGrey"
            />
          </FormField>
          <FormField>
            <label>Billing</label>
            <input
              placeholder="Billing"
              value="Closed"
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

ClientMatterProfile.propTypes = {};

ClientMatterProfile.defaultProps = {};

export default ClientMatterProfile;
