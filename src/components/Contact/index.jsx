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
              <div className="p-5 flex flex-col justify-between w-full bg-[#E7F2EC]">
                <div className="flex space-x-5">
                <ThinPeople/>
                  <div>
                    <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-2">
                      Address
                    </h1>
                    <p className="text-[15px] text-qblack leading-[30px]">
                      4517 Washington Ave. Manchester, Road 2342, <br />
                      Kentucky 39495
                    </p>
                  </div>
                </div>
                <div className="w-full h-[206px] mt-5">
                  <iframe
                    title="newWork"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025064!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1656755618576!5m2!1sen!2sbd"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
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