import { useFormik } from "formik";
import { registerSchema } from "../../utils/yup";
import { RegisterFormValue } from "../../utils/interface";

const RegisterForm = () => {
  const initialValues: RegisterFormValue = {
    username: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto mt-10 p-6 border border-gray-400 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-white font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.username}
              className={`mt-1 bg-white text-black block w-full p-2 border ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="mt-2 text-sm text-red-800">
                {typeof formik.errors.username === "string" &&
                  formik.errors.username}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-white font-medium"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.email}
              className={`mt-1 bg-white text-black block w-full p-2 border ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-2 text-sm text-red-800">
                {typeof formik.errors.email === "string" && formik.errors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-white font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.password}
              className={`mt-1 bg-white text-black block w-full p-2 border ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-2 text-sm text-red-800">
                {typeof formik.errors.password === "string" &&
                  formik.errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterForm;
