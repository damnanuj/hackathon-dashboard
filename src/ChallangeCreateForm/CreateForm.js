import "./CreateForm.scss";
import React, { useState } from "react";
import upload from "../assets/icons/bxs_cloud-upload.svg";
import GreenBtn from "../Components/Common/GreenButton/GreenBtn";
import {  DatePicker, Form, Input, Select, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";

const CreateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onFinishSignup = async (signupFormData) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("challangeName", signupFormData.challangeName);
    formData.append("startDate", signupFormData.startDate.format("YYYY-MM-DD"));
    formData.append("endDate", signupFormData.endDate.format("YYYY-MM-DD"));
    formData.append("description", signupFormData.description);
    formData.append("difficulty", signupFormData.difficulty);

    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj);
    }

    setTimeout(() => {
      console.log("Form Data Submitted: ", signupFormData);
      console.log("File Data Submitted: ", fileList);
      message.success("Challenge Created Successfully");
      setIsLoading(false);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList.slice(-1));

  return (
    <div className="create_form_container">
      <div className="challange_details uni_padding">
        <h2>Challenge Details</h2>
      </div>

      <Form
        onFinish={onFinishSignup}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="form_container uni_padding"
      >
        <Form.Item
          label="Challenge Name"
          name="challangeName"
          rules={[
            {
              required: true,
              message: "Challenge Name is required",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[
            {
              required: true,
              message: "Start Date is required",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="End Date"
          name="endDate"
          rules={[
            {
              required: true,
              message: "End Date is required",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={(e) => e && e.fileList}
          rules={[
            {
              required: true,
              message: "Please upload an image",
            },
            {
              validator: (_, value) =>
                fileList.length > 0
                  ? Promise.resolve()
                  : Promise.reject(new Error("Please upload an image")),
            },
          ]}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Prevent automatic upload
          >
            {fileList.length < 1 && (
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  Upload <img src={upload} alt="upload" />
                </div>
              </button>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          label="Difficulty"
          name="difficulty"
          rules={[
            { required: true, message: "Please select difficulty level" },
          ]}
        >
          <Select
            defaultValue="Easy"
            options={[
              { value: "Easy", label: "Easy" },
              { value: "Medium", label: "Medium" },
              { value: "Hard", label: "Hard" },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <GreenBtn
            htmlType="submit"
            icon={false}
            text={"Create Challenge"}
            loading={isLoading}
            block
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateForm;
