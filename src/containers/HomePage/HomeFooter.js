import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick'



class HomeFooter extends Component {

    render() {
        
        return (
            
            <div className='home-footer'>
                <p>&copy; 2021 Design by Le Tuan Kiet. More information, please visit my youtube channel.<a target='_blanh' href='https://translate.google.com/?hl=vi'>
                &#8594; Click here! &#8592; </a></p>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
