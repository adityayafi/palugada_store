import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="max-w-7xl mx-auto items-center justify-center flex h-screen">
        <div className="bg-slate-100 rounded h-[450px] w-[550px]">
            <div className="mt-8 justify-center flex">
                <span className="font-bold text-3xl ">Register</span>
            </div>

            <Form
                name="basic"
                layout="vertical"
                initialValues={{
                remember: true,
                }}
                autoComplete="off"
                className="p-4"
            >
                <Form.Item
                label="Full Name"
                name="fullname"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Full name!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your email!',
                        },
                    ]}
                    >
                    <Input type="email"/>
                    </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item                    
                >
                <Button type="primary" htmlType="" className="w-full">
                    Submit
                </Button>
                </Form.Item>
            </Form>
            <div className="justify-center flex mt-[-20px]">
                    <span>Sudah punya akun?</span><Link to={'/login'} className="text-blue-700 underline ml-1">Masuk disini</Link>
            </div>
        </div>            
    </div>
    )
}

export default Register;