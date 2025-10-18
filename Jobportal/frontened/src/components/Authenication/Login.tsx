import { Button, TextInput } from "@mantine/core";
import { MdAlternateEmail, MdOutlineLockPerson } from "react-icons/md";

function Login({ toggleForm }) {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md w-full ">
      <h3 className="text-2xl font-semibold mb-6 text-center text-white">Login</h3>
      <div className="space-y-4">
        <TextInput
          label="Email"
          withAsterisk
          placeholder="Your email"
          className="w-full"
          leftSection={<MdAlternateEmail size="20" />}
        />
        <TextInput
          label="Password"
          withAsterisk
          placeholder="Password"
          type="password"
          className="w-full"
          leftSection={<MdOutlineLockPerson size="20" />}
        />
        <Button fullWidth className="mt-4 bg-red-500 hover:bg-red-600">
          Log in
        </Button>
      </div>
      <p className="text-center text-sm text-gray-300 mt-6">
        Don't have an account?{" "}
        <span
          onClick={toggleForm}
          className="text-red-500 hover:underline cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;
