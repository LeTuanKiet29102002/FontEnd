import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick'


class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor mx-auto' ></div>
                                    </div>
                                    <div className='position-doctor text-center'>
                                        <div>Giáo sư, tiến sĩ Lê Tuấn Kiệt 1</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor mx-auto' ></div>
                                    </div>
                                    <div className='position-doctor text-center'>
                                        <div>Giáo sư, tiến sĩ Lê Tuấn Kiệt 2</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor mx-auto' ></div>
                                    </div>
                                    <div className='position-doctor text-center'>
                                        <div>Giáo sư, tiến sĩ Lê Tuấn Kiệt 3</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor mx-auto' ></div>
                                    </div>
                                    <div className='position-doctor text-center'>
                                        <div>Giáo sư, tiến sĩ Lê Tuấn Kiệt 4</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor mx-auto' ></div>
                                    </div>
                                    <div className='position-doctor text-center'>
                                        <div>Giáo sư, tiến sĩ Lê Tuấn Kiệt 5</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor mx-auto' ></div>
                                    </div>
                                    <div className='position-doctor text-center'>
                                        <div>Giáo sư, tiến sĩ Lê Tuấn Kiệt 6</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
