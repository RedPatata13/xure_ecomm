import { motion } from "motion/react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center w-full min-h-150 gap-6 px-6 text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-8xl md:text-8xl  font-semibold tracking-wider text-gray-900"
            >
                404 Not Found
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
                className="text-gray-500 max-w-md"
            >
                Your visited page not found. You may go back to the home page.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
                <Button
                    size="md"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Back to home page
                </Button>
            </motion.div>
        </motion.div>
    );
}