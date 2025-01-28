import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function FeedbackForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    state: '',
    city: '',
    center: '',
    ratings: {},
    yesNoAnswers: {},
    suggestions: '',
  });
  const [allData, setAllData] = useState([])
  const [filteredCities, setFilteredCities] = useState([]); // Holds cities filtered by state
  const [filteredCenters, setFilteredCenters] = useState([]); // Holds centers filtered by city
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleYesNoChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      yesNoAnswers: { ...prev.yesNoAnswers, [question]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Feedback submitted successfully!');
    if (onSuccess) onSuccess();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/get-all-centres');
        const result = await response.json();
  
        // Log the response to confirm
        console.log(result);
  
        // Check if the response contains the expected data
        if (result.success && Array.isArray(result.centres)) {
          const data = result.centres;
  
          // Organize data by state and city
          const structuredData = {};
          data.forEach((center) => {
            const { state, city, name_of_centre } = center;
            if (!structuredData[state]) structuredData[state] = {};
            if (!structuredData[state][city]) structuredData[state][city] = [];
            structuredData[state][city].push(name_of_centre);
          });
  
          setAllData(structuredData);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({ ...prev, state: selectedState, city: '', center: '' }));
    setFilteredCities(Object.keys(allData[selectedState] || {}));
    setFilteredCenters([]);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData((prev) => ({ ...prev, city: selectedCity, center: '' }));
    setFilteredCenters(allData[formData.state]?.[selectedCity] || []);
  };

  const handleCenterChange = (e) => {
    const selectedCenter = e.target.value;
    setFormData((prev) => ({ ...prev, center: selectedCenter }));
  };


  return (
    <form action="#" className="row custom" onSubmit={handleSubmit}>
      {/* Name and Contact Number */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Contact Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
      </div>

      {/* State and City */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">State</label>
        <select
          className="cs_form_field"
          name="state"
          value={formData.state}
          onChange={handleStateChange}
        >
          <option value="">Select State</option>
          {Object.keys(allData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">City</label>
        <select
          className="cs_form_field"
          name="city"
          value={formData.city}
          onChange={handleCityChange}
          disabled={!filteredCities.length}
        >
          <option value="">Select City</option>
          {filteredCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Center */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Center</label>
        <select
          className="cs_form_field"
          name="center"
          value={formData.center}
          onChange={handleCenterChange}
          disabled={!filteredCenters.length}
        >
          <option value="">Select Center</option>
          {filteredCenters.map((center) => (
            <option key={center} value={center}>
              {center}
            </option>
          ))}
        </select>
      </div>

      {/* Rating Questions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <h4 className="cs_heading_color">Rate Your Experience (1 to 5)</h4>
        {[
          'How would you rate your overall experience with the dialysis service?',
          'How satisfied are you with the cleanliness and hygiene of the dialysis facility?',
          'How would you rate the professionalism of the dialysis service operators?',
          'How comfortable did you feel during the dialysis treatment?',
        ].map((question, index) => (
          <div key={index} className="cs_rating_question" style={{ marginBottom: '15px' }}>
            <label className="cs_input_label">{question}</label>
            <select
              className="cs_form_field"
              value={formData.ratings[question] || ''}
              onChange={(e) => handleRatingChange(question, e.target.value)}
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Yes/No Questions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <h4 className="cs_heading_color">Yes/No Questions</h4>
        {[
          'Did the dialysis operator explain the procedure and process clearly before starting your session?',
          'Were your questions and concerns addressed in a timely and helpful manner?',
          'Were you provided with clear instructions for post-treatment care and follow-up?',
        ].map((question, index) => (
          <div key={index} className="cs_yes_no_question" style={{ marginBottom: '15px' }}>
            <label className="cs_input_label">{question}</label>
            <select
              className="cs_form_field"
              value={formData.yesNoAnswers[question] || ''}
              onChange={(e) => handleYesNoChange(question, e.target.value)}
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">
          Suggestions for Improvement
        </label>
        <textarea
          className="cs_form_field"
          placeholder="Your suggestions..."
          name="suggestions"
          value={formData.suggestions}
          onChange={handleInputChange}
        />
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
