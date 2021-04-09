import {Button, Card, Col, Form, Input, PageHeader, Row} from "antd";

const Tasks = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  }

  const onError = (err: any) => {
    console.log(err);
  }

  return (
    <>
      <PageHeader
        title="Title"
        subTitle="This is a subtitle"
        onBack={() => null}
      />

      <Row align="middle" justify="center">
        <Col span={12}>
          <Card title="Default size card">
            <Form
              name="basic"
              size="large"
              onFinish={onSubmit}
              onFinishFailed={onError}
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="title"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  placeholder="What to do next?"
                />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Tasks;
