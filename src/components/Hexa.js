import React, { Component } from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Hexa extends Component{
	state = {
	}
   render(){
		const {text, color} = this.props;

		return(
			<div className="hexa-pack">
				<div className="hexa" style={{backgroundColor:color}}>
					<div className="content-hexa">
						<FontAwesomeIcon icon={faHome} />
						<p>{text}</p>
					</div>
				</div>
			</div>
        )
    }
}

Hexa.PropType = {
    text: PropType.string.isRequired
}