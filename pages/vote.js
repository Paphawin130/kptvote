import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <main className="container text-center min-h-screen text-purple-400 " data-aos="fade-up">
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
          <p className="text-center mb-2">เลือกเกมได้เลย !</p>

          <div
            class="w-[400px] h-fit overflow-hidden rounded-md shadow-md transition duration-300 hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <img
              class="w-[400px] h-[188px] object-cover"
              src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
              alt="card_image"
              data-aos="fade-up"
              // width="1000"
              // height="1000"
            ></img>
            <Form onClick={handleVote}>
            <div class="p-4 bg-gradient-to-tr from-purple-200 to-white">
              <Button class="text-xl font-semibold" onClick={handleVote}> Vote</Button>
            </div>
            </Form>
          </div>
        </div>
      </div>

     
    </main>
  );
}
