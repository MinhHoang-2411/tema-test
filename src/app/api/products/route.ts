import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 1000, stock: 5, imgUrl: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopsunder500-2048px-5452.jpg" },
    { id: 2, name: "Smartphone", price: 700, stock: 10, imgUrl: "https://zshop.vn/images/companies/1/iphone-12.jpg?1602662047456" },
    { id: 3, name: "Tablet", price: 400, stock: 8, imgUrl: "https://m.media-amazon.com/images/I/71Mt4JAZQtL._AC_SL1500_.jpg" },
    { id: 4, name: "Smartwatch", price: 250, stock: 12, imgUrl: "https://seve7.vn/wp-content/uploads/2023/04/Untitled-1-900x900.jpg" },
    { id: 5, name: "Headphones", price: 150, stock: 20, imgUrl: "https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" },
    { id: 6, name: "Keyboard", price: 80, stock: 15, imgUrl: "https://dlcdnwebimgs.asus.com/files/media/50c8b1ca-34f9-4c6d-8f3d-7803714bd7b6/v1.1/features/images/large/1x/s3/main.jpg" },
    { id: 7, name: "Mouse", price: 50, stock: 18, imgUrl: "https://arcticfox.com/cdn/shop/files/Red_Mouse_copy_3.png?v=1720679222&width=1500" },
    { id: 8, name: "Monitor", price: 300, stock: 6, imgUrl: "https://cdn.thewirecutter.com/wp-content/media/2023/07/4kmonitors-2048px-9794.jpg" },
    { id: 9, name: "Speaker", price: 120, stock: 9, imgUrl: "https://image.made-in-china.com/2f0j00NYpquiHksGoU/Classic-Original-Flip5-1-1-Flip-6-Speakers-Waterproof-Outdoor-Portable-Wireless-Peaker-Blue-Tooth-Sound-Party-Box-with-Flashoing-Light.webp" },
    { id: 10, name: "Webcam", price: 90, stock: 11, imgUrl: "https://hanoicomputercdn.com/media/product/70800_webcam_anker_powerconf_c302_a3362_mau_den.jpg" },
  ];

  return NextResponse.json(products);
}
