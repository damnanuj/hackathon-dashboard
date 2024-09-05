import "./CreateForm.scss";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import upload from "../../assets/icons/bxs_cloud-upload.svg";
import GreenBtn from "../Common/GreenButton/GreenBtn";
import {  DatePicker, Form, Input, Select, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { baseURL } from "../HackathonCards/ChallangesCards";

const CreateForm = () => {
  const navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  
  const logFormData = (formData) => {
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  };

  
  const onFinishSubmit = async (ChallangeFormData) => {
    setIsLoading(true);
    console.log(ChallangeFormData);
    try {
      const formData = new FormData();
      formData.append("challangeName", ChallangeFormData.challangeName);
      formData.append("startDate", ChallangeFormData.startDate.format("YYYY-MM-DD"));
      formData.append("endDate", ChallangeFormData.endDate.format("YYYY-MM-DD"));
      formData.append("description", ChallangeFormData.description);
      formData.append("difficulty", ChallangeFormData.difficulty);
  
      // Log FormData content
      logFormData(formData);
  
      if (fileList.length > 0) {
        formData.append("image", fileList[0].originFileObj);
      }
  
      const response = await axios.post(`${baseURL}/create-challenge`, 
      
       formData
      );
    
      if (response.data) {
        message.success("Challenge Created Successfully");
        console.log(response.data);
        navigate("/")
        // reset the form here
      } else {
        message.error("Failed to create challenge. Please try again.");
      }
  
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
        onFinish={onFinishSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="form_container uni_padding"
        initialValues={{
          difficulty: "Easy", // Set initial value for the Select field
        }}
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
           name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => e && e.fileList}
          rules={[
            {
              required: true,
             
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
            beforeUpload={() => false} 
            name="image"
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
            loading={isLoading.toString()}
            
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateForm;




// const storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, "uploads");
//       },
//       filename: function (req, file, cb) {
//         cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//       },
//     });
//     const upload = multer({ storage: storage }).single("user_photo");
//   app.post("/upload", upload, (req, res) => {
//       res.send("Upload success");
//       const imageName = req.file.filename;
//       console.log(imageName);
//     });