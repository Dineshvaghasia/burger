import React from 'react';

import classes from './Modal.css';
import hoc from '../../../hoc/hoc';
import BackDrop from '../BackDrop/BackDrop';

const Modal = (props) => (
	<hoc>
		<BackDrop show={props.show} clicked={props.modalClosed}/>
		<div 
			className={classes.Modal}
			style={{transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity:props.show ? '1' : '0'
			}}
		>
			{props.children}
		</div>
	</hoc>
);

export default Modal;