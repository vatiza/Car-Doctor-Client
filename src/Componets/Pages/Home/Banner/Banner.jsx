import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
          <div className="text-white space-y-7 w-1/2 pl-8">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-warning me-5">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
          <div className="text-white space-y-7 w-1/2 pl-8">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-warning me-5">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
          <div className="text-white space-y-7 w-1/2 pl-8">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-warning me-5">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
          <div className="text-white space-y-7 w-1/2 pl-8">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-warning me-5">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
