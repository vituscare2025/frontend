import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function DialysisUnitForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        hospital: '',
        state: '',
        city: '',
        dialysisCount: '',
        name: '',
        phone: '',
        email: ''
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
            hospital: '',
            state: '',
            city: '',
            dialysisCount: '',
            name: '',
            phone: '',
            email: ''
        });

        if (onSuccess) {
            onSuccess();
        }
    };

    return (
        <form action="#" className="row" onSubmit={handleSubmit}>
            {/* Hospital Name */}
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

            {/* State */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">State</label>
                <input
                    type="text"
                    name="state"
                    className="cs_form_field"
                    placeholder="Enter State"
                    value={formData.state}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* City */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">City</label>
                <input
                    type="text"
                    name="city"
                    className="cs_form_field"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Total No. of Dialysis */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Total No. of Dialysis</label>
                <input
                    type="number"
                    name="dialysisCount"
                    className="cs_form_field"
                    placeholder="Enter Total Dialysis Count"
                    value={formData.dialysisCount}
                    onChange={handleChange}
                />
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
