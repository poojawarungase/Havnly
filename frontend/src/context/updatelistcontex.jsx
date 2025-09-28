import { React, useContext, createContext, useState, useEffect } from "react";
import { authContext } from "./auth";
import axios from "axios";
import { listingContext } from "./listauth";
import { toast } from "react-toastify";

const updateListingContext = createContext();

function UpdateList({ children }) {
    let { serverUrl } = useContext(authContext);
    let { viewlists } = useContext(listingContext);

    let [title, setTitle] = useState();
    let [description, setDescription] = useState();
    const [frontendimages, setFrontendImages] = useState([]);
    const [backendimages, setBackendImages] = useState([]);
    let [city, setCity] = useState();
    let [rent, setRent] = useState();
    let [location, setLocation] = useState();
    let [landmark, setLandmark] = useState();
    let [category, setCategory] = useState("");

    const UpdateList = async (id) => {
        try {

            let formData = new FormData();

            formData.append("title", title);


            backendimages.forEach((file) => {

                formData.append('images', file);
            });

            formData.append("description", description);
            formData.append("city", city);
            formData.append("location", location);
            formData.append("landmark", landmark);
            formData.append("rent", rent);
            formData.append("category", category);


            let response = await axios.put(serverUrl + `/list/update/${id}`, formData,
                { withCredentials: true });


            // console.log(response);
            setTitle("");
            setDescription("");
            setCity("");
            setFrontendImages([]);
            setBackendImages([]);
            setLocation("");
            setLandmark("");
            setRent("");
            setCategory("");
            toast.success("List updated..")
        } catch (error) {
            console.log(error);
            toast.error("list not updated")
        }
    }

    useEffect(() => {
        if (viewlists) {
            setTitle(viewlists.title || "");
            setDescription(viewlists.description || "");
            setCity(viewlists.city || "");
            setLocation(viewlists.location || "");
            setLandmark(viewlists.landmark || "");
            setRent(viewlists.rent || "");
            setCategory(viewlists.category || "");
        }
    }, [viewlists]);

    let value = {
        title, setTitle,
        description, setDescription,
        frontendimages, setFrontendImages,
        backendimages, setBackendImages,
        city, setCity,
        location, setLocation,
        landmark, setLandmark,
        rent, setRent,
        category, setCategory,
        UpdateList
    }



    return (
        <div>
            <updateListingContext.Provider value={value}>
                {children}
            </updateListingContext.Provider>
        </div>
    )

}

export default UpdateList;
export { updateListingContext };