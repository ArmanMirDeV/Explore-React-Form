/*
 1. e.target.[name of the input field]
2. Use form action and formData in the action handler. formData.get("name of the input field");
3. Controlled component. one per each field... use state on change of the field. useful to dynamically handle error

4. handle all controlled field one state object.
const [formData, setFormData] = useState({
name: '';
password: '';
phone: ''
})

5. Controlled UnControlled using useRef 

*/