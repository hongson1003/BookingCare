import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils/constant";
import { CHANGE_LANGUAGE_APP } from "../../../store/actions/appActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    coxuongkhop, thankinh, tieuhoa, timmach, taimuihong, cotsong
    , yhoccotruyen, chamcuu
} from '../../../assets/images';
import './Speciality.scss';
class Speciality extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { settings } = this.props;
        return (
            <div className="section-home speciality">
                <div className="envelope">

                    <div className="section-share">
                        <p>Chuyên gia phổ biến</p>
                        <button className="btn">XEM THÊM</button>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={coxuongkhop} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">
                                        Cơ xương khớp
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={thankinh} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">
                                        Thần kinh
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={tieuhoa} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">
                                        Tiêu hóa
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={timmach} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">
                                        Tim mạch
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={taimuihong} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">Tai mũi họng</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={cotsong} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">Cột sống</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={yhoccotruyen} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">Y học cổ truyền</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider-item">
                                <div className="slider-item-image">
                                    <img src={chamcuu} />
                                </div>
                                <div className="slider-item-text">
                                    <p className="slider-item-text_title">Châm cứu</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageRedux: language => dispatch(CHANGE_LANGUAGE_APP(language))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Speciality);