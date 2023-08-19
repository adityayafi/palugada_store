import { Button, Col, Row } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const AppHeader = () => {

    const navigate = useNavigate();

    return (
        <nav className="bg-slate-100">
            <div className="max-w-7xl mx-auto py-6">
                <Row gutter={16}>
                    <Col span={12} className="float-left items-center flex">
                        <div className="items-center flex">
                            <span className="text-xl font-bold hover:cursor-pointer" onClick={() => navigate('/')}>PALUGADA STORE</span>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="float-right flex items-center">
                            <ShoppingCartOutlined style={{fontSize: '25px'}} className="px-2 hover:cursor-pointer"/>
                            <div className="border-l-2 border-black h-10"></div>
                            <Button className="mx-2 border-blue-700" onClick={() => navigate('/login')}>Masuk</Button>
                            <Button type="primary" htmlType="" onClick={() => navigate('/register')}>Daftar</Button>                        
                        </div>
                    </Col>
                </Row>
            </div>
        </nav>
    )
}

export default AppHeader;