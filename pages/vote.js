import Image from "next/image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function vote() {
  const handleVote = async (event) => {
    event.preventDefault();

    // const data = {
    //   game: event.target.game.value,
    //   vote: event.target.vote.value,
    //   ip: event.target.ip.value,
    // };

    // const JSONdata = JSON.stringify(data);

    // const endpoint = "http://localhost:8080/apiV1/user/vote";

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSONdata,
    // };

    // const response = await fetch(endpoint, options);
    // const result = await response.json();

    // console.log(result);

    if (handleVote) {
      const showLoading = await Swal.fire({
        icon: "info",
        title: "รอสักครู่...",
        timer: 1000,
        didOpen: function () {
          Swal.showLoading();
        },
      });
      if (showLoading) {
        Swal.fire({
          icon: "error",
          title: "แย่จัง!",
          text: "ระบบยังไม่เปิด Vote เลยนะคะ",
          timer: 2000,
          showConfirmButton: false,
          showClass: {
            popup: "animate__animated animate__slideInDown animate__faster",
          },
          hideClass: {
            popup:
              "animate__animated animate__lightSpeedOutLeft animate__faster",
          },
        });
        return;
      }
    } else {
      const showLoading = await Swal.fire({
        icon: "info",
        title: "รอสักครู่...",
        timer: 1000,
        didOpen: function () {
          Swal.showLoading();
        },
      });

      if (showLoading) {
        Swal.fire({
          icon: "success",
          title: "เยี่ยมเลย!",
          text: "Vote !!",
          timer: 2000,
          showConfirmButton: false,
          showClass: {
            popup: "animate__animated animate__slideInDown animate__faster",
          },
          hideClass: {
            popup:
              "animate__animated animate__lightSpeedOutLeft animate__faster",
          },
          didClose: function () {
            router.push("/login", undefined);
          },
        });
      }
    }
  };
  return (
    <main
      className="container text-center min-h-screen text-purple-400 "
      data-aos="fade-up"
    >
      <div id="__next">
        <div
          className="grid pt-3 d-flex justify-content-center"
          data-aos="zoom-in"
        >
          <center>
            <img
              className="img-fluid rounded-top-lg"
              src="https://www.kornpitack.ac.th/admin/index_page/file/1/0001.png"
              alt="banner"
              // width="2000"
              // height="2000"
            ></img>
          </center>
        </div>
        <br></br>

        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-center text-2xl text-pink-500 mb-2">
            เลือกเกมได้เลย !
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-4 text-black-500 justify-center text-center pt-7 px-5">
            <div
              className="relative rounded-xl shadow-xl bg-white border-white-500 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Form onClick={handleVote}>
                <img
                  class="img-fluid rounded-top-lg object-cover w-full h-full" // w-[400px] h-[200px]
                  src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
                  alt="card_image"
                  data-aos="fade-up"
                  // width="1000"
                  // height="1000"
                ></img>

                <div className="absolute bottom-5 left-10 flex flex-col items-start">
                  <h1 className="text-red-500 text-4xl">Valorant</h1>
                  <p className="text-red-50">เกม fps 5v5 บลาบลาบลาบลา</p>
                </div>
                <h1 className="text-white text-4xl absolute bottom-10 right-10">
                  ระบบยังไม่เปิด Vote
                </h1>
              </Form>
            </div>
            <div
              className="relative rounded-xl shadow-xl bg-white border-white-500 transition ease-in-out delay-50 hover:-translate-y-7 hover:scale-11 duration-300 cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Form onClick={handleVote}>
                <img
                  class="img-fluid rounded-top-lg object-cover w-full " // w-[400px] h-[200px]
                  src="https://press-start.com.au/wp-content/uploads/2022/09/OW2-Header-770x433.jpg"
                  alt="card_image"
                  data-aos="fade-up"
                  width="1000"
                  height="1000"
                ></img>
                <div className="absolute bottom-5 left-10 flex flex-col items-start">
                  <h1 className="text-red-500 text-4xl">Overwatch 2</h1>
                  <p className="text-red-50">เกม fps 5v5 บลาบลาบลาบลา</p>
                </div>
                <h1 className="text-white text-4xl absolute bottom-10 right-10">
                  ระบบยังไม่เปิด Vote
                </h1>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
