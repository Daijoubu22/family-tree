import { Avatar, Modal, Select, Form, Flex, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFamilyTreeStore } from '@/modules/FamilyTree/store/familyTreeStore';
import { AddPersonFormData } from '@/modules/FamilyTree/models/AddPersonFormData.ts';
import { genderOptions, relationOptions } from '../constants/selectOptions';

function AddPersonModal() {
  const setCurrentPerson = useFamilyTreeStore(
    (state) => state.setCurrentPerson
  );
  const currentPerson = useFamilyTreeStore((state) => state.currentPerson);
  const addPerson = useFamilyTreeStore((state) => state.addPerson);

  const [form] = Form.useForm<AddPersonFormData>();

  const save = () => {
    form.validateFields().then((data) => {
      addPerson(data, currentPerson!);
      setCurrentPerson(null);
    });
  };

  return (
    <Modal
      open={!!currentPerson}
      title="Добавить персону"
      width={720}
      centered
      onOk={save}
      onCancel={() => setCurrentPerson(null)}
      okText="Добавить"
    >
      <Form layout="vertical" className="mt-8" form={form}>
        <Flex gap="middle">
          <Avatar
            size={160}
            shape="square"
            icon={<FontAwesomeIcon icon="user" />}
            className="bg-gray-200 !rounded-3xl"
          />
          <Flex vertical className="flex-grow">
            <Form.Item
              name="relation"
              label={`Связь с ${currentPerson?.firstName} ${currentPerson?.lastName}`}
              initialValue="parent"
            >
              <Select options={relationOptions} />
            </Form.Item>
            <Form.Item name="gender" label="Пол" initialValue="male">
              <Select options={genderOptions} />
            </Form.Item>
          </Flex>
        </Flex>
        <Flex gap="middle">
          <Form.Item name="firstName" label="Имя" className="flex-grow">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Фамилия" className="flex-grow">
            <Input />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
}

export default AddPersonModal;
