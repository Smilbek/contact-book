//Шаг 6 - подключаем наш useState 
import React, {useState} from 'react'
// Шаг 2 подключаем AddContacts
import AddContact from './components/AddContact/AddContacts';
//Шаг -11 импортируем
import ContactList from './components/ContactsList/ContactsList';

import EditContacts from './components/EditContacts/EditContacts';


function App() {
//Шаг 7 создаем массив
  let [contacts, setContacts] = useState([]) //Эти данные мы будем вытаскивать из нашего хука useState
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  //Создадим функцию при помощи которого из дочернего <AddContact /> передадим новые данные в App()
  
  function handleNewContact(newContact){
    //9 Добовляем этот обьект в общий массив contacts
    let newContactsArray =[...contacts]
    newContactsArray.push(newContact)


    //Шаг 10 - перезаписываем contacts 
    setContacts(newContactsArray) 

    //Теперь уже функционал отображения в массив работает. Теперь мы должны добавить 
    //функционал отображения наших контактов. 
    //Создаем новый компонент во вкладке components под названием ContactsLists c файлом ContactList.js
  }
   
  function handleDeleteContact(id){
    let newContactsArray = contacts.filter(item =>{
      return item.id !== id
    })
    setContacts(newContactsArray  )

  }

  function  handleEditIndex(index){
    setIsEdit(true)
    setEditContact(contacts[index])
  }

  function handleSaveEditedContact(newContact){
    let newContactsArray = contacts.map(item =>{
      if(item.id === newContact.id){
      return newContact
      }
      return item
    })

    setContacts(newContactsArray)
    setIsEdit(false)
  }


  return (//Шаг 3 - подключаем инпуты в блок App
    <div className="App">
      <AddContact 
      //Шаг 7.1 Передаем наш дочерний компонент чтоьы наша функция вызвалась
      handleNewContact={handleNewContact}

      />
      {isEdit ? <EditContacts
        editContact = {editContact} 
        handleSaveEditedContact={handleSaveEditedContact}     
      />: null }
      
      <ContactList
      contacts={contacts}
      handleDeleteContact={handleDeleteContact}
      handleEditIndex={handleEditIndex}
      />
      
    </div>
  );// Шаг 11.1 подключаем <ContactList/>, и передать массив contacts в этот компонет
}

export default App;
