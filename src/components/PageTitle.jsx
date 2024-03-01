import BreadcrumbCom from "./BreadcrumbCom";

export default function PageTitle({ title, breadcrumb = [] }) {
  return (
    <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10 ">
      <div className="container-x mx-auto">
        <div className="mb-5">
          <BreadcrumbCom paths={breadcrumb} />
        </div>
        <div className="flex">
          <h1 className="text-4xl font-semibold text-qblack">{title}</h1>
        </div>
      </div>
    </div>
  );
}
