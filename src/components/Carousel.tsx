type Project = {
    keyword: string;
    image: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
  }

export default function Carousel({projects}: {projects: Project[]}) {
    return (
        <>
            {/* <div className="carousel-images w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                </div>
            </div>
            <div className="carousel-btn flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
            </div> */}
        </>
    )
}