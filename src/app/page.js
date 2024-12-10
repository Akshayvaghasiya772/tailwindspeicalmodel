// pages/hello.js
"use client"
import Header from "@/components/Header";
import { useState, useEffect } from "react";

export default function HelloPage() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setMessage(data.message);
      })
      .catch((error) => console.error("Error fetching message:", error));
  }, []);
  return (
    <>
      <Header/>
     <div className="my-8" style={{ padding: "20px",textAlign: "center" }}> 
      <h1>Hello Page</h1>
      <p>
        <strong>API Response:</strong> {message || "Loading..."}
      </p>
     </div>
    </>
  );
}
