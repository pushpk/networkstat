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
    key: "AIP",
    text: "IN PROGRESS",
    value: "ARCHIVE IN PROGRESS",
    title: "ARCHIVE IN PROGRESS",
  },
  {
    key: "AC",
    text: "COMPLETED",
    value: "ARCHIVE COMPLETED",
    title: "ARCHIVE COMPLETED",
  },
  {
    key: "AI",
    text: "INCOMPLETE",
    value: "ARCHIVE INCOMPLETE",
    title: "ARCHIVE INCOMPLETE",
  },
  {
    key: "AR",
    text: " RESTORE",
    value: "ARCHIVE RESTORE",
    title: "ARCHIVE RESTORE",
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

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="ClientMatterSearch">
        <Form>
          <FormGroup widths={"equal"}>
            <FormField>
              <FormSelect
                fluid
                label="Status"
                options={options}
                placeholder="Status"
                onChange={(e, { value }) =>
                  value === "ALL DIGITAL MATTERS"
                    ? this.props.setFilterStatus("all")
                    : this.props.setFilterStatus(
                        value?.split(" ")[1]?.toLowerCase()
                      )
                }
              />{" "}
            </FormField>
            <FormField>
              <label>Client/Matter Name</label>
              <input
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
          <Button type="submit">Search</Button>
          <Button type="button">Reset</Button>
        </Form>
      </div>
    );
  }
}
