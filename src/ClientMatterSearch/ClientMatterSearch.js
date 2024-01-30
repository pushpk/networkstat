import React, { Component } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  Button,
  Divider,
  Form,
  FormField,
  FormGroup,
  FormInput,
  FormSelect,
  Icon,
} from "semantic-ui-react";
import "./ClientMatterSearch.css";

const options = [
  {
    key: "ADM",
    text: "ALL",
    value: "ALL DIGITAL MATTERS",
    title: "ALL DIGITAL MATTERS",
  },
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

const officeOptions = [
  { key: "ALL", text: "ALL", value: "ALL" },
  { key: "CH", text: "Chicago, USA", value: "Chicago" },
  { key: "NY", text: "New York, USA", value: "New York" },
  { key: "LA", text: "Los Angeles, USA", value: "Los Angeles" },
  { key: "SF", text: "Washington DC, USA", value: "Washington DC" },
  { key: "LN", text: "London, UK", value: "London" },
  { key: "DE", text: "Munich, GE", value: "Munich" },
];

const panels = [
  {
    key: "details",
    title: "Advanced Search",
    content: {
      as: FormSelect,
      label: "Office",
      placeholder: "Office",
      options: officeOptions,
    },
  },
];

export default class ClientMatterSearch extends Component {
  state = { activeIndex: 0 };

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  resetForm = () => {
    this.props.setFilterStatus("ALL DIGITAL MATTERS");
    this.props.setFilterName("");
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="ClientMatterSearch">
        <Form>
          <FormGroup widths={"equal"}>
            <FormField>
              <FormSelect
                ref="statusSearch"
                fluid
                label="Status"
                options={options}
                placeholder="Status"
                onChange={(e, { value }) =>
                  value === "ALL DIGITAL MATTERS"
                    ? this.props.setFilterStatus("all")
                    : this.props.setFilterStatus(value?.toString())
                }
                value={this.props.filterStatus}
              />{" "}
            </FormField>
            <FormField>
              <label>Client/Matter Name</label>
              <input
                ref="cmNameSearch"
                onChange={(e) =>
                  this.props.setFilterName(e.target.value?.toLocaleLowerCase())
                }
                value={this.props.filterName}
                placeholder="Client/Matter Name"
              />
            </FormField>
          </FormGroup>
          <Accordion>
            <AccordionTitle
              active={activeIndex === 0}
              index={0}
              onClick={this.handleAccordionClick}
            >
              <Icon name="dropdown" />
              Advanced Search
            </AccordionTitle>
            <AccordionContent active={activeIndex === 0}>
              <FormField>
                <FormSelect
                  ref="officeSearch"
                  fluid
                  options={officeOptions}
                  placeholder="Office"
                />{" "}
              </FormField>

              <FormGroup widths="equal">
                <FormInput fluid placeholder="Min GB" />
                <FormInput fluid placeholder="Max GB" />
              </FormGroup>
              <FormGroup widths="equal">
                <FormInput fluid placeholder="Min +/-" />
                <FormInput fluid placeholder="Max +/-" />
              </FormGroup>
              <FormGroup widths="equal">
                <FormInput fluid placeholder="Client Number" />
                <FormInput fluid placeholder="Matter Number" />
              </FormGroup>
            </AccordionContent>
          </Accordion>

          <div></div>
          <Divider />
          <Button type="reset" onClick={this.resetForm}>
            Reset
          </Button>
        </Form>
      </div>
    );
  }
}
