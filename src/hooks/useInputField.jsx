import { useState } from "react";

const useInputField = (defaultValue) =>{

    const [fieldValue, setFieldvalue] = useState(defaultValue);


    const handleFieldOnChange = e =>{
        setFieldvalue(e.target.value);
    }

     return [fieldValue, handleFieldOnChange];

}

export default useInputField;