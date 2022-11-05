import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Upload, message, Space } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.1,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = Array.from(Array(181).keys());

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Row className="container">
      <Col span={24} style={{ marginBottom: 25 }}>
        <Row
          style={{
            width: 250,
            height: 100,
            border: "1px solid #D1D1D1",
            borderRadius: 5,
            backgroundColor: "#FFFFFF",
          }}
          justify="center"
          align="middle"
        >
          <Col span={24}>
            <Row justify="center" align="middle">
              <Image src="/icon/heart.svg" width={23} height={21} alt="" />
              <span style={{ marginLeft: 10 }}>Check heart rhythm</span>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center" align="middle">
              <Upload {...props}>
                <Button
                  style={{
                    width: 200,
                    borderRadius: 5,
                    backgroundColor: "#5384F5",
                    color: "#FFFFFF",
                  }}
                  icon={<UploadOutlined />}
                >
                  Click to Upload
                </Button>
              </Upload>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginBottom: 25 }}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Row justify="start">
              <h3>Highlights</h3>
            </Row>
          </Col>
          <Col span={24}>
            <Line options={options} data={data} height={50} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="start">
          <Col span={24}>
            <h3>Summary</h3>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col className="list-summary" span={7}>
                <Row style={{ padding: 5 }}>
                  <ul style={{ marginBottom: 0 }}>
                    <li>Lorem ipsum dolor illo ratione culpa</li>
                    <li>sit amet consectetur adipisicing elit</li>
                    <li>Sunt magnam error explicabo sapiente</li>
                  </ul>
                </Row>
              </Col>
              <Col className="list-summary" span={7}>
                <Row style={{ padding: 5 }}>
                  <ul style={{ marginBottom: 0 }}>
                    <li>Lorem ipsum dolor illo ratione culpa</li>
                    <li>sit amet consectetur adipisicing elit</li>
                    <li>Sunt magnam error explicabo sapiente</li>
                  </ul>
                </Row>
              </Col>
              <Col className="list-summary" span={7}>
                <Row style={{ padding: 5 }}>
                  <ul style={{ marginBottom: 0 }}>
                    <li>Lorem ipsum dolor illo ratione culpa</li>
                    <li>sit amet consectetur adipisicing elit</li>
                    <li>Sunt magnam error explicabo sapiente</li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
