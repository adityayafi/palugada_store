import { Carousel } from "antd";

const AppCarousel = () => {

    const content = [
        {
            key: 1,
            url : 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            key: 2,
            url : 'https://images.unsplash.com/photo-1475180429745-7bdddbdf4e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
        },
        {
            key: 3,
            url : 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            key: 4,
            url : 'https://images.unsplash.com/photo-1507702553912-a15641e827c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
        }

    ]
    return (
        <Carousel autoplay>
            {content.map(url => (
                <div className="h-[400px] w-full" key={url.key}>
                    <img src={url.url} className="w-full"/>
                </div>
            ))}
        </Carousel>

    )
}

export default AppCarousel;