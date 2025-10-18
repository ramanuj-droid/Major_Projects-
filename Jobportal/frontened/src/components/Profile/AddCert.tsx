import { Button, TextInput } from "@mantine/core";
import { handleControlKeyDown, MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import { formatMonthYear } from "../../utils/utils01";

function AddCert({setCertificate}) {
  const [newCert, setNewCert] = useState({
    name: "",
    issuer: "",
    issueDate: "",
    certificateId: ""
  });

  const handleAdd=()=>{
    setCertificate((prev) => {
      return [...prev, {
        ...newCert,
      }]
    })
  }

  return (
    <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md my-1 hover:scale-101 transition-transform duration-300 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">

      
      <div>
        <TextInput
          label="Certificate Name"
          placeholder="Certificate Name"
          withAsterisk
          className="mb-2"
          value={newCert.name}
          onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
        />
      </div>
      <div>
        <TextInput
          label="Issuer"
          placeholder="Issuing Organization"
          withAsterisk
          className="mb-2"
          value={newCert.issuer}
          onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
        />
      </div>
      <div>
        <TextInput
          label="Certificate ID"
          placeholder="Certificate ID (optional)"
          className="mb-2"
          value={newCert.certificateId}
          onChange={(e) => setNewCert({ ...newCert, certificateId: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Pick date"
          withAsterisk
          
          onChange={(date) => setNewCert({ ...newCert, issueDate: formatMonthYear(date) })}
        />
      </div>

      <div>
       
      </div>
      
      </div>
      <Button fullWidth onClick={handleAdd}>
          Add Certificate
        </Button>
    </div>
  );
}

export default AddCert;
