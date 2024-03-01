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