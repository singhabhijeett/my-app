import React, { useState, useEffect } from "react";

import { Container } from "../../components/container";
import { Section } from "../../components/section";
import { Form, Button } from 'antd';
import Select from "../../components/select";
import { data } from './data';
// import axios from 'axios';

const Main = () => {
  const [domain, setDomain] = useState([]);
  const [comps, setComps] = useState([]);
  const [pods, setPods] = useState([]);
  const [testtype, setTesttype] = useState([]);

  const [source,] = useState(data);

  const [currentDomain, setCurrentDomain] = useState(0);
  const [currentComps, setCurrentComps] = useState(0);
  const [currentPods, setCurrentPods] = useState(0);
  const [currentTesttype, setCurrentTesttype] = useState(0);

  const [sourceMap,] = useState({
    domain: 0,
    comps: 1,
    pods: 2,
    testtype: 3
  });

  useEffect(() => {
    const { domain } = source;
    setDomain(domain);
  }, []);

  const handleChange = params => ev => {
    const target = ev.currentTarget;
    const { value } = target;
    const { current, next } = params;
    if (current === 'domain') {
      setCurrentDomain(value);

    } else if (current === 'comps') {
      setCurrentComps(value);
    } else if (current === 'pods') {
      setCurrentPods(value);
    } else {
      setCurrentTesttype(value);
    }
    setNewValues({ value, current, next });
  }

  const setNewValues = ({ value, current, next }) => {
    const data = source[next];

    if (data) {
      if (current === 'domain') {
        setComps(data.filter(el => el[current] === Number(value)));

      } else if (current === 'comps') {
        setPods(data.filter(el => el[current] === Number(value)));
      } else if (current === 'pods') {
        setTesttype(data.filter(el => el[current] === Number(value)));
      } else {
        setTesttype(data.filter(el => el[current] === Number(value)));
      }
    }

    clearValues(next);
  }

  const clearValues = next => {
    const nextkey = sourceMap[next];

    Object.entries(sourceMap)
      .filter(([_, value]) => value > nextkey)
      .forEach(([key]) => {
        if (key === 'comps') {
          setComps([]);
        } else if (key === 'pods') {
          setPods([]);
        } else if (key === 'testtype') {
          setTesttype([]);
        }
      });
  };

  const onSubmit = async () => {
    if (!currentDomain || !currentComps || !currentPods || !currentTesttype) {
      alert('Please select all options');
      return;
    }
    let dataToSend = []
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'domain') {
        const data = {
          'domain': value.find(el => el.id === Number(currentDomain)).name,
        }
        dataToSend.push(data)
      } else if (key === 'comps') {
        const data = {
          'comps': value.find(el => el.id === Number(currentComps)).name,
        }
        dataToSend.push(data)
      } else if (key === 'pods') {
        const data = {
          'pods': value.find(el => el.id === Number(currentPods)).name,
        }
        dataToSend.push(data)
      } else {
        const data = {
          'testtype': value.find(el => el.id === Number(currentTesttype)).name,
        }
        dataToSend.push(data)
      }
    });
    console.log('dataToSend', dataToSend);
    // const response = await axios.post('http://localhost:5000/api/v1/tracer', dataToSend, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem('token')
    //   }
    // });
    // console.log('response', response);
  };

  return (
    <Container>
      <h1>Global Tracer</h1>
      <Section>
        <Select
          data={domain}
          action={handleChange}
          current="domain"
          next="comps"
        />
        <Select
          data={comps}
          action={handleChange}
          current="comps"
          next="pods"
        />
        <Select
          data={pods}
          action={handleChange}
          current="pods"
          next="testtype"
        />
        <Select
          data={testtype}
          action={handleChange}
          current={'testtype'}
          next=""
        />
        <Form.Item>
          <Button
            onClick={onSubmit}
            type="primary" htmlType="submit">Take Traces</Button>
        </Form.Item>
      </Section>
    </Container>
  );
};

export default Main;
