import { useRef, useState, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { FloatingInput, Button } from "../../components";
import { notification } from "../../utils";

const LogIn = () => {
    const [isSeePassword, setIsSeePassword] = useState<boolean>(false);

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    // document.querySelector("body")?.classList.add("dark");

    /**
     * * Handle events
     */
    const handleSeePassword = () => {
        if (passwordRef.current === null) return;

        const typePasswordRef = passwordRef.current.type;

        switch (typePasswordRef) {
            case "password":
                setIsSeePassword(true);
                break;
            case "text":
                setIsSeePassword(false);
                break;
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // TODO Get username and password from form data
        const payload = {
            username: usernameRef.current?.value || "",
            password: passwordRef.current?.value || "",
        };

        // TODO Notification if user input is missing enough data
        if (payload.username === "" || payload.password === "") {
            notification(false, "Bạn chưa nhập đủ dữ liệu đăng nhập!");
            return;
        }

        // TODO Call api for login method
        console.log(payload);
    };

    return (
        <section className="auth">
            <div className="auth-container">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-header">
                        <h1 className="auth-title mb-6">Đăng nhập</h1>
                        <div className="auth-controls mb-6">
                            <FloatingInput
                                labelFor="username"
                                labelText="tên tài khoản"
                                ref={usernameRef}
                                inputAutoComplete={true}
                            />
                            <div className="relative">
                                <FloatingInput
                                    labelFor="password"
                                    labelText="mật khẩu"
                                    type={isSeePassword ? "text" : "password"}
                                    ref={passwordRef}
                                />
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-full flex-center hover:bg-gray-300 hover:dark:bg-gray-500 text-gray-500 hover:text-gray-900 hover:dark:text-white cursor-pointer"
                                    onClick={handleSeePassword}
                                >
                                    {!isSeePassword && (
                                        <div>
                                            <FaEyeSlash />
                                        </div>
                                    )}
                                    {isSeePassword && (
                                        <div>
                                            <FaEye />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            text="đăng nhập"
                            rounded="lg"
                            textLoading="đang đăng nhập..."
                            className="w-full text-center"
                            buttonColor="blue"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
