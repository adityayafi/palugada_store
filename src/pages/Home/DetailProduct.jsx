import { Button, Col, Row, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProduk = () => {

    const {id} = useParams();
    const newId = parseInt(id);

    const [allData, setAllData] = useState([])
    const [dispData, setDispData] = useState({
        id: "",
        product_name: "",
        price: "",
        stock : "" ,
        varian : "",
        photo:"",
    })


    const fetchDetailData = async () => {
        try {
            const resp = await axios.get('https://hijja.sistemtoko.com/public/imedia/product?page=2&sorting=Lates&categories=all&search_name=none')
            const res = resp.data.aaData
            res.filter((item) => {
                if (item.id === newId){
                    setAllData([
                        {
                        'id': item.id,
                        'name': item.name,
                        'price' : item.price,
                        'stock' : item.stock,
                        'varian': item.plain_varian.length !== 0? item.plain_varian[0].value : '-',
                        'photo': item.photo,
                        }
                    ])
                    setDispData({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        stock: item.stock,
                        varian: item.plain_varian.length !== 0? item.plain_varian[0].value : '-',
                        photo: item.photo,
                    })

                    item.childs.length !== 0 ? 
                    item.childs.map(item => 
                        setAllData(current => [...current, {
                            'id': item.id,
                            'name': item.name,
                            'price' : item.price,
                            'stock' : item.stock,
                            'varian': item.plain_varian[0].value,
                            'photo': item.photo,
                        }])
                        )
                    :
                    null;
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchDetailData();
    },[])

    const handleChange = (id) => {
        allData.map(item => {
            if (item.id === id){
                setDispData({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    stock: item.stock,
                    varian: item.varian,
                    photo: item.photo,
                })
            }
        })
    }

    const option = allData.map(item => ({
        label: item.varian,
        value: item.id
    }))

    console.log('option', option)

    return (
        <div className="max-w-7xl mx-auto py-4">
            <div className="shadow-lg my-4 border">
                <Row gutter={16}>
                    <Col flex='500px' className="justify-center flex">
                        <div className="block m-3">
                            <div >
                                <img src={dispData.photo} alt="" className="w-[450px] h-[450px]"/>
                            </div>
                        </div>
                    </Col>
                    <Col flex={3} className="flex-col flex m-3">
                        <span className="font-bold text-2xl">{dispData?.name?.charAt(0).toUpperCase() + dispData?.name?.substring(1)}</span><br />
                        <span className="font-medium text-xl pt-2 flex">Rp. {dispData?.price}</span>
                        <span className="text-xs">Belum termasuk ongkos kirim</span>
                        <span className="pt-4 pb-1 text-lg">Varian</span>
                        <Select options={option} defaultValue={dispData.id} key={dispData.id} style={{width: '200px'}} onChange={(value) => handleChange(value)}/>
                        <span className="pt-4">Stok : {dispData.stock}</span>
                        <Button className="mt-8" style={{width: '200px', borderRadius: 0}}>Beli Langsung</Button>
                        <Button type="primary" htmlType="" className="mt-4" style={{width: '200px', borderRadius: 0}}>Tambahkan ke Keranjang</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DetailProduk;