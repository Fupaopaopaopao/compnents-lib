
import { CloseOutlined } from '@ant-design/icons'
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
type ModalProps ={
    title:string;
    paragraph:string;
    show:boolean;
    onComfirm?:()=>void;
    onCancel:()=>void;
}



export const CustomModal: React.FC<ModalProps> = (props) => {

  const handleConfirm = () =>{
    if(props.onComfirm){
      props.onComfirm();
  }
  props.onCancel();
  }

  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative h-60 max-w-150 w-full rounded bg-white shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute h-10 w-10 mt-3 mr-3 top-0 right-0 rounded transition ease-in-out hover:bg-slate-100 flex items-center justify-center pointer"
              onClick={props.onCancel}
            >
              <CloseOutlined />
            </div>
            <button
              className="absolute bottom-0 right-0 mb-3 mr-6 bg-slate-900 text-white rounded w-20 h-7 transition ease-in-out hover:bg-slate-700"
              onClick={handleConfirm}
            >
              OK
            </button>
            <button
              className="absolute bottom-0 right-10 mb-3 mr-20 rounded border border-slate-900 w-20 h-7 transition ease-in-out hover:bg-slate-300"
              onClick={props.onCancel}
            >
              Cancel
            </button>

            <div className="flex flex-col p-10">
              <h1 className="text-xl font-bold">{props.title}</h1>
              <p className="mt-3">{props.paragraph}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
