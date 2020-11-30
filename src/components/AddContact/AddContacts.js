// Шаг 3 Создаем переменную для тиого чтобы собирать информацию
import React, {useState} from 'react';


//Шаг 1 - Создаем инпуты. Затем переходим в App.Js и импортируем - подключаем

//Шаг 2 - добавим кнопку button //Шаг 8.1 Передаем props в наши компоненты
const AddContact = (props) =>{

    // Шаг 3.1 Создаем переменные при помощи useState, для того чтобы записыватьзначения наших инпутов
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [phone, setPhone] = useState('');

    //Шаг 5. Создаем функцию при нажатии на кнопку скомпонавать их (все три переменные) в один обьект
    function handleClick(){
        let newContact = {
            name,
            surname,
            phone,// Шаг 17  Добавим поле Id
            id: Date.now()

        }
        //Шаг 8 при нажатии  на наш button мы будем вызывать его из нашиз пропсов
        props.handleNewContact(newContact)

        //14 добавим функцию очистки наших инпутов
        setName('')
        setSurname('')
        setPhone('')
 
    }

    return (

        //Шаг 4 связываем наши инпуты и переменные, тоесть создаем событие onChange
        <div> 
            <input // Шаг 15 - связываем атрибут value нашего инпута с нашими переменными которые мы очищаем
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

             
            <button onClick={handleClick}>Add Contact</button>
            
            

        </div>// Шаг 5.1 Чтобы наша функция заработала передаем onClick в button
    )
}

//Шаг 1.1 импортируем - подключаем
export default AddContact;

