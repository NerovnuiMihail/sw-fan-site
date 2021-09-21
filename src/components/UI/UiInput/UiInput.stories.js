import UiInput from "./UiInput";
import {useState} from "react";

export default {
    title: 'Ui-Kit/UiInput',
    component: UiInput
};

const Template = arg => {
    const [value, setValue] = useState('');

    const handleInputChange = value => {
        setValue(value);
    }

    return (
        <UiInput
            {...arg}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
}

const props = {
    value: '',
    handleInputChange: () => console.log('input change'),
    placeholder: 'placeholder',
    classes: ''
}

export const Default = Template.bind({});
Default.args = {
    ...props
};