import { Button, Checkbox, TextInput } from "@mantine/core";
import { MdOutlineLockPerson, MdAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function SignUp({ toggleForm }) {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md w-full">
      <h3 className="text-2xl font-semibold mb-6 text-center text-white">Create Account</h3>
      <div className="space-y-4">
        <TextInput
          label="Full Name"
          withAsterisk
          placeholder="Your name"
          leftSection={<FaUser size="20" />}
        />
        <TextInput
          label="Email"
          withAsterisk
          placeholder="Your email"
          leftSection={<MdAlternateEmail size="20" />}
        />
        <TextInput
          label="Password"
          withAsterisk
          placeholder="Password"
          type="password"
          leftSection={<MdOutlineLockPerson size="20" />}
        />
        <TextInput
          label="Confirm Password"
          withAsterisk
          placeholder="Confirm Password"
          type="password"
          leftSection={<MdOutlineLockPerson size="20" />}
        />
        <Checkbox
          label="I accept the terms and conditions"
          color="red"
          className="mt-2"
        />
        <Button fullWidth className="mt-4 bg-red-500 hover:bg-red-600">
          Sign up
        </Button>
      </div>
      <p className="text-center text-sm text-gray-300 mt-6">
        Already have an account?{" "}
        <span
          onClick={toggleForm}
          className="text-red-500 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default SignUp;
