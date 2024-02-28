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
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px] ">
            <div className="w-full">
              <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-1">
                Contact Information
              </h1>
              <p className="text-[15px] text-qgraytwo leading-[30px] mb-5">
                Fill the form below or write us .We will help you as soon as
                possible.
              </p>

              <div className="flex flex-col mb-[30px] w-100 gap-4">
                <div className="w-full  h-[196px] flex flex-col item justify-center bg-[#FFEAE5] p-5">
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
                <div className=" w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] p-5">
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
              <div className="p-5 flex flex-col  w-full bg-[#E7F2EC]">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}