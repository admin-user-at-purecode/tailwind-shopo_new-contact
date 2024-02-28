
export default function PageTitle({ title, breadcrumb = [] }) {
  return (
    <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10 ">
      <div className="container-x mx-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold text-qblack">{title}</h1>
        </div>
      </div>
    </div>
  );
}
