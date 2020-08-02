import React from 'react'
import { closeModal } from '../../actions/modal';
import { useDispatch } from 'react-redux';

const ModalContainer = ({isActive,component}) => {
    
    const dispatch = useDispatch();

    const handleModal = (e) => {

        if (!document.getElementById('as-create-song-form').contains(e.target)) {

            dispatch( closeModal({},false));    
        }
   
    }

    return (
        <>
            <div className="close-modal-button" style={{ display: isActive ? 'flex' : 'none'}} onClick={e=>e.preventDefault()}><span>x</span></div>
            <div className="as-container-modal" style={{ display: isActive ? 'flex' : 'none'}} onClick={(e)=>handleModal(e)}>
                {component}
            </div>
        </>
    );

}

export default ModalContainer;