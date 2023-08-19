import { Button, Card, Col, Row, Select } from "antd";
import AppCarousel from "../../components/AppCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../../components/AppCard";

const Home = () => {

    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get('https://hijja.sistemtoko.com/public/imedia/product?page=2&sorting=Lates&categories=all&search_name=none')
            setProduct(resp.data.aaData)
        } catch (err) {
            console.log(err)
        }
    }

    const sortOpt = [
        {
            label: 'Disarankan',
            value: 1,
        },
        {
            label: 'Unggulan',
            value: 2,
        },
        {
            label: 'Harga Tertinggi',
            value: 3,
        },
        {
            label: 'Harga Terendah',
            value: 4,
        }
    ]

    const cat = [
        {
            label: 'Fashion Men',
            value: 1,
        },
        {
            label: 'Fashion Woman',
            value: 2,
        },
        {
            label: 'Watch',
            value: 3,
        },
        {
            label: 'Home Living',
            value: 4,
        }
    ]

    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            <AppCarousel />
            <div className="max-w-7xl mx-auto pt-10 pb-8">                
                <div className="mb-4">
                    <span className="text-xl font-bold">Semua Produk</span>
                </div>
                <div className="h-9 mb-4">
                    <Row className="pr-2 items-center">
                        <Col span={12} className="h-full float-left">
                        </Col>
                        <Col span={12} className="h-max float-right">
                            <div className="float-right">
                                <span className="text-[17px]">Urutkan : </span>
                                <Select options={sortOpt} defaultValue={1} size="large" style={{width: '200px'}}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={19} push={5} >
                            <div className="p-2 shadow">
                                <Row gutter={16} className="flex">
                                    {product.map(item => (
                                        <AppCard product={item} key={item.id}/>
                                    ))}
                                </Row> 
                            </div>
                        </Col>
                        <Col span={5} pull={19} >
                            <div className="mr-4 shadow-lg p-2">
                                <span className="font-bold text-[20px]">Filter</span>
                                <div>
                                    <span className="font-semibold text-lg">Kategori</span><br/>
                                    <div>
                                        <ul>
                                            {
                                                cat.map(item => (
                                                    <li>
                                                        <input type="checkbox" name={item.value}/>
                                                        <label htmlFor={item.value} className="text-[17px]">{item.label}</label>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home;