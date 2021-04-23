import {isNull} from "lodash";
import {FC, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {useSelector, useDispatch} from "react-redux";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Form, Checkbox, Input, List, FormInstance} from "antd";
import {ValidateErrorEntity} from "rc-field-form/lib/interface";
import {Card, Col, PageHeader, Row, Typography, Tooltip, Button} from "antd";
import {RootState, Task} from "../types";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import {createTaskActionCreator, toggleTaskActionCreator, updateTaskActionCreator, removeTaskActionCreator} from "../store/slices/tasks";
import {Actions} from "../lang/keys";

const {Text} = Typography;

interface TasksProps {

}

interface EditableTask {
  id: string|null;
  title: string;
}

export const Tasks: FC<TasksProps> = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.tasks);
  const formRef = useRef<FormInstance<{title: string}>>(null);
  const inputRef = useRef<Input>(null);
  const [t] = useTranslation();
  const [editable, setEditable] = useState<EditableTask>({
    id: null,
    title: ''
  });

  const onSubmit = ({title}: {title: string}) => {
    isNull(editable.id)
      ? dispatch(createTaskActionCreator({title}))
      : dispatch(updateTaskActionCreator({id: editable.id, title}));

    formRef.current?.resetFields();
    setEditable({id: null, title: ''});
  };

  const onError = (err: ValidateErrorEntity<{title: string}>) => {
    console.log(err);
  };

  const editTask = ({id, title}: Task) => {
    setEditable({id, title});

    formRef.current?.setFieldsValue({title});
    inputRef.current?.focus();
  };

  const removeTask = (id: string) => dispatch(removeTaskActionCreator({id}));

  const toggleTodo = (e: CheckboxChangeEvent, id: string) => dispatch(toggleTaskActionCreator({
    id,
    done: e.target.checked
  }));

  return (
    <>
      <PageHeader
        title="Title"
        subTitle="This is a subtitle"
        onBack={() => null}
      />

      <Row align="middle" justify="center">
        <Col span={12}>
          <Card title="My Tasks">
            <Form
              size="large"
              ref={formRef}
              onFinish={onSubmit}
              onFinishFailed={onError}
              initialValues={{title: ''}}
            >
              <Form.Item
                name="title"
                rules={
                  [{required: true, message: 'Please input your username!'}]
                }
              >
                <Input
                  placeholder="What to do next?"
                  autoComplete="off"
                  ref={inputRef}
                  allowClear
                  bordered
                />
              </Form.Item>
            </Form>

            <List
              itemLayout="horizontal"
              dataSource={items}
              renderItem={(item: Task) => (
                <List.Item actions={[
                  <Tooltip title={t(Actions.edit)}>
                    <Button onClick={() => editTask(item)} type="link" icon={<EditOutlined />} />
                  </Tooltip>,
                  <Tooltip title={t(Actions.remove)}>
                    <Button onClick={() => removeTask(item.id)} type="link" danger icon={<DeleteOutlined />} />
                  </Tooltip>
                ]}>
                  <List.Item.Meta
                    avatar={<Checkbox
                      onChange={e => toggleTodo(e, item.id)}
                      checked={item.done}
                    >
                      {<Text delete={item.done} strong>{item.title}</Text>}
                    </Checkbox>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};
