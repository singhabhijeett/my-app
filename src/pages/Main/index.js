import React, { Component } from "react";

import { Container } from "../../components/container";
import { Section } from "../../components/section";
import { Form, Button } from 'antd';
import Select from "../../components/select";

// styled components
//

class Main extends Component {
  state = {
    source: {
      domain: [
        {
          id: 1,
          name: "IMS"
        },
        {
          id: 2,
          name: "Domain 2"
        },
        {
          id: 3,
          name: "Domain 3"
        }
      ],
      comps: [
        {
          id: 1,
          name: "ASBC",
          domain: 1
        },
        {
          id: 2,
          name: "CFX",
          domain: 1
        },
        {
          id: 3,
          name: "NTAS",
          domain: 1
        },
        {
          id: 4,
          name: "ISBC",
          domain: 1
        },
        {
          id: 5,
          name: "MNO-ISBC",
          domain: 1
        },
        {
          id: 6,
          name: "PA-ISBC",
          domain: 1
        },
        {
          id: 6,
          name: "STP",
          domain: 1
        },
        {
          id: 6,
          name: "DEA-I",
          domain: 1
        },
        {
          id: 6,
          name: "MRF",
          domain: 1
        },
        {
          id: 6,
          name: "NN",
          domain: 1
        },
        {
          id: 6,
          name: "PA-NN",
          domain: 1
        }
      ],
      pods: [
        {
          id: 1,
          name: "ASBC-Pod 2",
          comps: 1
        },
        {
          id: 2,
          name: "ASBC-Pod 3",
          comps: 1
        },
        {
          id: 3,
          name: "CFX-Pod 2",
          comps: 2
        },
        {
          id: 4,
          name: "CFX-Pod 3",
          comps: 2
        },
        {
          id: 5,
          name: "NTAS-Pod 2",
          comps: 3
        },
        {
          id: 6,
          name: "NTAS-Pod 3",
          comps: 3
        },
        {
          id: 7,
          name: "ISBC-Pod 2",
          comps: 4
        },
        {
          id: 8,
          name: "ISBC - Pod 3",
          comps: 4
        },
        {
          id: 9,
          name: "MNO-ISBC - Pod 2",
          comps: 5
        },
        {
          id: 10,
          name: "MNO-ISBC - Pod 3",
          comps: 5
        },
        {
          id: 11,
          name: "PA-ISBC - Pod 2",
          comps: 6
        },
        {
          id: 12,
          name: "PA-ISBC - Pod 3",
          comps: 6
        },
        {
          id: 13,
          name: "STP - Pod 2",
          comps: 7
        },
        {
          id: 13,
          name: "STP - Pod 3",
          comps: 7
        },
        {
          id: 13,
          name: "DEA-I - Pod 2",
          comps: 8
        },
        {
          id: 13,
          name: "DEA-I - Pod 3",
          comps: 8
        },
        {
          id: 13,
          name: "MRF - Pod 2",
          comps: 9
        },
        {
          id: 13,
          name: "NN - Pod 2",
          comps: 10
        },
        {
          id: 13,
          name: "NN - Pod 2",
          comps: 10
        },
        {
          id: 13,
          name: "PA-NN - Pod 2",
          comps: 11
        }
      ],
      testtype: [
        {
          id: 1,
          name: "Signalling Pcaps",
          pods: 1
        },
        {
          id: 2,
          name: "Process Logs",
          pods: 1
        },
        {
          id: 3,
          name: "Signalling Pcaps",
          pods: 2
        },
        {
          id: 4,
          name: "Process Logs",
          pods: 2
        },
        {
          id: 5,
          name: "Signalling Pcaps",
          pods: 3
        },
        {
          id: 6,
          name: "Process Logs",
          pods: 3
        },
        {
          id: 7,
          name: "Signalling Pcaps",
          pods: 4
        },
        {
          id: 8,
          name: "Process Logs",
          pods: 4
        },
        {
          id: 9,
          name: "Signalling Pcaps",
          pods: 5
        },
        {
          id: 5,
          name: "Process Logs",
          pods: 5
        }
      ]
    },

    domain: [],
    comps: [],
    pods: [],
    testtype: [],

    sourceMap: {
      domain: 0,
      comps: 1,
      pods: 2,
      testtype: 3
    }
  };

  componentDidMount = () => {
    const { domain } = this.state.source;
    this.setState({
      domain
    });
  };

  handleChange = params => ev => {
    const target = ev.currentTarget;
    const { value } = target;
    const { current, next } = params;
    this.setNewValues({ value, current, next });
  };

  setNewValues = ({ value, current, next }) => {
    const { source } = this.state;
    const data = source[next];

    if (data) {
      this.setState({
        [next]: data.filter(el => el[current] === Number(value))
      });
    }

    this.clearValues(next);
  };

  clearValues = next => {
    const { sourceMap } = this.state;
    const nextkey = sourceMap[next];

    Object.entries(sourceMap)
      .filter(([_, value]) => value > nextkey)
      .forEach(([key]) => {
        this.setState({
          [key]: []
        });
      });
  };
  
  render() {
    const { domain, comps, pods, testtype } = this.state;
    return (
      <Container>
        <h1>Global Tracer</h1>
        <Section>
          <Select
            data={domain}
            action={this.handleChange}
            current="domain"
            next="comps"
          />
          <Select
            data={comps}
            action={this.handleChange}
            current="comps"
            next="pods"
          />
          <Select
            data={pods}
            action={this.handleChange}
            current="pods"
            next="testtype"
          />
          <Select data={testtype} />
          <Form.Item>
                    <Button type="primary" htmlType="submit">Take Traces</Button>
          </Form.Item>
        </Section>
      </Container>
    );
  }
}

export default Main;
