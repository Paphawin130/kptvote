import Image from "next/image";
import axios from "axios";

function Home(props) {
  const Users = 8
  const Items = 8
  const Topups = 8
  const Historys = 8
  return (
    <main className="w-full container text-center min-h-screen text-purple-400 ">
      <div data-aos="fade-down" data-aos-duration="800">
        <h1 class="text-5xl w-fit font-bold text-purple-400 -skew-x-12 tracking-tighter">
          Kornpitack eSports
        </h1>
      </div>
      {/* <h1 className="md:w-1/2 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-blue-300 nsys_fadeIn mb-6 md:mb-0"></h1> */}
      <div
        className="grid pt-3 d-flex justify-content-center"
        data-aos="zoom-in"
      >
        <center>
          <img
            className="img-fluid rounded-top-lg"
            src="https://www.kornpitack.ac.th/admin/index_page/file/1/0001.png"
            alt="banner"
            // width="1900"
            // height="1900"
          ></img>
        </center>
      </div>
      <br></br>
      <div
        className="carousel-root max-h-[360px] w-full rounded-3xl shadow-lg overflow-hidden mb-6 md:mb-12 hover:cursor-pointer"
        data-aos="fade-down"
      >
        <div
          className="flex rounded-xl overflow-hidden shadow-lg text-sm sm:text-base"
          data-aos="fade-down"
        >
          {/* <p class="bg-gradient-to-tr from-purple-500 to-purple-300 px-4 py-2 text-white whitespace-nowrap" data-aos="fade-down">
          <span class="hidden sm:inline-flex" data-aos="fade-down">ประกาศ</span>ข่าวสาร
        </p> */}
          <marquee class="bg-white py-2">
            หากพบปัญหา สามารถแจ้งเข้ามาได้ที่ชมรม Coding
          </marquee>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 gap-x-4 text-blue-500 justify-center text-center pt-7 px-4">
        <div
          className="rounded-2xl shadow-xl border-8 bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="d-flex justify-content-center">
            <Image src="/imgs/user.gif" width="60" height="60" alt="user" />
          </div>
          <h1 className="text-2xl">{Users}</h1>
          <h1 className="text-xl">จำนวนผู้ Vote ทั้งหมด</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl border-8 bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="d-flex justify-content-center">
            <Image
              src="/imgs/shopping-cart.gif"
              width="50"
              height="50"
              alt="shopping-cart"
            />
          </div>
          <h1 className="text-2xl">{Items}</h1>
          <h1 className="text-xl">เกมทั้งหมด</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl border-8 bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <div className="d-flex justify-content-center">
            <Image src="/imgs/dollar.gif" width="50" height="50" alt="dollar" />
          </div>
          <h1 className="text-2xl">{Topups}</h1>
          <h1 className="text-xl">ยอดการ Vote ทั้งหมด</h1>
        </div>
        <div
          className="rounded-2xl shadow-xl border-8 bg-white border-white-500 p-6 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="d-flex justify-content-center">
            <Image
              src="/imgs/money-flow.gif"
              width="50"
              height="50"
              alt="money-flow"
            />
          </div>
          <h1 className="text-2xl">{Historys}</h1>
          <h1 className="text-xl">จำนวนผู้ลงทะเบียนทั้งหมด</h1>
        </div>
      </div>

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
