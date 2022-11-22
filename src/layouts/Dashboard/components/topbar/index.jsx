import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from 'react';

function TopBar() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const onClose = () => {
    setIsModalOpen(false);
  };
  const onOpen = () => {
    setIsModalOpen(true);
  };

  const designations = [
    'DIRECTOR',
    'ASSOCIATE VICE PRESIDENT',
    'ACCOUNT MANAGER',
    'SENIOR ACCOUNT EXECUTIVE',
    'Sr. Copywriter',
    'Sr. Art Director',
    'Sr. Account Executive'
  ];
  const serviceLines = ['Digital', 'Creative', 'Media', 'Analytics', 'PR'];
  const [employee, setEmployee] = React.useState({});
  // const createUser = async () => {};
  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-white p-3 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Hi, Deepanshu Goel</h1>
        <div className=" flex gap-3">
          <button
            onClick={onOpen}
            className="inline-block rounded-lg px-4 py-1.5 tebuttont-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Add User +
          </button>
          <React.Fragment>
            <Modal show={isModalOpen} size="2xl" popup={true} onClose={onClose}>
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6 px-4 pb-4 sm:pb-6 lg:px-4 xl:pb-4">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add User</h3>
                  <div className="flex gap-2">
                    <div className="w-[30%]">
                      <div className="mb-2 block">
                        <Label value="Employee Code" />
                      </div>
                      <TextInput
                        className=""
                        name="empCode"
                        placeholder="912312"
                        type={'number'}
                        onChange={onChange}
                        required={true}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="mb-2 block">
                        <Label value="Full Name" />
                      </div>
                      <TextInput
                        className=""
                        id="Name"
                        type="text"
                        name="name"
                        onChange={onChange}
                        placeholder="Jane Austin"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex flex-col w-[40%] ">
                      <Label htmlFor="designation" value="Designation" />
                      <select
                        name="designation"
                        id=""
                        className="text-sm rounded-md mt-2"
                        onChange={onChange}>
                        {designations.map((designation, key) => (
                          <option key={key} value={designation}>
                            {designation}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className=" flex-grow">
                      <Label
                        for="default-range"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        value="Annual CTC"
                      />
                      <TextInput
                        className=""
                        id="annualCTC"
                        name="annualCtc"
                        type="number"
                        placeholder="2312312"
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col w-[40%] ">
                      <Label htmlFor="designation" value="Designation" />
                      <select name="" id="" className="text-sm rounded-md mt-2">
                        {serviceLines.map((serviceLine, key) => (
                          <option key={key} value={serviceLine}>
                            {serviceLine}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-[30%]">
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Cost Per HR" />
                      </div>
                      <TextInput
                        className=""
                        id="costPerHr"
                        placeholder="121"
                        type={'number'}
                        required={true}
                      />
                    </div>
                    <div className="w-[30%]">
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="HR Rate" />
                      </div>
                      <TextInput
                        className=""
                        id="hrRate"
                        placeholder="1212"
                        type={'number'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <Button className="w-full">Create User</Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </React.Fragment>
          <button className="bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-900">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export { TopBar };
