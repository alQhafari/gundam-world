import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Search from "../components/Search";

const SingleProduct = (props) => {
    const [dataOrder, setDataOrder] = useState([]);
    const length = useLocation().pathname.length;
    const id = useLocation().pathname.charAt(length - 1);
    // useEffect(() => {
    //     postData();
    // }, []);
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    let decrement = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrement = () => setCounter(1);
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    const api = "http://127.0.0.1:8000/api/product/" + id;

    async function getData() {
        axios.get(api).then((response) => {
            setData(response.data);
        });
    }
    function postData() {
        axios
            .post("/sendnotif", {
                name: `${data.name}`,
                jumlah: counter,
            })
            .catch((error) =>
                console.log("ERROR: " + error.response.dataOrder)
            );
    }

    // console.log(data);
    console.log(data);
    return (
        <div className="w-full h-full text-white">
            <Navbar />
            <div className="pt-24">
                <Search />
            </div>
            <div className="container-xl w-full h-full">
                <h2 className="text-4xl lg:text-5xl font-extrabold">
                    {data.name}
                </h2>
                <h3 className="text-2xl lg:text-2xl font-medium">
                    {data.name}
                </h3>
                <div className="w-full h-full flex flex-col lg:flex-row gap-16">
                    <div className="basis-1/3 w-full">
                        <div className="w-full h-full flex flex-col gap-4">
                            <div
                                className="w-full h-96 lg:w-full lg:h-[500px] bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url(${data.url})`,
                                }}
                            ></div>
                            <div className="flex flex-row justify-between px-4">
                                <p className="text-3xl">Jumlah</p>
                                <div>
                                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                        <button
                                            data-action="decrement"
                                            onClick={decrement}
                                            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                        >
                                            <span class="m-auto text-2xl font-thin">
                                                -
                                            </span>
                                        </button>
                                        <input
                                            type="number"
                                            class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                                            name="jlhOrder"
                                            id="number"
                                            value={counter}
                                        ></input>
                                        <button
                                            data-action="increment"
                                            onClick={increment}
                                            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                        >
                                            <span class="m-auto text-2xl font-thin">
                                                +
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                value="submit"
                                onClick={postData}
                                className="w-full h-auto bg-button rounded-lg py-3"
                            >
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                    <div className="basis-2/3 w-full flex flex-col justify-between gap-8">
                        <div className="flex flex-row">
                            <p className="border-r pr-4">
                                {data.penilaian} Penilaian
                            </p>
                            <p className="px-4">{data.terjual} Terjual</p>
                        </div>
                        <h3 className="text-4xl font-bold">Rp{data.harga}</h3>
                        <h4 className="text-2xl font-semibold">
                            Deskripsi Produk
                        </h4>
                        <div className="border-t pt-4">
                            <p>{data.deskripsi}</p>
                        </div>
                        <h4 className="text-2xl font-semibold">
                            Detail Produk
                        </h4>
                        <div className="border-t flex flex-col pt-4 gap-4">
                            <div className="flex flex-row justify-between">
                                <p>Merek</p>
                                <p>{data.merek}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Bahan</p>
                                <p>{data.bahan}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Berat</p>
                                <p>{data.berat} Kg</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Dimensi</p>
                                <p>{data.dimensi}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Stok</p>
                                <p>{data.stok}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Asal Pengiriman</p>
                                <p>{data.asal}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
