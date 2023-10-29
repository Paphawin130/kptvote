import Image from "next/image";

export default function vote() {
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
            <Image
              class="w-[400px] h-[188px] object-cover"
              src="https://images.alphacoders.com/128/thumb-1920-1282982.jpg"
              alt="card_image"
              data-aos="fade-up"
              width="1000"
              height="1000"
            ></Image>
            <div class="p-4 bg-gradient-to-tr from-purple-200 to-white">
              <h1 class="text-xl font-semibold">Vote</h1>
            </div>
            
          </div>
        </div>
      </div>

     
    </main>
  );
}
