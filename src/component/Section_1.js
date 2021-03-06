import React, { Component } from 'react'
import tanTich from "../images/img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
import dinhThu from "../images/img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
import blackmas from "../images/img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
import spider from "../images/img/review-spider-man-into-the-spider-vesre-15886520889426.png"
import sniper from "../images/img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
import blood from "../images/img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731228555.jpg"
import covid from "../images/img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
import sieu from "../images/img/sieu-ve-si-so-vo-the-protector-15838099906207_215x318.jpg"
import Khai from "../images/img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg";
import boc from "../images/img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg";
import dan from "../images/img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png";
import truy from "../images/img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
import bhd from "../images/img/bhd-59k-ve-ca-tuan-16088081864967.jpg"
import tix from "../images/img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
import k from "../images/img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
import start from "../images/img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
import troLai from "../images/img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
import fri from "../images/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099 (1).jpg"
import nhap from "../images/img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
import hoa from "../images/img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164 (1).jpg"
export default class Section_1 extends Component {
    render() {
        return (
            <div id="id3">
                <div>
                    <section id="section_1">
                    </section>
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#dienAnh">??i???n ???nh 24h</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#review">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#khuyenMai">Khuy???n M??i</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane container active" id="dienAnh">
                            <div className="row">
                                <div className="col-md-6 section_1">
                                    <a href="#" className="item_2"><img src={Khai} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            Khai tr????ng r???p x???n gi?? ngon, chu???n x??-tai S??i G??n
                                        </h6>
                                    </a>
                                    <p>
                                        C?? d??n n??i kh??c ??ang s???p ???gato n??? m???t??? v???i d??n S??i Th??nh khi s???p
                                        t???i ????y th??nh ph??? HCM s??? ch??o ????n m???t r???p chi???u phim mang phong
                                        c??ch Artistic Urban Lifestyle ?????u ti??n t???i Vi???t Nam!
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-6 section_1">
                                    <a href="#" className="item_2"><img className="rounded" src={boc} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            ???B??c tem??? t??? h???p gi???i tr?? m???i toanh c???a gi???i H?? Th??nh
                                        </h6>
                                    </a>
                                    <p>
                                        V??o ????ng ng??y Nh?? gi??o Vi???t Nam 20/11, khu vui ch??i s???ng ???o
                                        ?????c-l???-chill nh???t t??? tr?????c ?????n gi??? s??? ch??nh th???c khai tr????ng t???i
                                        360 Gi???i Ph??ng!
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4 section_1">
                                        <a href="#"><img className="rounded" src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png" alt /></a>
                                        <a href="#" className="item_3">
                                            <h6 className="mb-3">
                                                Ti???c Tr??ng M??u ch??nh th???c c??n m???c 100 t??? ch??? sau 2 tu???n c??ng
                                                chi???u
                                            </h6>
                                        </a>
                                        <p>
                                            Sau 2 tu???n ra m???t, Ti???c Tr??ng M??u ch??nh th???c gia nh???p c??u l???c
                                            b??? phim ??i???n ???nh ?????t 100 t??? ?????ng doanh thu ph??ng v??. D??n ng??i
                                            sao ???b???c t?????? c???a
                                        </p>
                                        <i className="far fa-thumbs-up" />
                                        <span>1</span>
                                        <i className="far fa-comment-alt" />
                                        <span>0</span>
                                    </div>
                                    <div className="col-md-4 section_1">
                                        <a href="#"><img className="rounded" src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg" alt /></a>
                                        <a href="#" className="item_3">
                                            <h6 className="mb-3">
                                                NG?? THANH V??ang Chi????u??N CH??NH TH???C KH???I ?????NG CU???C THI THI???T K??? TRANG
                                                PH???C CHO SI??U ANH H??NG ?????U TI??N C???A VI???T NAM ??? VINAMAN
                                            </h6>
                                        </a>
                                        <p>
                                            Chi???u t???i ng??y 30-10-2020, Ng?? Thanh V??n v?? Studio68 ???? ch??nh
                                            th???c ph??t ?????ng cu???c thi thi???t k??? trang ph???c cho si??u anh h??ng
                                            VINAMAN v???i t???ng
                                        </p>
                                        <i className="far fa-thumbs-up" />
                                        <span>1</span>
                                        <i className="far fa-comment-alt" />
                                        <span>0</span>
                                    </div>
                                    <div className="col-md-4 section_small">
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={dan} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        [ANTEBELLUM] - 4 l?? do kh??ng th??? b??? l??? si??u ph???m kinh d???
                                                        ...
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={truy} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng
                                                        ...
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={dan} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        Da??n my?? nh??n trong th???? gi????i ??i????n a??nh cu??a qua??i ki????t
                                                        Christopher Nolan
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={dan} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        Truy C??ng Gi???t T???n - Cu???c t??i ng??? c???a hai '??ng ho??ng
                                                        ph??ng v??' x??? H??n
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="review">
                            <div className="row">
                                <div className="col-md-6 section_1">
                                    <a href="#"><img className="rounded" src={tanTich} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            Review: T??n T??ch Qu??? ??m (Relic) - Ba th??? h??? v?? m???i li??n k???t
                                        </h6>
                                    </a>
                                    <p>
                                        ??i???m nh???n c???a phim kinh d??? n??m 2020 ch??nh l?? T??n T??ch Qu??? ??m
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-6 section_1">
                                    <a href="#"><img className="rounded" src={dinhThu} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            Review: Dinh Th??? Oan Khu???t (Ghost Of War)
                                        </h6>
                                    </a>
                                    <p>
                                        Tuy l?? m???t b??? phim c?? ch???t l?????ng t???t, nh??ng c?? v??? Dinh Th??? Oan
                                        Khu???t v???n ch??a ????? ????? ??em kh??n gi??? tr??? l???i ph??ng v??!
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={blackmas} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            ???BlacKkKlansman??? - c???c n?????c l???nh ????? ng?????i M??? th???c t???nh
                                        </h6>
                                    </a>
                                    <p>
                                        T??c ph???m nh???n ????? c??? Phim truy???n xu???t s???c t???i Oscar 2019 c???a ?????o
                                        di???n Spike Lee l?? m???t l??t c???t n???a v??? n???n ph??n bi???t ch???ng t???c -
                                        n???i ??au g??y nh???c
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={sniper} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            American Sniper - Ch??nh ngh??a hay phi ngh??a?
                                        </h6>
                                    </a>
                                    <p>
                                        American Sniper kh???c h???a m???t tay s??ng b???n t???a ???huy???n tho???i??? c???a
                                        H???i qu??n M??? v???i 4 l???n tham chi???n ??? Trung ????ng. C??u chuy???n phim
                                        ch???m r??i ????a ng?????i
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_small">
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={blood} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [Review] Bloodshot - M??? m??n ???n t?????ng cho V?? tr??? Si??u anh
                                                    h??ng Valiant
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={spider} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    Review: Spider-Man: Into The Spider-Vesre
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={covid} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    COVID-19 l?? b???n ch??nh th???c c???a MEV-1 phim contagion (2011)
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={sieu} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [Review] Si??u V??? S?? S??? V??? - Gi???i c???u T???ng th???ng ch??a bao
                                                    gi??? l???y l???i v?? h??i h?????c ?????n th???
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="khuyenMai">
                            <div className="row container">
                                <div className="col-md-6 section_1">
                                    <a href>
                                        <img className="rounded" src={bhd} alt />
                                    </a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">BHD 59K/V?? C??? TU???N !!!</h6>
                                    </a>
                                    <p>
                                        T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi??
                                        59k/v?? khi mua v?? tr??n TIX ho???c M???c V?? Phim tr??n ZaloPay.
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-6 section_1">
                                    <a href="#"><img className="rounded" src={tix} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">TIX 1K/V?? NG???I CHI GI?? V??</h6>
                                    </a>
                                    <p>
                                        ?????ng gi?? 1k/v?? c??? tu???n t???t c??? c??c r???p tr??n TIX + Nh???n th??m 02
                                        voucher thanh to??n ZaloPay th??? ga
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={k} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">?????NG GI?? 1K/V?? KHI MUA V?? QUA TIX</h6>
                                    </a>
                                    <p>
                                        ?????NG GI?? 1K/V?? KHI MUA V?? QUA TIX H??nh tr??nh t??m R??m v?? Ph??c ch???
                                        v???i 1k c??? tu???n + nh???n th??m 02 voucher khi ?????t v?? qua TIX.
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={start} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">BHD STAR V?? CH??? 59.000?? C??? TU???N!</h6>
                                    </a>
                                    <p>
                                        T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi??
                                        59k/v?? khi mua v?? tr??n TIX v?? thanh to??n b???ng ZaloPay ho???c M???c
                                        V?? Phim tr??n ZaloPay.
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_small">
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={troLai} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    Beta Cineplex tr??? l???i v???i h??ng lo???t ??u ????i l???n
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={fri} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [123Phim] Th??? 6 Kh??ng ??en T???i - ??u ????i hu??? di???t 11k/v?? Anh
                                                    Trai Y??u Qu??i
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={nhap} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [123Phim] NH???P M?? 'PSM30K' - Gi???m ngay 30k khi ?????t v?? ...
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={hoa} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [Mega GS] M???t ??o?? hoa thay ng??n l???i y??u
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btnXemThem mt-3">Xem Th??m</button>
                </div>

            </div >
        )
    }
}
