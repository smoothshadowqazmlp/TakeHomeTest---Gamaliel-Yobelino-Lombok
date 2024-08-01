import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Auth = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username && password) {
      Cookies.set("auth", JSON.stringify({ username, password }), {
        expires: 1,
      });
      sessionStorage.setItem("auth", JSON.stringify({ username, password }));
      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "You clicked the button!",
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-800"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            className="text-black mt-1 block w-full px-3 py-2 bg-white border border-grey-900 rounded-md shadow-sm placeholder-gray-600 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-grey-900 rounded-md shadow-sm placeholder-gray-600 text-black focus:outline-none"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Auth;
