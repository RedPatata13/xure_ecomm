import SignupForm from "../components/signupForm";
import { motion } from "motion/react";

function SignupPage() {
    return (
        <div className="flex flex-row w-full">
            
            <motion.div
                className="hidden md:flex w-[45%] items-center justify-center"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <img
                    src="/shopping.svg"
                    alt="Shopping illustration"
                    className="w-full aspect-square object-contain"
                />
            </motion.div>
            
            <div className="flex w-full md:w-[55%] items-center justify-center px-8 md:px-16 lg:px-24">
                <motion.div
                    className="w-full max-w-sm"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                    <SignupForm />
                </motion.div>
            </div>
        </div>
    );
}
export default SignupPage;