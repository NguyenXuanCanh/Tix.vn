import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'


import * as Yup from 'yup'
import { Button, Modal } from 'react-bootstrap';

export default function AdminDSP() {
    let [mangND, setMangND] = useState([{
        email: "danghungthai41@gmail.com",
        hoTen: "Đặng Hùng Thái",
        maLoaiNguoiDung: "KhachHang",
        matKhau: "123456789",
        soDt: "0906709400",
        taiKhoan: "hungthai41",
    }]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formikTLC = useFormik({
        initialValues: {
            maPhim: '',
            giaVe: '',
            ngayKhoiChieu: '',
        },
        validationSchema: Yup.object().shape({
            maPhim: Yup.string(),
            giaVe: Yup.string().required('Giá vé không được bỏ trống'),
            ngayKhoiChieu: Yup.string()
        }),
        onSubmit: values => {
            values.maPhim = phimState.maPhim;
            values['ngayChieuGioChieu'] = document.getElementById('ngayKhoiChieu2').value;
            values['maRap'] = selectedInfo.maRap;
            values['ngayChieuGioChieu'] = chuanHoaNgay(values['ngayChieuGioChieu']);
            console.log(values);
            themLichChieu(values);
        }
    });

    function chuanHoaNgay(date) {
        // 2021-07-08 10:58 AM
        let haiKyTuCuoi = date.substring(17);
        // date = date.substr(17)
        date = date.slice(0, 16);
        let newString = date.substr(11, 1) + date.substr(12, 1);
        if (haiKyTuCuoi == 'PM') {
            newString = parseInt(newString) + 12;
        }
        // newString.toString();
        // setCharAt(date, 10, "T");
        // date = date.substr(0, 10) + "T" + date.substr(10 + 1);
        date = date.substr(0, 11) + (newString) + date.substr(13);
        date = date.concat(':00');

        return date;

    }

    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    async function themLichChieu(values) {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
                method: 'POST',
                data: values,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Thêm thành công", "Nhấn ok để thoát", "success").then(() => {
                window.location.reload();
            })
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    }

    const [startDate, setStartDate] = useState(new Date());
    const [selectedFile, setSelectedFile] = useState();

    function onFileChange(event) {
        setSelectedFile(event.target.files[0]);
    }

    async function onFileUpload(values) {
        try {
            const formData = new FormData();
            formData.append(
                "File",
                selectedFile,
                selectedFile.name
            );
            formData.append('tenphim', values.tenPhim);
            formData.append('manhom', 'GP06');
            console.log(selectedFile);
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
                method: 'POST',
                data: formData,
                // headers: { "Content-Type": "multipart/form-data" },
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Thêm thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    };

    let [themPhim, setThemPhim] = useState(false);
    let [phimState, setPhimState] = useState({});

    let [cumRapState, setCumRapState] = useState([
        {
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "biDanh": "bhd-star-cineplex",
            "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
        },
        {
            "maHeThongRap": "CGV",
            "tenHeThongRap": "cgv",
            "biDanh": "cgv",
            "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"
        },
        {
            "maHeThongRap": "CineStar",
            "tenHeThongRap": "CineStar",
            "biDanh": "cinestar",
            "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png"
        },
        {
            "maHeThongRap": "Galaxy",
            "tenHeThongRap": "Galaxy Cinema",
            "biDanh": "galaxy-cinema",
            "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"
        },
        {
            "maHeThongRap": "LotteCinima",
            "tenHeThongRap": "Lotte Cinema",
            "biDanh": "lotte-cinema",
            "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
        },
        {
            "maHeThongRap": "MegaGS",
            "tenHeThongRap": "MegaGS",
            "biDanh": "megags",
            "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png"
        }
    ]);
    let [rapState, setRapState] = useState([]);

    let [selectedInfo, setSelectedInfo] = useState({
        maHeThongRap: 'BHDStar',
        maCumRap: "bhd-star-cineplex-3-2",
        maRap: 451,
    });

    useEffect(async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06',
                method: 'GET',
            });
            setMangND(result.data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET',
            });
            setCumRapState(result.data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    function renderCumRap() {
        return cumRapState.map((item, index) => {
            return <option value={item.maHeThongRap} key={index}>{item.tenHeThongRap}</option>
        })
    }

    useEffect(async () => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${selectedInfo.maHeThongRap}`,
                method: 'GET',
            });
            setRapState(result.data)
        } catch (error) {
            console.log(error);
        }
    })

    function renderRap() {
        return rapState?.map((item, index) => {
            return <option value={item.maCumRap} key={index}>{item.tenCumRap}</option>
        })
    }

    function renderDanhSachRap() {
        for (let element of rapState) {
            if (element.maCumRap == selectedInfo.maCumRap) {
                return element.danhSachRap.map((item, index) => {
                    return <option value={item.maRap} key={index}>{item.tenRap}</option>
                })
            }
        }
    }

    function changeSelectedInfo(event) {
        selectedInfo[event.target.name] = event.target.value;
        // console.log(selectedInfo);
    }

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            biDanh: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
        },
        validationSchema: Yup.object().shape({
            tenPhim: Yup.string().required('Tên phim không được bỏ trống'),
            biDanh: Yup.string().required('Bí danh không được bỏ trống'),
            trailer: Yup.string(),
            hinhAnh: Yup.string().required('Hình ảnh không được bỏ trống'),
            moTa: Yup.string(),
        }),
        onSubmit: values => {

            themPhimFunc(values);

        }
    });

    const formikUpdate = useFormik({
        initialValues: {
            tenPhim: '',
            biDanh: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
            danhGia: '',
        },
        validationSchema: Yup.object().shape({
            tenPhim: Yup.string().required('Tên phim không được bỏ trống'),
            biDanh: Yup.string().required('Bí danh không được bỏ trống'),
            trailer: Yup.string(),
            hinhAnh: Yup.string().required('Hình ảnh không được bỏ trống'),
            moTa: Yup.string(),
            danhGia: Yup.string(),
        }),
        onSubmit: values => {

        }
    });

    async function themPhimFunc(values) {
        values['ngayKhoiChieu'] = document.getElementById('ngayKhoiChieu1').value;
        values['danhGia'] = 0;
        values['maPhim'] = 0;
        values['maNhom'] = "GP06";
        values['danhGia'] = 0;
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
                method: 'POST',
                data: values,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            if (result.statusText == 'OK') {
                onFileUpload(values);
            }
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    }

    useEffect(() => {
        setPhimState(phimState);
    }, [phimState])

    function changeState(event) {
        let testUser = phimState;
        testUser[event.target.name] = event.target.value;
        setPhimState(testUser);
    }

    async function fakeSubmition() {
        phimState['ngayKhoiChieu'] = document.getElementById('ngayKhoiChieu3').value;
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
                method: 'POST',
                data: phimState,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            if (result.statusText == 'OK') {
                onFileUpload(phimState);
            }
            localStorage.removeItem('phimUpdate');
            // window.location.reload();
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    }

    async function deleteUser() {
        // console.log(phimState.taiKhoan);
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${phimState.maPhim}`,
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Xóa thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
        } catch (error) {
            console.log('error: ', error.response?.data); //?optional chaining
        }
    }

    function renderMangDSP() {
        return (
            mangND.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <h3>{item.tenPhim}</h3>
                        </td>
                        <td>
                            <img src={item.hinhAnh} style={{ maxWidth: '100px' }}></img>
                        </td>
                        <td>{item.trailer}</td>
                        <td>{item.ngayKhoiChieu}</td>
                        <td>{item.danhGia}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => {
                                localStorage.setItem('phimUpdate', JSON.stringify(item));
                                setPhimState(JSON.parse(localStorage.getItem('phimUpdate')));
                                setThemPhim(false);
                            }}><i className="fas fa-cogs"></i></button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm lịch chiếu phim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formikTLC.handleSubmit}>
                        <div className="row">
                            <div className="col-6 form-group">
                                <label>Tên phim</label>
                                <input type="text" name="tenPhim" disabled value={phimState.tenPhim} className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>Mã phim</label>
                                <input type="text" name="maPhim" disabled value={phimState.maPhim} className="form-control" onChange={formikTLC.handleChange} onBlur={formikTLC.handleBlur} />
                            </div>
                            <div className="col-6 form-group">
                                <label>Ngày khởi chiếu</label>
                                <br></br>
                                <DatePicker
                                    className="form-control"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    timeInputLabel="Time:"
                                    dateFormat="dd/MM/yyyy hh:mm aa"
                                    showTimeInput
                                    style={{ width: "100%" }}
                                    name="ngayKhoiChieu2"
                                    id="ngayKhoiChieu2"
                                    onBlur={formikTLC.handleBlur}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Giá vé</label>
                                <select name="giaVe" id="giaVe" className="form-control" onChange={formikTLC.handleChange} onBlur={formikTLC.handleBlur}>
                                    <option value="" disabled selected>--</option>
                                    <option value="55000">55.000</option>
                                    <option value="75000">75.000</option>
                                    <option value="95000">95.000</option>
                                    <option value="115000">115.000</option>
                                </select>
                                {formikTLC.touched && formikTLC.errors.giaVe ? <p className="text-danger">{formikTLC.errors.giaVe}</p> : ''}
                            </div>
                            <div className="col-4 form-group">
                                <label>Cụm rạp</label>
                                <select name="maHeThongRap" id="maHeThongRap" className="form-control" onChange={changeSelectedInfo}>
                                    {renderCumRap()}
                                </select>
                            </div>
                            <div className="col-4 form-group">
                                <label>Rạp phim</label>
                                <select name="maCumRap" id="maCumRap" className="form-control" onChange={changeSelectedInfo}>
                                    <option value="" selected></option>
                                    {renderRap()}
                                </select>
                            </div>
                            <div className="col-4 form-group">
                                <label>Mã rạp</label>
                                <select name="maRap" id="maRap" className="form-control" onChange={changeSelectedInfo} >
                                    <option value="" selected></option>
                                    {renderDanhSachRap()}
                                </select>
                            </div>
                        </div>
                        <Button className="btn btn-primary" type="submit">
                            Xác nhận
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
            <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>
                                Bạn có chắc vẫn muốn xóa phim này
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={deleteUser}>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="user-right-right">
                    {themPhim == true ?
                        <React.Fragment>
                            <div className="row title">
                                <div className="col-6" style={{ marginBottom: "20px" }}>
                                    <h1>Thêm phim</h1>
                                </div>
                                <div className="col-6">
                                    <span className="hideOption" onClick={() => { setThemPhim(false); setPhimState({}); }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>Tên phim</label>
                                        <input type="text" name="tenPhim" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.tenPhim ? <p className="text-danger">{formik.errors.tenPhim}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mã phim</label>
                                        <input type="text" name="maPhim" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.maPhim ? <p className="text-danger">{formik.errors.maPhim}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Link trailer</label>
                                        <input type="text" name="trailer" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.trailer ? <p className="text-danger">{formik.errors.trailer}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mô tả</label>
                                        <textarea type="text" name="moTa" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.moTa ? <p className="text-danger">{formik.errors.moTa}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Hình ảnh</label>
                                        <input type="file" name="hinhAnh" className="form-control" onInput={onFileChange} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.hinhAnh ? <p className="text-danger">{formik.errors.hinhAnh}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Ngày khởi chiếu</label>
                                        <br></br>
                                        <DatePicker
                                            className="form-control"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            timeInputLabel="Time:"
                                            dateFormat="dd/MM/yyyy"
                                            showTimeInput
                                            style={{ width: "100%" }}
                                            name="ngayKhoiChieu1"
                                            id="ngayKhoiChieu1"
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        {/* <button className="btn btn-primary" onClick={console.log(document.getElementById("ngayKhoiChieu").value)}> asd</button> */}
                                        <button className="btn btn-success" type="submit">Thêm</button>
                                    </div>
                                </div>
                            </form>
                            <hr></hr>
                        </React.Fragment>
                        :
                        ''
                    }
                    {phimState?.tenPhim ?
                        <React.Fragment>
                            <div className="row title">
                                <div className="col-6" style={{ marginBottom: "20px" }}>
                                    <h1>Sửa thông tin phim</h1>
                                </div>
                                <div className="col-6">
                                    <span className="hideOption" onClick={() => { setThemPhim(false); setPhimState({}); }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                            <form onSubmit={formikUpdate.handleSubmit}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>Tên phim</label>
                                        <input type="text" name="tenPhim" disabled value={phimState.tenPhim} className="form-control" />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Bí danh</label>
                                        <input type="text" name="biDanh" className="form-control" value={phimState.biDanh} />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Link trailer</label>
                                        <input type="text" name="trailer" className="form-control" value={phimState.trailer} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.trailer ? <p className="text-danger">{formikUpdate.errors.trailer}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mô tả</label>
                                        <input type="text" name="moTa" className="form-control" value={phimState.moTa} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.moTa ? <p className="text-danger">{formikUpdate.errors.moTa}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Hình ảnh</label>
                                        <input type="file" name="hinhAnh" className="form-control" onInput={onFileChange} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.hinhAnh ? <p className="text-danger">{formikUpdate.errors.hinhAnh}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Đánh giá</label>
                                        <input type="text" name="danhGia" className="form-control" value={phimState.danhGia} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.danhGia ? <p className="text-danger">{formikUpdate.errors.danhGia}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Ngày khởi chiếu</label>
                                        <br></br>
                                        <DatePicker
                                            className="form-control"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            timeInputLabel="Time:"
                                            dateFormat="dd/MM/yyyy"
                                            showTimeInput
                                            style={{ width: "100%" }}
                                            name="ngayKhoiChieu3"
                                            id="ngayKhoiChieu3"
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                    </div>
                                    <div className="form-group col-6">
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <button className="btn btn-primary" type="submit" onClick={fakeSubmition}>Cập nhật</button>
                                            </div>
                                            <div className="col-6 form-group">
                                                <Button variant="primary" onClick={handleShow}>
                                                    Thêm lịch chiếu
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 form-group">
                                        <button type="button" className="btn btn-danger ml-2" data-toggle="modal" data-target="#exampleModal1">Xóa</button>
                                    </div>
                                </div>
                            </form>
                            <hr></hr>
                        </React.Fragment>
                        :
                        ''
                    }
                    <h1>
                        Danh sách phim
                        <button class="btn btn-success ml-5" onClick={() => { setThemPhim(true); setPhimState({}); }}>Thêm</button>
                    </h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <h5>Tên phim</h5>
                                </th>
                                <th scope="col">
                                    <h5>Hình ảnh</h5>
                                </th>
                                <th scope="col">
                                    <h5>Link trailer</h5>
                                </th>
                                <th scope="col">
                                    <h5>Ngày khởi chiếu</h5>
                                </th>
                                <th scope="col">
                                    <h5>Đánh giá</h5>
                                </th>
                                <th scope="col">
                                    <h5>Thao tác</h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderMangDSP()}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}
