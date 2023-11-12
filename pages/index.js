// "use server";
import Image from "next/image";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

function Home(props) {
  const Users = "5";
  const Items = "10,000";
  const Topups = "1,000";
  const Historys = "12:03:32";
  return (
    <main className="w-full container text-center min-h-screen text-black-400 ">
      <div data-aos="fade-down" data-aos-duration="800">
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
          // width="1900"
          // height="1900"
        ></img>
      </div>
      <br></br>
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
        <hr
          className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
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
          <hr className="w-48 md:my-2"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Users} เกม</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl  bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">โหวตไปแล้วทั้งหมด...</h1>
          <hr className="w-48 md:my-2"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Items} คน</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl  bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">ยังไม่โหวตทั้งหมด...</h1>
          <hr className="w-48 md:my-2"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Topups} คน</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h1 className="d-flex text-2xl">ปิดโหวตในอีก...</h1>
          <hr className="w-48 md:my-2"></hr>
          <br></br>
          <h1 className="d-flex text-5xl">{Historys}</h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className="text-4xl font-bold text-black">รายละเอียดเกมทั้งหมด</h1>
        <hr
          className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
          data-aos="fade-down"
        ></hr>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-4 text-black-500 justify-center text-center pt-7 px-5">
          <div
            className="rounded-2xl shadow-xl bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div
              className="grid pt-3  justify-content-center"
              data-aos="zoom-in"
            >
              <img
                class="img-fluid rounded-top-lg object-cover" // w-[400px] h-[200px]
                src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
                alt="card_image"
                data-aos="fade-up"
                // width="1000"
                // height="1000"
              ></img>
            </div>
            <br></br>
            <br></br>
            <h1 className="text-3xl font-bold text-black" data-aos="fade-down">
              Valorant&nbsp;{Topups} คน
            </h1>
          </div>
          <div
            className="rounded-2xl shadow-xl  bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="800"
          >
             <div
              className="grid pt-3  justify-content-center"
              data-aos="zoom-in"
            >
            <img
              class="img-fluid rounded-top-lg object-cover" // w-[400px] h-[200px]
              src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
              alt="card_image"
              data-aos="fade-up"
              // width="1000"
              // height="1000"
            ></img>
            <br></br>
            <br></br>
            <h1 className="text-3xl font-bold text-black" data-aos="fade-down">
              Valorant&nbsp;{Topups} คน
            </h1>
          </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-4 text-black-500 justify-center text-center pt-7 px-5">
          <div
            className="rounded-2xl shadow-xl bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div
              className="grid pt-3 justify-content-center"
              data-aos="zoom-in"
            >
              <img
                class="img-fluid rounded-top-lg  object-cover"
                src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
                alt="card_image"
                data-aos="fade-up"
                // width="1000"
                // height="1000"
              ></img>
            </div>
            <br></br>
            <br></br>
            <h1 className=" text-3xl font-bold text-black" data-aos="fade-down">
              Overwatch 2&nbsp;{Topups} คน
            </h1>
          </div>
          <div
            className="rounded-2xl shadow-xl  bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div
              className="grid pt-3  justify-content-center"
              data-aos="zoom-in"
            >
            <img
              class="img-fluid rounded-top-lg object-cover" // w-[400px] h-[200px]
              src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
              alt="card_image"
              data-aos="fade-up"
              width="1000"
              height="1000"
            ></img>
            <br></br>
            <br></br>
            <h1 className=" text-3xl font-bold text-black" data-aos="fade-down">
              Valorant&nbsp;{Topups} คน
            </h1>
          </div>
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
