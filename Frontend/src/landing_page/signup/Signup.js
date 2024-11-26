import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const navigate = useNavigate(); // Hook for navigation
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Mobile number validation
    if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Terms acceptance
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Please accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement actual signup logic
      console.log("Form submitted", formData);
      alert("Signup successful!");
      //navigate("/home"); // Redirect to home page
    }
  };

  return (
    <div
      style={{
        maxWidth: "28rem",
        margin: "0 auto",
        padding: "1.5rem",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Create Your InvestBuddy Account
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="mobile"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
            }}
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: `1px solid ${errors.mobile ? "red" : "#ccc"}`,
              borderRadius: "0.25rem",
            }}
          />

          {errors.mobile && (
            <p
              style={{
                color: "red",
                fontSize: "0.875rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.mobile}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
            }}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: `1px solid ${errors.email ? "red" : "#ccc"}`,
              borderRadius: "0.25rem",
            }}
          />
          {errors.email && (
            <p
              style={{
                color: "red",
                fontSize: "0.875rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.email}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: `1px solid ${errors.password ? "red" : "#ccc"}`,
              borderRadius: "0.25rem",
            }}
          />
          {errors.password && (
            <p
              style={{
                color: "red",
                fontSize: "0.875rem",
                marginTop: "0.25rem",
              }}
            >
              {errors.password}
            </p>
          )}
        </div>

        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            style={{ marginRight: "0.5rem" }}
          />
          <label
            htmlFor="terms"
            style={{
              fontSize: "0.875rem",
              fontWeight: "normal",
            }}
          >
            I agree to the Terms & Conditions
          </label>
        </div>
        {errors.termsAccepted && (
          <p
            style={{ color: "red", fontSize: "0.875rem", marginBottom: "1rem" }}
          >
            {errors.termsAccepted}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Create Account
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
            }}
          >
            Already have an account?
            <a
              href="/login"
              style={{
                color: "#2563eb",
                marginLeft: "0.25rem",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
