import { Button, Card, Col, Input, Pagination, Row, Select } from "antd";
import AppCarousel from "../../components/AppCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../../components/AppCard";

const Home = () => {


    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState('');
    const [perPage, setPerPage] = useState('');
    const [total, setTotal] = useState('');
    const [sorting, setSorting] = useState('Lates');
    const [q, setQ] = useState('')

    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://hijja.sistemtoko.com/public/imedia/product?page=${currentPage}&sorting=${sorting}&categories=all&search_name=${q}`)
            setProduct(resp.data.aaData)
            setCurrentPage(resp.data.current_page);
            setPerPage(resp.data.per_page);
            setTotal(resp.data.total);
        } catch (err) {
            console.log(err)
        }
    }

    // const fetchCategory = async () => {
    //     try {
    //         const resp = await axios.get()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // console.log(perPage)

    const sortOpt = [
        {
            label: 'Lates',
            value: 'Lates',
        },
        {
            label: 'Harga Tertinggi',
            value: 'expensive',
        },
        {
            label: 'Harga Terendah',
            value: 'cheapest',
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
    },[q, currentPage, sorting])
    return (
        <div>
            <AppCarousel />
            <div className="max-w-7xl mx-auto pt-10 pb-8">                
                <div className="mb-4">
                    <span className="text-xl font-bold">Semua Produk</span>
                </div>
                <div className="h-9 mb-4">
                    <Row className="items-center">
                        <Col span={18} push={5} className="h-full float-left">
                            <Input className="w-[700px]" placeholder="Cari disini ..." onChange={(e) => setQ(e.target.value)}/>
                        </Col>
                        <Col span={6} className="h-max float-right">
                            <div className="float-right">
                                <span className="text-[17px]">Urutkan : </span>
                                <Select options={sortOpt} defaultValue={'Lates'} size="large" style={{width: '200px'}} onChange={(value) => setSorting(value)}/>
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
                                        <AppCard product={item} key={item.id} page={currentPage}/>
                                    ))}
                                </Row> 
                            </div>
                            <Pagination 
                                className="pb-10 pt-3"
                                total={total}
                                current={currentPage}
                                // defaultPageSize={perPage}
                                pageSize={perPage}
                                onChange={page => setCurrentPage(page)}
                            />
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