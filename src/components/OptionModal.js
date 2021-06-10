import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.isSelected}
      onRequestClose={props.onOkay}
      contentLabel="SelectedOption"
      ariaHideApp={false}
      className="modal"
    >
      <h2>Selected Option</h2>
      <h3>{props.isSelected}</h3>
      <button className="button" onClick={props.onOkay}>Okay</button>
    </Modal>
  )
}

export default OptionModal