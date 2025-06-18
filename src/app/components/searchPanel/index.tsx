

import { CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
type SearchPanelProps ={
    show:boolean;
    onCancel:()=>void;
}

export const SearchPanel = (props:SearchPanelProps) => {
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
        
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
