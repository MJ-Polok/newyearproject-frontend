import { Info } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import axios from "axios";

const FloatSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        if (!formData.name && !formData.message) {
            return toast.error("Please fill the form");

        }
        if (!formData.name) {
            return toast.error("Please enter your name");
        }

        if (!formData.message) {
            console.log("f");
            return toast.error("Please enter your message");
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const success = validateForm();
        if (success === true) {
            console.log(formData);
        }
        try {
            const res = await axios.post("https://newyearproject-backend.onrender.com/api/data", formData);
            console.log(res.data);
            toast.success("Message send successfully");
            setIsLoading(false);
        } catch (error) {
            console.log("Error: ", error);
            toast.error("Something went wrong");
            setIsLoading(false);
        }
    };

    return (
        <div className="floatDiv bg-[#fca7ae] absolute top-[290px] p-3 right-4 border-[#e95436] border-2 rounded-xl drop-shadow-xl">
            <div className="text flex justify-center font-connect text-[17px] font-black text-[#6172db] p-1 py-0">
                Connect with me🤗
                <Info className="ml-auto w-[23px]" onClick={() => document.getElementById('my_modal_3').showModal()} />
            </div>
            <div className="from flex justify-center flex-col"  >
                <label className="form-control w-full max-w-xs mt-1 mb3 font-semibold">
                    <div className="label">
                        <span className="label-text text-[#6172db] leading-[0.8rem]">What is your name?</span>
                    </div>
                    <input type="text" placeholder="here..." className="text-sm input input-bordered w-full max-w-xs leading-[500]" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </label>

                <label className="form-control w-full max-w-xs mt-2">
                    <div className="label">
                        <span className="label-text text-[#6172db] leading-[0.8rem] font-semibold">Something about 2025</span>
                    </div>
                    <textarea
                        placeholder="write..."
                        className="textarea textarea-bordered textarea-sm w-full max-w-xs " value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                </label>
                <button onClick={handleSubmit} className="btn w-[130px] m-auto mt-4 bg-[#e95436] text-[1rem]}" disabled={isLoading} >
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
};

export default FloatSection;