import { CiBookmark, CiLocationOn } from 'react-icons/ci';
import avatar from '../../assets/avatar.png';
import { ActionIcon, Button, Divider, Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef, useState } from 'react';
import { LuClock9 } from "react-icons/lu";


function ApplicantCard() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [datevalue, setDateValue] = useState<Date | null>(null);

  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <LuClock9 size={16}  />
    </ActionIcon>
  );

  return (
    <div className="flex flex-col gap-3 p-4 bg-[#343F3F] text-white rounded-xl shadow-md w-full max-w-md transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">

      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="h-10 w-10 object-cover rounded-full" src={avatar} alt="avatar" />
          <div className="flex flex-col">
            <span className="font-semibold text-base sm:text-lg">Avinash Rathore</span>
            <span className="text-gray-300 text-sm">Engineer • Microsoft</span>
          </div>
        </div>
        <CiBookmark className="text-2xl hover:text-gray-400 transition-colors" />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-800">
        <span className="bg-gray-200 px-2 py-1 rounded-md">React</span>
        <span className="bg-gray-200 px-2 py-1 rounded-md">Node.js</span>
        <span className="bg-gray-200 px-2 py-1 rounded-md">TypeScript</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus corporis labore recusandae, magni ullam?
      </p>

      <Divider size="sm" color="gray" />

      {/* Salary & Location */}
      <div className="flex justify-between flex-wrap text-sm font-medium text-gray-300">
        <div>₹ 15 LPA</div>
        <div className="flex items-center gap-1">
          <CiLocationOn size="18" /> Bhopal, India
        </div>
      </div>

      <Divider size="sm" color="gray" />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 justify-between text-sm font-medium">
        <Button
          fullWidth
          onClick={() => navigate(`/talent-profile/Jarrod Wood`)}
          variant="default"
          color="red"
        >
          Profile
        </Button>
        <Button onClick={open} fullWidth variant="filled" color="red">
          <div className='flex items-end gap-2'>
            Schedule
            <SlCalender size={20} />
          </div>
        </Button>
      </div>
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div>
          <DateInput
            minDate={new Date()}
            valueFormat="DD/MM/YYYY"
            value={datevalue}
          onChange={setDateValue}
            label="Interview Date"
            placeholder="Interview Date"
          />
          <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
        </div>
      </Modal>
    </div>
  );
}

export default ApplicantCard;
