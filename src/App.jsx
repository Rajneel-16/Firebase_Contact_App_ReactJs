import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {

  const [contacts, setContacts] = useState([]);
 
  const [isOpen,setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {

      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } 
      catch (error) {
        console.log(error);
      }

    };

    getContacts();

  }, []);


  return (
  <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FiSearch className="ml-1 absolute text-white text-3xl" />
          <input type="text" 
          className="flex-grow bg-transparent border border-white rounded-md h-10 text-white pl-9"/>
        </div>
        <AiFillPlusCircle 
        onClick={onOpen}
        className="text-5xl cursor-pointer text-white" />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
        )
        )}
      </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
  </>
  );
};

export default App;