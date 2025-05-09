import "./home.css";
function Home() {
    return (
        <>
            <div className="home__header">
                <p className = "home_title1">trực tuyến miễn phí</p>
                <p className = "home_title2">người làm câu đố</p>
                <p className = "home_title3">Tạo một bài kiểm tra với các loại câu hỏi khác nhau để thu hút học sinh trong lớp</p>
                <p className = "home_title3">học, đào tạo nhân viên tại nơi làm việc hoặc chơi đố vui với bạn bè.</p>
                <button className="home__btn">Tạo một bài kiểm tra</button>
                <p className = "home_title4">✔️ Được sử dụng bởi hơn 50 triệu người vòng quanh thế giới</p>
            </div>
           
            <div className="home__wrap">
                <div className="home__wrap-title1">Tạo bài kiểm tra của riêng bạn với chúng tôi</div>
                <div className="home__wrap-title2">phần mềm làm bài trắc nghiệm trực tuyến</div>
                <div className="home__wrap-title3">Nhanh chóng và dễ dàng tạo các câu đố trực tuyến tương tác miễn phí! Với Quizizz, bạn có thể tạo một bài kiểm tra giúp tăng cường sự tương tác và tham gia chỉ bằng vài cú nhấp chuột. Cho dù bạn đang muốn tạo một bài tập về nhà cho lớp Toán, hoặc một máy phá băng để chào đón những gương mặt mới, ở đây luôn có điều gì đó dành cho tất cả mọi người.</div>
                <div className="home__wrap-title4">
                    <div className = "home__wrap-box">
                        <div className = "home__wrap-boxhead">Quizizz for Schools</div>
                        <div className = "home__wrap-desc">Đặt câu hỏi giúp học sinh xác định nhiều lĩnh vực có liên quan, khuyến khích các em suy nghĩ sâu sắc về các thành phần của hình ảnh và mối quan hệ của chúng.</div>
                    </div>
                    <img src = "https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6476e8ec816823abe7247ab2_Get%20more%20asset%202.webp"/>
                </div>
                <div className="home__wrap-title4">
                    <div className = "home__wrap-box">
                        <div className = "home__wrap-boxhead">Quizizz cho công việc </div>
                        <div className = "home__wrap-desc">Làm cho việc đào tạo và giáo dục nhân viên trở nên thú vị với Quizizz for Work. Công cụ tạo câu đố trực tuyến của chúng tôi cho phép bạn tạo điều kiện cho sự tham gia trực tiếp thông qua các bài thuyết trình, câu đố và thăm dò ý kiến. Sử dụng Quizizz tại nơi làm việc để tuyển dụng nhân viên, học trực tuyến, tương tác cộng đồng và nhiều hơn nữa!</div>
                    </div>
                    <img src = "https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/63ce1d71f329ee29a328cccd_img%20(3)-p-800.webp"/>
                </div>
                <div className="home__wrap-title5">
                Tạo các câu đố hấp dẫn hoàn chỉnh với hình ảnh, ảnh gif, clip âm thanh, video, đồ thị, hình minh họa và nhiều hơn thế nữa! Khai thác hơn 12 loại câu hỏi bao gồm Nhiều lựa chọn, Kéo và thả, Điền vào chỗ trống, và Điểm phát sóng. Với Quizizz, bạn cũng có thể nhân đôi niềm vui bằng sức mạnh, âm nhạc, chủ đề và meme. 
                </div>
                <button className="home__wrap-btn">Make a quiz</button>
            </div>

            <div className="home__selector">
                <div className="home__selector-head">
                    Rất nhiều loại câu hỏi để lựa chọn
                </div>
                <div className="home__selector-selec">
                    <button className="home__selector-btn">Điền vào chỗ trống</button>
                    <button className="home__selector-btn">Sắp xếp lại</button>
                    <button className="home__selector-btn">Nhiều lựa chọn</button>
                    <button className="home__selector-btn">Cuộc thi đấu</button>
                    <button className="home__selector-btn">Vẽ tranh</button>
                    <button className="home__selector-btn">Kéo thả</button>
                    <button className="home__selector-btn">Phản hồi video</button>
                    <button className="home__selector-btn">Thăm dò ý kiến</button>
                    <button className="home__selector-btn">trang trình bày</button>
                    <button className="home__selector-btn">kết thúc mở</button>
                    <button className="home__selector-btn">Phản hồi âm thanh</button>
                    <button className="home__selector-btn">Thả xuống</button>
                </div>
                <div className="home__selector-desc">
                Yêu cầu học sinh của bạn sắp xếp lại một tập hợp các tùy chọn lộn xộn theo thứ tự tăng dần, giảm dần hoặc theo trình tự thời gian.
                </div>
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64366d31f69aaebda7ec1424_Reorder.webp" />
            </div>
            <div className="home__check">
                <div className = "home__check-head">Cách làm một bài kiểm tra</div>
                <div className = "home__check-box">
                    <div className = "home__check-desc"> ✔️ <span>Phóng:</span> Thăm nom quizizz, nhấp vào 'Tạo' và chọn tùy chọn 'Câu hỏi'</div>
                    <div className = "home__check-desc"> ✔️ <span>Tạo nên:</span> Trộn và kết hợp 15 loại câu hỏi khác nhau bao gồm Nhiều lựa chọn, Sắp xếp lại, Vẽ đồ thị và Điền vào chỗ trống để tạo bài kiểm tra của riêng bạn</div>
                    <div className = "home__check-desc"> ✔️ <span>Tìm kiếm:</span> Nhập các câu hỏi hiện có từ hơn 30 triệu câu đố và bài học do cộng đồng Quizizz tạo ra</div>
                    <div className = "home__check-desc"> ✔️ <span>Nhập khẩu:</span> Đưa vào các câu đố từ bảng tính hoặc Google Biểu mẫu của bạn để bạn không bao giờ phải bắt đầu lại từ đầu</div>
                    <div className = "home__check-desc"> ✔️ <span>Tùy chỉnh:</span> Thêm hình ảnh, video, gif, clip âm thanh, phương trình, v.v. vào câu hỏi và tùy chọn trả lời của bạn</div>
                    <div className = "home__check-desc"> ✔️ <span>Chủ nhà:</span>  Chọn giữa nhiều chế độ trò chơi bao gồm Chế độ trực tiếp, Bài tập về nhà, Nhóm, Kiểm tra và Giấy để tổ chức bài kiểm tra của bạn và nhận kết quả ngay lập tức</div>
                </div>
                <div className="home__check-foot">
                    <button className="home__check-btn">Tạo một bài kiểm tra</button>
                </div>
            </div>
            <div className = "home__foc">
                <div className = "home__foc-wrap">
                    <div className = "home__foc-box1">
                        <div className = "home__foc-title">Quickly find or create</div>
                        <div className = "home__foc-title1">một câu đố từ thư viện</div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/63a3e944f8cc91ecb2166330_Fill%20in%20the%20blanks%20-%20import%20from%20library.webp" />
                </div>
            </div>
        </>
    )
}

export default Home;