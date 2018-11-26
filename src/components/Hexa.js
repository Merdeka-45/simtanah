import React, { Component } from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Hexa extends Component{
	state = {
		isShow: '0%',
		isOpacity: '0',
		isIt: true
	}
	descHex(){
		this.setState({
			isShow: '100%',
			isOpacity: '1',
			isIt: false
		});
	}
	closeDesc(){
		
	}
   render(){
		const {text, color} = this.props;

		return(
			<div className="hexa-pack" onClick={this.descHex.bind(this)}>
					<div className="hexa" style={{backgroundColor:color}}>
						<div className="content-hexa">
							<FontAwesomeIcon icon={faHome} />
							<p>{text}</p>
						</div>
					</div>
					<div className="desc-hexa" style={{width:this.state.isShow, opacity:this.state.isOpacity}}>
						<FontAwesomeIcon icon={faTimes} className="close-btn" onClick={this.closeDesc.bind(this)}/>
						<div className="row justify-content-center">
							<div className="col-xl-10">
								<FontAwesomeIcon icon={faHome} />
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
						</div>
					</div>
			</div>
        )
    }
}

Hexa.PropType = {
    text: PropType.string.isRequired
}