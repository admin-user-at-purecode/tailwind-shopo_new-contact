import InputCom from "../InputCom";
import PageTitle from "../PageTitle";
import Layout from "../Layout";
import ThinPeople from "../icons/ThinPeople";

export default function Contact() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="page-title mb-10">
        <PageTitle
          title="Contact"
          breadcrumb={[
            { name: "home", path: "/" },
            { name: "contact", path: "/contact" },
          ]}
        />
      </div>
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-1">
                Contact Information
              </h1>
              <p className="text-[15px] text-qgraytwo leading-[30px] mb-5">
                Fill the form below or write us .We will help you as soon as
                possible.
              </p>

              <div className="flex flex-col gap-4 mb-[30px]">
                <div className="w-full  h-[196px] flex flex-col item justify-center bg-[#FFEAE5] ">
                  <div className="flex justify-center mb-3 ">
                  <ThinPeople/>
                  </div>
                  <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                    Phone
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    +(323) 9847 3847 383
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    +(434) 5466 5467 443
                  </p>
                </div>
                <div className="w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] ">
                  <div className="flex justify-center mb-3 ">
                  <ThinPeople/>
                  </div>
                  <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                    Email
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    Demoemail@gmail.com
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    rafiqulislamsuvobd@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white sm:p-10 p-3">
              <div className="title flex flex-col items-center">
                <h1 className="text-[34px] font-bold text-qblack">
                  Get In Touch
                </h1>
              </div>
              <div className="inputs mt-5">
                <div className="mb-4">
                  <InputCom
                    label="Frist Name*"
                    placeholder="Demo Name"
                    name="first_name"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Email Address*"
                    placeholder="info@quomodosoft.com"
                    name="email"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Subject*"
                    placeholder="Your Subject here"
                    name="subject"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-5">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Message*
                  </h6>
                  <textarea
                    placeholder="Type your message here"
                    className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"
                  ></textarea>
                </div>
                <div>
                    <div className="black-btn text-sm font-semibold w-full h-[50px] flex justify-center items-center">
                      <span>Send Now</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}