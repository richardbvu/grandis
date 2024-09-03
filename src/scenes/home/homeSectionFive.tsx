import { useForm } from "react-hook-form";

const HomeSectionFive = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          Join The Community
        </div>
        <div className="px-10 text-center">
          Become a part of our community and receive news about upcoming events,
          exclusive offers, and new vendor openings.
        </div>
        {/* FORM */}
        <form action="" onSubmit={onSubmit} className="w-[90%]">
          <div className="flex items-center xs:flex-col xs:gap-3 sm:flex-col sm:gap-3 md:flex-row md:items-start md:justify-center md:gap-10 lg:flex-row lg:items-start lg:gap-10">
            <div>
              {/* FIRST NAME */}
              <input
                className="h-[60px] w-[300px] rounded border-[1px] border-gray-700 p-3 font-semibold"
                id="name"
                type="text"
                placeholder="First Name"
                {...register("first", { required: true, maxLength: 100 })}
              />
              {errors.first && (
                <p className="mt-2 w-[300px] rounded-lg bg-red-300 py-1 text-center text-red-800">
                  {errors.first.type === "required" &&
                    "This field is required."}
                  {errors.first.type === "maxLength" &&
                    "Max Length is 100 characters."}
                </p>
              )}
            </div>
            {/* LAST NAME */}
            <div>
              <input
                className="h-[60px] w-[300px] rounded border-[1px] border-gray-700 p-3 font-semibold"
                id="name"
                type="text"
                placeholder="Last Name"
                {...register("last", { required: false, maxLength: 100 })}
              />
              {errors.last && (
                <p className="mt-2 w-[300px] rounded-lg bg-red-300 py-1 text-center text-red-800">
                  {errors.last.type === "maxLength" &&
                    "Max Length is 100 characters."}
                </p>
              )}
            </div>
            {/* EMAIL */}
            <div>
              <input
                className="h-[60px] w-[300px] rounded border-[1px] border-gray-700 p-3 font-semibold"
                id="name"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-2 w-[300px] rounded-lg bg-red-300 py-1 text-center text-red-800">
                  {errors.email.type === "required" &&
                    "Email Address is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
            {/* BUTTON */}
            <div>
              <button type="submit">
                <div className="flex h-[60px] w-[100px] items-center justify-center rounded-lg bg-primary-100 text-white transition duration-300 hover:bg-primary-200">
                  Submit
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default HomeSectionFive;
