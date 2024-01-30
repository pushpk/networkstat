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

const statusOptions = [
  {
    key: "Active",
    text: "Active",
    value: "Active",
    title: "Active",
  },
  {
    key: "Queue",
    text: "Archive Queue",
    value: "Archive Queue",
    title: "Archive Queue",
  },
  {
    key: "Pending",
    text: "Archive Pending",
    value: "Archive Pending",
    title: "Archive Pending",
  },
  {
    key: "Complete",
    text: "Archive Complete",
    value: "Archive Complete",
    title: "Archive Complete",
  },
  {
    key: "Restore",
    text: "Archive Restore",
    value: "Archive Restore",
    title: "Archive Restore",
  },
  {
    key: "BillingException",
    text: "Billing Exception",
    value: "Billing Exception",
    title: "Billing Exception",
  },
  {
    key: "Return",
    text: "Return to Client",
    value: "Return to Client",
    title: "Return to Client",
  },
  {
    key: "DispositionApproved",
    text: "Disposition Approved",
    value: "Disposition Approved",
    title: "Disposition Approved",
  },
  {
    key: "DataDispositioned",
    text: "Data Dispositioned",
    value: "Data Dispositioned",
    title: "Data Dispositioned",
  },
];

const chargebackStatusOptions = [
  { key: "y", text: "Chargeable", value: "chargeable" },
  { key: "n", text: "No Charge", value: "nochargeable " },
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
              <FormSelect
                fluid
                label="Matter Chargeback Status"
                options={chargebackStatusOptions}
                placeholder="Matter Chargeback Status"
                value={details?.status}
              />
            </FormField>
            <FormField>
              <FormSelect
                fluid
                label="Data Status"
                options={statusOptions}
                placeholder="Data Status"
                value={details?.status}
              />
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>PO Status</label>
              <input
                placeholder="PO Status"
                value={details?.bill}
                readOnly
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Matter Type</label>
              <input
                value={details?.matterType}
                placeholder="Matter Type"
                readOnly
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Matter Office</label>
              <input
                value={details?.office}
                placeholder="Matter Office"
                readOnly
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>RMA Name, Office, Status</label>
              <input
                placeholder="RMA Name, Office, Status"
                readOnly
                value={details?.recatty}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>SCA Name, Office, Status</label>
              <input
                placeholder="SCA Atty"
                readOnly
                value={details?.scatty}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Billing Attorney, Status</label>
              <input
                placeholder="Billing Attorney, Status"
                readOnly
                value={details?.billatty}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <FormField>
              <label>Matter Open Date</label>
              <input
                placeholder="Matter Open Date"
                readOnly
                value={details?.opened}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Matter Close Date</label>
              <input
                placeholder="Matter Close Date"
                readOnly
                value={details?.closed}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Elite 3E Status</label>
              <input
                placeholder="Matter Close Date"
                readOnly
                value={details?.estatus}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Rollup Matter Status</label>
              <input
                placeholder="Rollup Matter Status"
                readOnly
                value={details?.rollupmatter}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
            <FormField>
              <label>Matter Retention Date</label>
              <input
                placeholder="Matter Retention Date"
                readOnly
                value={details?.matterRetDate}
                className="ClientMatterProfileInputGrey"
              />
            </FormField>
          </FormGroup>

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
