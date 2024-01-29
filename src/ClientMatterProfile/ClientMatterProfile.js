import React from "react";
import {
  Button,
  Divider,
  Form,
  FormField,
  FormGroup,
  FormSelect,
  Message,
  MessageHeader,
  Segment,
  TextArea,
} from "semantic-ui-react";
import "./ClientMatterProfile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsonData from "../data/data.json";

const options = [
  {
    key: "ADM",
    text: "ALL",
    value: "ALL DIGITAL MATTERS",
    title: "ALL DIGITAL MATTERS",
  },
  {
    key: "AIP",
    text: "ARCHIVE IN PROGRESS",
    value: "ARCHIVE IN PROGRESS",
    title: "ARCHIVE IN PROGRESS",
  },
  {
    key: "AC",
    text: "ARCHIVE COMPLETED",
    value: "ARCHIVE COMPLETED",
    title: "ARCHIVE COMPLETED",
  },
  {
    key: "AI",
    text: "ARCHIVE INCOMPLETE",
    value: "ARCHIVE INCOMPLETE",
    title: "ARCHIVE INCOMPLETE",
  },
  {
    key: "AR",
    text: "ARCHIVE RESTORE",
    value: "ARCHIVE RESTORE",
    title: "ARCHIVE RESTORE",
  },
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

  const notify = () => toast.success("Update Success!");

  return (
    <div className="ClientMatterProfile">
      <Segment>
        <Form>
          <FormGroup widths="equal">
            <FormField>
              <label>Activity</label>
              <input defaultValue={details?.activity} placeholder="Activity" />
            </FormField>
            <FormField>
              <label>DFS</label>
              <input defaultValue={details?.dfs} placeholder="DFS" />
            </FormField>
            <FormField>
              <FormSelect
                fluid
                label="Status"
                options={options}
                placeholder="Status"
                defaultValue={details?.status}
              />
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>POC</label>
              <input defaultValue={details?.poc} placeholder="POC" />
            </FormField>

            <FormField>
              <label>LIT SUP</label>
              <input defaultValue={details?.litsup} placeholder="LIT SUP" />
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
            <FormField>
              <label>Closed</label>
              <input
                placeholder="Closed"
                readOnly
                value={details?.closed}
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
            label="Notes"
            value={details?.notes}
            placeholder="More details about client matter..."
          />

          <Divider />
          <Button type="submit" color="green" onClick={notify}>
            Update
          </Button>
          <Button type="button">Clear</Button>
          <ToastContainer position="bottom-right" />
        </Form>
      </Segment>
    </div>
  );
};

ClientMatterProfile.propTypes = {};

ClientMatterProfile.defaultProps = {};

export default ClientMatterProfile;
