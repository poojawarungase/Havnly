import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { authContext } from "./auth";

export const reviewContext = createContext();

function Reviewcont({ children }) {
    let { serverUrl } = useContext(authContext);
    let [comment, setComment] = useState("");
    let [rating, setRating] = useState(0);
    let [review, setReview] = useState([]);
    let [getReviewdata, setGetreviewdata] = useState("");


    const handleReview = async (id) => {
        
        try {

            const response = await axios.post(serverUrl + `/review/add/${id}`,
                {
                    comment,
                    rating,
                },
                { withCredentials: true });

            setReview(response.data);
            // console.log(response);


        } catch (error) {
            console.log(error);
        }
    }

    const getReviews = async (id) => {

        try {

            const response = await axios.get(serverUrl + `/review/get/${id}`,
                { withCredentials: true });
            const data = response.data;

            setGetreviewdata(data.averageRating);
            return data.averageRating;

        } catch (error) {
            console.error("Error fetching average rating:", error);
        }
    }

    let value = {
        comment, setComment,
        rating, setRating,
        review, setReview,
        handleReview,
        getReviewdata, setGetreviewdata,
        getReviews,

    }

    return (
        <reviewContext.Provider value={value}>
            {children}
        </reviewContext.Provider>
    )

}

export default Reviewcont;