import React, { useState } from 'react';
import toast from 'react-hot-toast';
const data = {
    states: [
        {
            name: "California",
            cities: [
                {
                    name: "Los Angeles",
                    centers: ["Center A", "Center B", "Center C"]
                },
                {
                    name: "San Francisco",
                    centers: ["Center D", "Center E"]
                },
                {
                    name: "San Diego",
                    centers: ["Center F", "Center G", "Center H"]
                }
            ]
        },
        {
            name: "Texas",
            cities: [
                {
                    name: "Houston",
                    centers: ["Center I", "Center J"]
                },
                {
                    name: "Dallas",
                    centers: ["Center K", "Center L", "Center M"]
                },
                {
                    name: "Austin",
                    centers: ["Center N", "Center O"]
                }
            ]
        },
        {
            name: "New York",
            cities: [
                {
                    name: "New York City",
                    centers: ["Center P", "Center Q", "Center R"]
                },
                {
                    name: "Buffalo",
                    centers: ["Center S", "Center T"]
                },
                {
                    name: "Rochester",
                    centers: ["Center U", "Center V"]
                }
            ]
        }
    ]
};

export default function NewUnitForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        state: '',
        city: '',
        hospital: '',
        name: '',
        phone: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation can be added here

        toast.success("Form successfully submitted!");
        setFormData({
            state: '',
            city: '',
            hospital: '',
            name: '',
            phone: '',
            email: '',
            description: ''
        });

        if (onSuccess) {
            onSuccess();
        }
    };

    return (
        <form action="#" className="row" onSubmit={handleSubmit}>
            {/* Hospital Name Input */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Hospital Name</label>
                <input
                    type="text"
                    name="hospital"
                    className="cs_form_field"
                    placeholder="Enter Hospital Name"
                    value={formData.hospital}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Select State */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Select State</label>
                <select
                    name="state"
                    className="cs_form_field"
                    value={formData.state}
                    onChange={handleChange}
                >
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                </select>
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Select City */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Select City</label>
                <select
                    name="city"
                    className="cs_form_field"
                    value={formData.city}
                    onChange={handleChange}
                >
                    <option value="">Select City</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                </select>
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Your Name */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Your Name</label>
                <input
                    type="text"
                    name="name"
                    className="cs_form_field"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Your Phone Number */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Your Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    className="cs_form_field"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Your Email */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Your Email</label>
                <input
                    type="email"
                    name="email"
                    className="cs_form_field"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Description */}
            <div className="col-lg-12">
                <label className="cs_input_label cs_heading_color">Description</label>
                <textarea
                    name="description"
                    className="cs_form_field"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Submit Button */}
            <div className="col-lg-12">
                <button className="cs_btn cs_style_1" type="submit">
                    <span>Submit</span>
                    <i>
                        <img src="/images/icons/arrow_white.svg" alt="Icon" />
                        <img src="/images/icons/arrow_white.svg" alt="Icon" />
                    </i>
                </button>
            </div>
        </form>
    );
}
