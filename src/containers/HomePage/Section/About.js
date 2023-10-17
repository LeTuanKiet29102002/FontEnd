import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick'



class About extends Component {

    render() {
        
        return (
            
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='section-about-content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/q2YUtZum9wc?list=RDq2YUtZum9wc" title="ANH LÀ NGOẠI LỆ CỦA EM - PHƯƠNG LY | OFFICIAL MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='section-about-content-right'>
                        <p>lorem ipsum dolor sit amet, consect id elit, sed do eiusmod tempor incididunt ut lab lorem ipsum dolor sit amet lore mauris. Ut enim ad minim ven lorem ipsum dolor sit amet, consect id elit, sed do eiusmod tempor incididunt ut lab lorem ipsum dolor sit amet lore mauris. Ut enim ad minim ven lorem ipsum dolor sit amet, consect id elit, sed do eiusmod tempor incididunt ut lab lorem ipsum dolor sit amet lore mauris. Ut enim ad minim ven </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
