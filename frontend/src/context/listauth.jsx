import { React, useContext, createContext, useState, useEffect } from "react";
import { authContext } from "./auth";
import axios from "axios";
import { toast } from "react-toastify";

const listingContext = createContext();

function Listauth({ children }) {

    let { serverUrl } = useContext(authContext);

    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    const [frontendimages, setFrontendImages] = useState([]);
    const [backendimages, setBackendImages] = useState([]);
    let [city, setCity] = useState("");
    let [rent, setRent] = useState(0);
    let [location, setLocation] = useState("");
    let [landmark, setLandmark] = useState("");
    let [category, setCategory] = useState("");
    let [adding, setAdding] = useState(false);
    let [getlisting, setGetListing] = useState([])
    let [newlistingdata, setNewListingData] = useState([])
    let [viewlists, setViewLists] = useState(null);
    let [getlist, setGetList] = useState(null);
    let [searchData, setSearchdata] = useState([]);



    let handleListing = async () => {
        setAdding(true);
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


            let response = await axios.post(serverUrl + "/list/addlist", formData,
                { withCredentials: true });

            setAdding(false);
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
            toast.success("Listing added successfully")
        } catch (error) {
            console.log(error);
            setAdding(false);
        }
    }

    const getListings = async () => {

        try {
            let response = await axios.get(serverUrl + "/list/getlistings",
                { withCredentials: true })
            setGetListing(response.data);
            setNewListingData(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleviewLists = async (id) => {

        try {
            let response = await axios.get(serverUrl + `/list/viewlists/${id}`,
                { withCredentials: true },
            )
            setViewLists(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getListWithId = async (id) => {


        try {
            let response = await axios.get(serverUrl + `/list/getlists/${id}`,
                { withCredentials: true },
            )
            setGetList(response.data);
            // console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteLists = async (id) => {

        try {

            const response = await axios.delete(serverUrl + `/list/delete/${id}`,
                { withCredentials: true });

            // console.log(response);
            toast.success("list is delete")

        } catch (error) {
            console.log(error);
            toast.error(error)
        }
    }

    const handleSearch = async (data) => {

        if (!data || data.trim() === "") {
            console.warn("Search query is empty. Skipping request.");
            return;
          }
        try {

            let response = await axios.get(serverUrl + `/list/search?query=${encodeURIComponent(data)}`)
            setSearchdata(response.data);

        } catch (error) {
            setSearchdata(null);

            console.log(error);

        }
    }

    useEffect(() => {
        getListings();
    }, [adding])

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
        adding, setAdding,
        getlisting, setGetListing,
        newlistingdata, setNewListingData,
        handleListing,
        handleviewLists,
        viewlists, setViewLists,
        getListings,
        getListWithId,
        getlist, setGetList,
        deleteLists,
        handleSearch,
        searchData, setSearchdata

    }

    return (
        <div>
            <listingContext.Provider value={value}>
                {children}
            </listingContext.Provider>
        </div>
    )
}

export default Listauth;
export { listingContext };