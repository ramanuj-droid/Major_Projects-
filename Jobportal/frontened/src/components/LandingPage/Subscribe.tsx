import { Button, TextInput } from "@mantine/core"

const Subscribe = () => {
     return (
          <div className="flex flex-col items-center justify-center text-gray-400">
               <div className="text-3xl font-semibold text-center">Never Wants to Miss Any <span className="text-[#FF4B4B] ">Jobs News ?</span></div>
               <div className="text-xl font-light text-center mt-4 mb-6">
                    Subscribe to our newsletter and stay updated with the latest job openings and career tips.
               </div>
               <div className="flex gap-4 p-6 bg-transparent rounded-4xl">
                    <TextInput   
                         placeholder="email"
                    />
                     <Button variant="filled" color="red">Subscribe</Button>
               </div>

          </div>
     )
}

export default Subscribe
