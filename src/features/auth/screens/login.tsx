import LoginForm from "../components/loginForm";

function LoginPage() {
    return (
        <div className="flex flex-row w-full">
            
            <div className="hidden md:flex w-[45%] items-center justify-center">
                <img
                    src="/shopping.svg"
                    alt="Shopping illustration"
                    className="w-full aspect-square object-contain"
                />
            </div>

            
            <div className="flex w-full md:w-[55%] items-center justify-center px-8 md:px-16 lg:px-24">
                <div className="w-full max-w-sm">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;