import { Button, Card, Col } from "antd"
import { useNavigate } from "react-router-dom"

const AppCard = ({product, page}) => {
    // console.log(page)

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail_produk/${page}/${product.id}`)
    }
    return(
        <Col span={6} className="gutter-row mb-2" onClick={handleClick}>
                <Card
                    size="small"
                    className="w-[230px]"
                    cover={<img src={product.photo} style={{borderRadius: 0}}/>}
                    bordered={false}
                    hoverable
                    style={{borderRadius: 0}}
                    
                >
                    <span className="font-bold text-lg py-2">{product.name.charAt(0).toUpperCase() + product.name.substring(1)}</span><br />
                    <span>{'Rp. '+product.price}</span><br />
                    <Button className="w-full rounded-3xl text-white bg-black hover:bg-slate-800 mt-2 h-9" onClick={handleClick}>Detail Produk</Button>
                </Card>
        </Col>
    )
}

export default AppCard;