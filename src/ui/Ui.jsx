import FloatSection from "../components/FloatSection";
import newyearpic from "../assets/newyearprjct.jpeg";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Ui = () => {
    return (
        <div className="mainDiv bg-cyan-200 h-screen overflow-hidden">
            <Toaster/>
            <div className="box-border bg-[#6172db] h-[55.5%] p-[40px] pt-[40px] flex justify-center font-year text-[#ffa24d] ">
                <div className="year w-full flex text-[9rem] flex-col justify-center items-center">
                    2025
                    <span className="fr relative opacity-30 left-[131px] bottom-[215px]">4</span>
                </div>
            </div>
            <div className="bg-[#2c483e] h-[42%] flex font-texts leading-[35px] text-[#ffa24d]">
                <div className="leftSide h-full w-[38%] p-3 pt-10 text-[4.7rem]">
                    <div className="text">
                        <p>Happy</p>
                        <p>New</p>
                        <p>Year!</p>
                    </div>
                </div>
                <div className="rightSide h-full w-[62%] pb-11 pr-2 text-[3.8rem]">
                    <div className="text flex flex-col-reverse h-full">
                        I hope many
                        many good
                        news is waiting
                        for you!
                    </div>
                </div>
            </div>
            <FloatSection />
            <div className="footer bg-[#e95436] h-[2.5%] text-sm font-footer flex justify-center font-bold text-[17px] leading-3 items-center text-[#2F2F2F] ">
                <p className="opacity-60">Copyright©MJ Polok</p>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello! I am MJ Polok.</h3>
                    <p className="py-4 pb-2">This is a fun New Year project.</p>
                    <p className="py-3 pb-1">The design of this project came from this photo:</p>
                    <img src={newyearpic} alt="" />
                    <p className="py-4">You can check this on my GitHub: <Link className="link text-[#e95436]" to="https://github.com/Naim637/desktop-tutorial"><i>Go --></i></Link></p>
                    
                    <i></i>
                </div>
            </dialog>
        </div>
    );
};

export default Ui;