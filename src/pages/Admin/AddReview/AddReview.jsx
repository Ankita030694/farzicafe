import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../configs/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Rating from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../assets/logos/roundlogo.svg";
const AddReview = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false); 
  const [rating, setRating] = useState(0); // State to hold rating

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "reviews"), {
        name: data.name,
        dob: data.dob,
        anniversary: data.anniversary,
        mobile: data.mobile,
        email: data.email,
        comment: data.comment,
        rating: `${rating} out of 5`, // Save as "X out of 5"
        createdAt: Timestamp.now(),
      });

      toast.success("Review added successfully!");
      reset(); // Reset form
      setRating(0); // Reset rating
    } catch (error) {
      console.error("Error adding review: ", error);
      toast.error("Error adding review.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Centered Logo */}
      <div
        style={{
          maxHeight: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "150px", width: "150px" }}
        />
      </div>

      <div
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
        style={{ marginTop: "100px" }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[#000000]">Add Your Review</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-[#000000] rounded"
            required
          />

          <div className="w-full flex flex-col">
            <input
              {...register("dob")}
              type="date"
              className="w-full p-2 border border-[#000000] rounded"
            />
            <small className="text-[#000000]">Date Of Birth</small>
          </div>

          <div className="w-full flex flex-col">
            <input
              {...register("anniversary")}
              type="date"
              className="w-full p-2 border border-[#000000] rounded"
            />
            <small className="text-[#000000]">Date Of Anniversary</small>
          </div>

          <input
            {...register("mobile", {
              required: true,
              pattern: /^[6-9]\d{9}$/,
            })}
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-2 border border-[#000000] rounded"
          />

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-[#000000] rounded"
            required
          />

          <textarea
            {...register("comment")}
            placeholder="Valuable Comment"
            className="w-full p-2 border border-[#000000] rounded"
          ></textarea>

          {/* Star Rating Component */}
          <div className="flex items-center gap-2">
            <span className="text-[#000000]">Rating:</span>
            <Rating
              count={5}
              size={30}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              activeColor="#000000"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white bg-[#000000] p-2 rounded ${
              loading ? "bg-gray-400" : "hover:bg-white hover:text-[#000000] border border-[#000000]"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddReview;
