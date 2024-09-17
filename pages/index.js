// "use server";
import Image from "next/image";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

function Home(props) {
  const Users = "5";
  const Items = "10,000";
  const Topups = "1,000";
  const Historys = "12:03:32";
  const A = "9,999";
  return (
    <main className="font-mono scroll-smooth focus:scroll-auto bg-pink-50 w-full container text-center min-h-screen text-black-400 ">
      <div data-aos="fade-down" data-aos-duration="800">
        <br></br>
        <h1 className="text-5xl w-fit font-bold text-pink-400 -skew-x-12 tracking-tighter">
          Kornpitack Esports
        </h1>
      </div>
      <div
        className="grid pt-3 d-flex justify-content-center"
        data-aos="zoom-in"
      >
        <img
          className="img-fluid rounded-top-lg"
          src="https://www.kornpitack.ac.th/admin/index_page/file/1/0001.png"
          alt="banner"
        ></img>
      </div>
  <br></br>
    <div>

    //    data-aos="fade-down"
     //   className="w-full flex rounded-xl overflow-hidden shadow-lg text-sm sm:text-base"
     // >
        //<p className="bg-gradient-to-tr from-blue-500 to-blue-300 px-4 py-2 text-white whitespace-nowrap">
          //<span data-aos="fade-down" class="hidden sm:inline-flex">
          //  อัพเดต
       //   </span>
       //   ข่าวสาร
       // </p>
      //  <marquee data-aos="fade-down" class="bg-white py-2">
       //   หากพบปัญหา สามารถแจ้งเข้ามาได้ที่ชมรม Coding หรือหัวหน้าระดับ
      //  </marquee>
     </div>
      <div
        className="carousel-root max-h-[360px] w-full rounded-3xl shadow-lg overflow-hidden mb-6 md:mb-12 hover:cursor-pointer"
        data-aos="fade-down"
      >
        <div
          className="flex rounded-xl overflow-hidden shadow-lg text-sm sm:text-base"
          data-aos="fade-down"
        ></div>
      </div>
      <div>
        <TypeAnimation
          className="text-4xl font-bold text-black"
          sequence={["รายละเอียดการโหวต", 3000]}
          cursor={true}
          repeat={Infinity}
        />
        <br></br>
        <hr
          className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"
          data-aos="fade-down"
        ></hr>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 gap-x-4 text-black-500 justify-center text-center pt-7 px-4">
        <div
          className="rounded-2xl shadow-xl bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">มีให้เกมโหวตทั้งหมด...</h1>
          <hr className="d-flex w-48 h-1 my-1 bg-gray-100 border-0 rounded dark:bg-gray-500"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Users} เกม</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl  bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">โหวตไปแล้วทั้งหมด...</h1>
          <hr className="d-flex w-48 h-1 my-1 bg-gray-100 border-0 rounded dark:bg-gray-500"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Items} คน</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl  bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">ยังไม่โหวตทั้งหมด...</h1>
          <hr className="d-flex w-48 h-1 my-1 bg-gray-100 border-0 rounded dark:bg-gray-500"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Topups} คน</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">ปิดโหวตในอีก...</h1>
          <hr className="d-flex w-48 h-1 my-1 bg-gray-100 border-0 rounded dark:bg-gray-500"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Historys}</h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className="text-4xl font-bold text-black" data-aos="fade-down">
          รายละเอียดเกมทั้งหมด
        </h1>
        <hr
          className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"
          data-aos="fade-down"
        ></hr>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-4 text-black-500 justify-center text-center pt-7 px-5">
          <div
            className="relative rounded-xl shadow-xl bg-white border-white-500 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img
              class="img-fluid rounded-top-lg object-cover w-full h-full" // w-[400px] h-[200px]
              src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
              alt="card_image"
              data-aos="fade-up"
            ></img>
            <div className="absolute bottom-5 left-10 flex flex-col items-start">
              <h1 className="text-red-500 text-4xl">Valorant</h1>
              <p className="text-red-50">เกม fps 5v5 บลาบลาบลาบลา</p>
            </div>
            <h1 className="text-white text-4xl absolute bottom-10 right-10">
              {A} คน
            </h1>
          </div>
          <div
            className="relative rounded-xl shadow-xl bg-white border-white-500 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img
              class="img-fluid rounded-top-lg object-cover w-full h-full" // w-[400px] h-[200px]
              src="https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg"
              alt="card_image"
              data-aos="fade-up"
            ></img>
            <div className="absolute bottom-5 left-10 flex flex-col items-start">
              <h1 className="text-blue-500 text-4xl">Overwatch 2</h1>
              <p className="text-black-100">เกม fps 5v5 บลาบลาบลาบลา</p>
            </div>
            <h1 className="text-white text-4xl absolute bottom-10 right-10">
              {A} คน
            </h1>
          </div>
          <div
            className="relative rounded-xl shadow-xl bg-white border-white-500 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img
              class="img-fluid rounded-top-lg object-cover w-full h-full"
              src="https://cdn.oneesports.co.th/cdn-data/wp-content/uploads/sites/3/2019/12/RoV.jpg"
              alt="card_image"
              data-aos="fade-up"
            ></img>
            <div className="absolute bottom-5 left-10 flex flex-col items-start">
              <h1 className="text-red-500 text-4xl">Rov</h1>
              <p className="text-red-50">เกม fps 5v5 บลาบลาบลาบลา</p>
            </div>
            <h1 className="text-white text-4xl absolute bottom-10 right-10">
              {A} คน
            </h1>
          </div>
          <div
            className="relative rounded-xl shadow-xl bg-white border-white-500 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img
              class="img-fluid rounded-top-lg object-cover w-full h-full"
              src="https://gossip.gg/_next/image?url=https%3A%2F%2Fd2dgkt5728m0bd.cloudfront.net%2Fcs_9c621561e3.png&w=3840&q=75"
              alt="card_image"
              data-aos="fade-up"
            ></img>
            <div className="absolute bottom-5 left-10 flex flex-col items-start">
              <h1 className="text-red-500 text-4xl">Counter Strike 2</h1>
              <p className="text-red-50">เกม fps 5v5 บลาบลาบลาบลา</p>
            </div>
            <h1 className="text-white text-4xl absolute bottom-10 right-10">
              {A} คน
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
    </main>
  );
}

// export async function getServerSideProps() {
//   const res = await axios.get('http://localhost:8080/score');
//   const data = res.data;
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Home;
