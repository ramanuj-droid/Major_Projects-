import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const optionss = ['Relevance', 'Most Recent', 'Salary (Low to High)','Salary (High to Low)'];


function Sort() {
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = optionss.map((item) => (
    <Combobox.Option className='!text-sm'  value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
          
        store={combobox}
        width={160}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button className='sm:font-extralight' onClick={() => combobox.toggleDropdown()} color='#FF4B4B' >{selectedItem}</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options >{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;