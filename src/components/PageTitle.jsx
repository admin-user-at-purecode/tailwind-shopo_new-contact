import BreadcrumbCom from "./BreadcrumbCom";

export default function PageTitle({ title, breadcrumb = [] }) {
  return (
    <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10 ">
      <div className=" flex justify-center flex-col items-center">
        <div className="mb-4">
          <BreadcrumbCom paths={breadcrumb} />
        </div>
        <div className="">
          <h1 className="text-4xl font-semibold text-qblack">{title}</h1>
        </div>
      </div>
    </div>
  );
}
