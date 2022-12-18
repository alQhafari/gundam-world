import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        axios.get("http://127.0.0.1:8000/api").then((response) => {
            setData(response.data);
        });
    }

    console.log(data);

    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="pt-24">
                <Search />
            </div>

            <div className="container-large w-full h-[700px]">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectFade, Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-full"
                >
                    <SwiperSlide
                        className="w-full h-full bg-cover bg-center rounded-2xl p-12"
                        style={{ backgroundImage: `url("/img/hero1.jpg")` }}
                    >
                        <div className="flex h-full flex-col justify-end">
                            <h2 className="text-5xl lg:text-4xl font-extrabold">
                                Different Worlde’
                            </h2>
                            <h2 className="text-6xl lg:text-7xl font-extrabold">
                                Discount Off <br></br> Up to 50%
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="w-full h-full bg-cover bg-center rounded-2xl p-12"
                        style={{ backgroundImage: `url("/img/hero2.jpg")` }}
                    >
                        <div className="flex h-full flex-col justify-center">
                            <h2 className="text-7xl font-black">Summer Sale</h2>
                            <h2 className="text-4xl font-bold">
                                Discount Off <br></br> Up to 50%
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="w-full h-full bg-cover bg-center rounded-2xl p-12"
                        style={{ backgroundImage: `url("/img/hero3.jpg")` }}
                    >
                        <div className="flex h-full flex-col justify-between">
                            <div className="flex flex-row justify-start ml-4">
                                <h2 className="text-5xl lg:text-7xl font-extrabold">
                                    Different <br></br> Worlde’
                                </h2>
                            </div>
                            <div className="flex flex-row justify-end">
                                <h2 className="text-6xl lg:text-7xl font-extrabold text-right">
                                    Discount Off <br></br> Up to 50%
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="md:mx-20 mx-4 mt-32 py-16 flex flex-col justify-center container-bg-color rounded-2xl">
                <div className=" px-16 flex flex-col justify-between gap-8">
                    <h3 className="font-extrabold text-2xl lg:text-4xl text-white">
                        Rekomendasi minggu ini!!
                    </h3>
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {data.map((propsData, i) => {
                            return (
                                <Link
                                    to={`/products/${propsData.id}`}
                                    key={propsData.id}
                                    props={propsData.id}
                                    state={propsData}
                                >
                                    <Card Data={propsData} key={propsData.id} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
