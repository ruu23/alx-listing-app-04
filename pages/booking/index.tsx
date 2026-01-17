import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from '@/public/assets/Arrow Left.svg'

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="">
      <div className="h-[80px] bg-[#F8FAFC] w-full flex flex-wrap items-center gap-3">
        <Link href='/'><Image src={arrowLeft} alt="arrow" className="ml-[8rem]"/></Link>
        <h1 className="text-[#34967C] font-bold text-[25px] hover:border-[#34967C] border-b-2 py-5">Booking</h1>
      </div>
      <div className=" container mx-auto p-6 grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails}/>
      </div>
    </div>
  );
}
