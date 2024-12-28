import FloatSection from "../components/FloatSection";
import newyearpic from "../assets/newyearprjct.jpeg";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Ui = () => {
    return (
        <div className="bg-cyan-200 h-screen overflow-hidden mainDiv">
            <Toaster/>
            <div className="box-border flex justify-center bg-[#6172db] p-[40px] pt-[40px] h-[55.5%] font-year text-[#ffa24d] yearbox">
                <div className="flex flex-col justify-center items-center w-full text-[9rem] year">
                    2025
                    <span className="relative bottom-[215px] left-[131px] opacity-30 df f fr">4</span>
                </div>
            </div>
            <div className="flex bg-[#2c483e] h-[42%] font-texts text-[#ffa24d] leading-[35px]">
                <div className="leftSide p-3 pt-10 w-[38%] h-full text-[4.7rem]">
                    <div className="text">
                        <p>Happy</p>
                        <p>New</p>
                        <p>Year!</p>
                    </div>
                </div>
                <div className="rightSide pr-2 pb-11 w-[62%] h-full text-[3.8rem]">
                    <div className="flex flex-col-reverse h-full text">
                        I hope many
                        many good
                        news is waiting
                        for you!
                    </div>
                </div>
            </div>
            <FloatSection />
            <div className="flex justify-center items-center bg-[#e95436] h-[2.5%] font-bold font-footer text-[#2F2F2F] text-[17px] text-sm leading-3 footer">
                <p className="opacity-60">Copyright©MJ Polok</p>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="top-2 right-2 absolute btn btn-circle btn-ghost btn-sm">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello! I am MJ Polok.</h3>
                    <p className="py-4 pb-2">This is a fun New Year project.</p>
                    <p className="py-3 pb-1">The design of this project came from this photo:</p>
                    <img src={newyearpic} alt="" />
                    <p className="py-4">You can check this on my GitHub: <Link className="text-[#e95436] link" to="https://github.com/MJ-Polok/newyearproject-frontend"><i>Go --></i></Link></p>
                    
                    <i></i>
                </div>
            </dialog>
        </div>
    );
};

export default Ui;