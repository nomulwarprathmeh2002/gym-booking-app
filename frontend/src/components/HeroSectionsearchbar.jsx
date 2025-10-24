import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-between mx-auto"
            style={{
                backgroundColor: "#fff",
                borderRadius: "50px",
                padding: "6px 10px",
                width: "640px",
                maxWidth: "95%",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(255, 90, 90, 0.25)",
            }}
        >
            <div className="d-flex align-items-center flex-grow-1 px-2">
                <FaMapMarkerAlt
                    className="text-danger me-2"
                    style={{ fontSize: "18px", opacity: 0.9 }}
                />
                <input
                    type="text"
                    placeholder="Enter your city or gym name..."
                    className="form-control border-0 shadow-none"
                    style={{
                        fontSize: "15px",
                        color: "#333",
                        backgroundColor: "transparent",
                    }}
                />
            </div>

            <button
                className="btn text-white fw-semibold d-flex align-items-center justify-content-center"
                style={{
                    borderRadius: "50px",
                    padding: "10px 22px",
                    background: "linear-gradient(90deg, #f04e4e, #ff7070)",
                    border: "none",
                    fontSize: "15px",
                    boxShadow: "0 4px 10px rgba(240,78,78,0.35)",
                    transition: "0.3s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                        "linear-gradient(90deg, #ff5c5c, #ff8080)";
                    e.currentTarget.style.boxShadow =
                        "0 6px 16px rgba(240,78,78,0.45)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                        "linear-gradient(90deg, #f04e4e, #ff7070)";
                    e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(240,78,78,0.35)";
                }}
            >
                <FaSearch className="me-2" /> Search Gyms
            </button>
        </div>
    );
};

export default SearchBar;
