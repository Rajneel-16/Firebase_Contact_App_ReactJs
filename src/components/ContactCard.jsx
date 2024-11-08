import React from 'react';
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from './AddAndUpdateContact';
import { useEffect, useState } from "react";

const ContactCard = ({ contact }) => {

  const [isOpen,setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db,"contacts",id));
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <div key={contact.id} className="flex items-center bg-yellow justify-between p-2 rounded-lg">
            <div className="flex gap-1">
              <HiOutlineUserCircle className="text-4xl text-orange" />
              <div className="">
                <h2 className="text-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl">
              <RiEditCircleLine />
              <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange" />
            </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;