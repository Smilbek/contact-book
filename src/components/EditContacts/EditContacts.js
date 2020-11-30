import React, {useState} from 'react'

const EditContacts = (props) => {

    let [name, setName] = useState(props.editContact.name);
    let [surname, setSurname] = useState(props.editContact.surename);
    let [phone, setPhone] = useState(props.editContact.phone);

    function handleSaveClick(){
        let contact = {...props.editContact};
        contact.name = name;
        contact.surename = surname;
        contact.phone = phone;
        
        props.handleSaveEditedContact(contact)
        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div>
            <input 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Имя"
                value={name}
            />

            <input onChange={(e) => setSurname(e.target.value)} 
                type="text" 
                placeholder="Фамилия"
                value={surname}
            />

            <input onChange={(e) => setPhone(e.target.value)} 
                type="text" 
                placeholder="Номер Телефона"
                value={phone}
             />

             
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default EditContacts;