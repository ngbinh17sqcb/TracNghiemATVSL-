const quizData = [
    // ==================== ĐỀ SỐ 1: CÔNG TÁC AT-VSLĐ ====================
    {
        id: "d1_c1",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 1. Những đối tượng dưới đây, đối tượng nào bắt buộc phải được huấn luyện an toàn, vệ sinh lao động theo Nghị định 44/2016/NĐ-CP ngày 15/5/2016 của Chính phủ?",
        options: [
            "Nhóm 1",
            "Nhóm 2",
            "Nhóm 3",
            "Nhóm 4",
            "Nhóm 5",
            "Nhóm 6",
            "Cả câu (a, b, c, d, e, f) đúng.",
            "Cả câu (a, b, c, d) đúng."
        ],
        answer: 6, // g
        explain: "Nghị định 44/2016/NĐ-CP quy định 6 nhóm đối tượng bắt buộc phải được huấn luyện AT-VSLĐ từ Nhóm 1 đến Nhóm 6."
    },
    {
        id: "d1_c2",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 2. Hằng năm các đơn vị, doanh nghiệp (cơ sở sản xuất, kinh doanh) khi lập kế hoạch sản xuất đồng thời phải lập kế hoạch an toàn, vệ sinh lao động. Nội dung của kế hoạch an toàn, vệ sinh lao động bao gồm:",
        options: [
            "Các biện pháp về kỹ thuật an toàn lao động, phòng chống cháy nổ.",
            "Các biện pháp về kỹ thuật vệ sinh lao động, phòng chống độc hại, cải thiện điều kiện làm việc.",
            "Mua sắm trang thiết bị bảo vệ cá nhân.",
            "Chăm sóc sức khỏe người lao động.",
            "Tuyên truyền, giáo dục, huấn luyện về an toàn, vệ sinh lao động cho người lao động.",
            "Các câu (a, b, c, e) đúng.",
            "Các câu (a, b, c, d, e) đúng."
        ],
        answer: 6, // g
        explain: "Theo Điều 76 Luật AT-VSLĐ 2015, kế hoạch AT-VSLĐ gồm đầy đủ 5 nội dung: kỹ thuật an toàn; kỹ thuật vệ sinh; trang bị bảo vệ cá nhân; chăm sóc sức khỏe; tuyên truyền huấn luyện."
    },
    {
        id: "d1_c3",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 3. Các nội dung cần đạt được khi tổ chức huấn luyện an toàn, vệ sinh lao động cho người sử dụng lao động theo Nghị định 44/2016/NĐ-CP ngày 15/5/2016 của Chính phủ.",
        options: [
            "Chính sách pháp luật về an toàn lao động, vệ sinh lao động.",
            "Tổ chức quản lý và thực hiện các quy định về an toàn lao động, vệ sinh lao động ở cơ sở.",
            "Các yếu tố nguy hiểm, có hại trong sản xuất và biện pháp khắc phục.",
            "Các câu (a, b) đúng.",
            "Các câu (a, b, c) đúng."
        ],
        answer: 4, // e
        explain: "Nội dung huấn luyện cho người sử dụng lao động (Nhóm 1) bao gồm cả hệ thống chính sách pháp luật, tổ chức quản lý và các yếu tố nguy hiểm có hại kèm biện pháp khắc phục."
    },
    {
        id: "d1_c4",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 4. Trong hai trường hợp dưới đây, trường hợp nào là tai nạn lao động.",
        options: [
            "Do các yếu tố nguy hiểm trong sản xuất (như điện giật, ngã giàn giáo cao, các vật thể văng bắn, các vật rơi, đổ, tắc đột ngột, đột ngột vào người lao động làm cho khả năng lao động bị giảm hoặc mất tức thì.",
            "Do tác hại nghề nghiệp (như khí hậu, tiếng ồn, rung động, phóng xạ, môi trường độc hại, bụi, vi trùng,...) tác động thường xuyên, từ từ và lâu dài lên người lao động làm cho khả năng lao động bị suy giảm dần dần."
        ],
        answer: 0, // a
        explain: "Tai nạn lao động là tai nạn gây tổn thương hoặc tử vong đột ngột gắn liền với thực hiện công việc. Trường hợp (b) là nguyên nhân gây ra Bệnh nghề nghiệp."
    },
    {
        id: "d1_c5",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 5. Những nguyên nhân chủ yếu gây ra tai nạn lao động là:",
        options: [
            "Người lao động không được huấn luyện về ATLĐ hoặc huấn luyện chưa đầy đủ theo quy định.",
            "Vi phạm các tiêu chuẩn, quy phạm, quy trình kỹ thuật an toàn, đặc biệt là sử dụng điện và thi công trên cao.",
            "Điều kiện làm việc và môi trường làm việc của người lao động không đảm bảo theo tiêu chuẩn quy định.",
            "Do trạng thái tâm lý và ý thức của người lao động không tốt.",
            "Các câu (a, b, c, d) đúng.",
            "Các câu (a, b, c) đúng."
        ],
        answer: 4, // e
        explain: "Nguyên nhân gây TNLĐ bao gồm cả yếu tố kỹ thuật, môi trường, tổ chức quản lý và yếu tố con người (tâm lý, ý thức chấp hành kỷ luật an toàn)."
    },
    {
        id: "d1_c6",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 6. Những nguyên nhân thường gây ra tai nạn điện trong sản xuất, thi công:",
        options: [
            "Không che chắn, bao bọc các vật dẫn điện, thiết bị điện hỏng hóc, thiếu (ví dụ: thiếu nắp cầu dao, thiếu bao che đầu nối dây điện,...).",
            "Lớp cách điện nào bị sứt, nứt, dây dẫn điện, dây hàn bị hư hỏng.",
            "Vi phạm hành lang bảo vệ an toàn lưới điện, đặc biệt là điện trung, cao thế.",
            "Không có dây nối đất, nối không bảo vệ hoặc có dây nối đất, nối không đúng kỹ thuật hoặc đã hư hỏng.",
            "Không hoặc thực hiện không đầy đủ các biện pháp an toàn điện khi vận hành các máy, thiết bị có động cơ điện.",
            "Chưa đủ các điều kiện an toàn điện mà vẫn làm, các hư hỏng về điện chưa được sửa chữa kịp thời.",
            "Làm việc về điện mà chưa được huấn luyện về kỹ thuật an toàn điện.",
            "Các câu (b, c, d, e, g) đúng.",
            "Các câu (a, b, c, d, e, f, g) đúng."
        ],
        answer: 8, // i
        explain: "Tất cả các hành vi và thiếu sót kỹ thuật nêu từ a đến g đều là những nguyên nhân trực tiếp dẫn đến tai nạn điện giật."
    },
    {
        id: "d1_c7",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 7. Một số thiết bị có yêu cầu nghiêm ngặt về an toàn như: bình khí nén, nồi hấp, nồi hơi, cần trục, cầu trục, hệ thống lạnh,... trước khi đưa vào sử dụng thì cơ sở cần phải tiến hành những công việc gì?",
        options: [
            "Tổ chức huấn luyện về các đặc tính kỹ thuật, nguyên tắc vận hành an toàn khi sử dụng các thiết bị áp lực, thiết bị nâng, hệ thống lạnh,... và cấp giấy chứng nhận an toàn cho người lao động.",
            "Phải treo bảng nội quy vận hành và quy trình xử lý sự cố tại thiết bị.",
            "Đăng ký và kiểm định các loại máy thiết bị có yêu cầu nghiêm ngặt về an toàn lao động theo Thông tư số 53/2016/TT-BLĐTBXH ngày 28/12/2016 của Bộ Lao động - Thương binh và Xã hội.",
            "Các câu (a, c) đúng.",
            "Các câu (a, b, c) đúng."
        ],
        answer: 4, // e
        explain: "Trước khi đưa vào vận hành, đơn vị phải kiểm định, treo biển quy trình an toàn/xử lý sự cố và huấn luyện cấp chứng chỉ cho người vận hành."
    },
    {
        id: "d1_c8",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 8. Các yếu tố có hại gây nên bệnh nghề nghiệp:",
        options: [
            "Các yếu tố vật lý (như khí hậu, tiếng ồn, độ rung, ánh sáng,...).",
            "Các yếu tố hóa học (như xăng, dầu, bụi chì, các thuốc trừ sâu, benzen,...).",
            "Các yếu tố do bụi (như bụi silic, bụi bông, gai, đay, bụi than,...).",
            "Các yếu tố vi sinh vật (như siêu vi B, lao...).",
            "Do tổ chức lao động không hợp lý, điều kiện vệ sinh kém (thời gian làm việc kéo dài, chỗ làm việc chật hẹp thiếu không khí, thiếu ánh sáng, môi trường làm việc bị ô nhiễm,...).",
            "Các câu (a, b, c, d) đúng.",
            "Các câu (a, b, c, d, e) đúng."
        ],
        answer: 6, // g
        explain: "Bệnh nghề nghiệp xuất phát từ các yếu tố lý, hóa, bụi, sinh học và cách tổ chức điều kiện lao động không hợp lý."
    },
    {
        id: "d1_c9",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 9. Các giải pháp an toàn, vệ sinh lao động để ngăn ngừa tai nạn lao động, bệnh nghề nghiệp:",
        options: [
            "Giải pháp pháp luật (các quy trình, quy phạm, nội quy,... về an toàn lao động, vệ sinh lao động; thanh tra, kiểm tra, xử phạt vi phạm về an toàn lao động, vệ sinh lao động).",
            "Giải pháp tổ chức (huấn luyện an toàn, vệ sinh lao động, đăng ký và kiểm định các thiết bị máy móc có yêu cầu nghiêm ngặt về an toàn lao động, khám tuyển, khám sức khỏe định kỳ cho người lao động,...).",
            "Giải pháp khoa học kỹ thuật (che chắn, giữ khoảng cách an toàn, tín hiệu biển báo an toàn ở những vùng nguy hiểm, độc hại,...).",
            "Các câu (a, b) đúng.",
            "Các câu (a, b, c) đúng."
        ],
        answer: 4, // e
        explain: "Ba nhóm giải pháp cốt lõi phòng ngừa TNLĐ và BNN là: Pháp luật - Tổ chức quản lý - Khoa học kỹ thuật công nghệ."
    },
    {
        id: "d1_c10",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 10. Những Nghị định nào của Chính phủ hướng dẫn công tác huấn luyện về an toàn lao động, vệ sinh lao động cho người sử dụng lao động và người lao động.",
        options: [
            "Nghị định số 44/2016/NĐ-CP ngày 15/5/2016.",
            "Nghị định số 39/2016/NĐ-CP ngày 15/5/2016.",
            "Nghị định số 95/2013/NĐ-CP ngày 22/8/2013."
        ],
        answer: 0, // a
        explain: "Nghị định 44/2016/NĐ-CP quy định chi tiết về hoạt động kiểm định kỹ thuật an toàn, huấn luyện AT-VSLĐ và quan trắc môi trường lao động."
    },
    {
        id: "d1_c11",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 11. Biện pháp an toàn phòng tránh nổ, vỡ các thiết bị áp lực (nồi hơi, bình chứa khí nén, hệ thống lạnh, các chai chứa khí,...).",
        options: [
            "Tất cả các thiết bị áp lực đều phải được đăng ký và kiểm định kỹ thuật an toàn; khi hết hạn phải tiến hành kiểm định lại, đặc biệt đối với các loại chai chứa khí phải kiểm tra hạn sử dụng trên vỏ chai.",
            "Người vận hành thiết bị có yêu cầu nghiêm ngặt về an toàn lao động phải được huấn luyện kỹ thuật an toàn và được cấp chứng chỉ an toàn theo quy định.",
            "Phải có quy trình vận hành và quy trình xử lý sự cố.",
            "Thường xuyên kiểm tra thiết bị để kịp thời phát hiện những hư hỏng, biến dạng khác thường.",
            "Vị trí đặt thiết bị phải cách xa nguồn nhiệt hoặc nơi có chứa hóa chất ăn mòn.",
            "Thực hiện nghiêm chỉnh các tiêu chuẩn, quy phạm có liên quan đến thiết bị áp lực.",
            "Các câu (a, b, c, d, e, f) đúng.",
            "Các câu (a, c, d, f) đúng."
        ],
        answer: 6, // g
        explain: "Tất cả các biện pháp kỹ thuật và tổ chức từ a đến f đều bắt buộc phải tuân thủ nghiêm ngặt để ngăn ngừa nổ vỡ thiết bị chịu áp lực."
    },
    {
        id: "d1_c12",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 12. Theo quy định của Luật An toàn, vệ sinh lao động năm 2015 có hiệu lực ngày 01 tháng 7 năm 2016, người lao động có mấy quyền và mấy nghĩa vụ.",
        options: [
            "Có 06 quyền và 03 nghĩa vụ.",
            "Có 05 quyền và 04 nghĩa vụ.",
            "Có 03 quyền và 06 nghĩa vụ."
        ],
        answer: 0, // a
        explain: "Điều 5 Luật AT-VSLĐ 2015 quy định người lao động làm việc theo hợp đồng có 6 quyền (khoản 1) và 3 nghĩa vụ (khoản 2)."
    },
    {
        id: "d1_c13",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 13. Theo quy định của Luật An toàn, vệ sinh lao động năm 2015 có hiệu lực ngày 01 tháng 7 năm 2016, người sử dụng lao động có mấy quyền và mấy nghĩa vụ.",
        options: [
            "Có 07 quyền và 05 nghĩa vụ.",
            "Có 04 quyền và 07 nghĩa vụ.",
            "Có 04 quyền và 06 nghĩa vụ."
        ],
        answer: 1, // b
        explain: "Điều 7 Luật AT-VSLĐ 2015 quy định người sử dụng lao động có 4 quyền (khoản 1) và 7 nghĩa vụ (khoản 2)."
    },
    {
        id: "d1_c14",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 14. Biện pháp phòng chống cháy nổ.",
        options: [
            "Tuyên truyền, giáo dục.",
            "Biện pháp kỹ thuật.",
            "Biện pháp hành chính, pháp luật.",
            "Chọn vật liệu khó cháy để tránh gây cháy nổ.",
            "Các câu (a, b, d) đúng.",
            "Các câu (a, b, c, d) đúng."
        ],
        answer: 5, // f
        explain: "Biện pháp phòng chống cháy nổ toàn diện bao gồm cả tuyên truyền giáo dục, pháp lý hành chính, các giải pháp kỹ thuật và việc sử dụng vật liệu chống cháy lan."
    },
    {
        id: "d1_c15",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 15. Luật An toàn, vệ sinh lao động năm 2015 có hiệu lực ngày 01 tháng 7 năm 2016. Điều 16 quy định người sử dụng lao động có mấy trách nhiệm về công tác an toàn, vệ sinh lao động?",
        options: [
            "Có 09 trách nhiệm.",
            "Có 07 trách nhiệm.",
            "Có 08 trách nhiệm."
        ],
        answer: 0, // a
        explain: "Điều 16 Luật AT-VSLĐ 2015 quy định 9 trách nhiệm của người sử dụng lao động trong việc bảo đảm an toàn, vệ sinh lao động tại nơi làm việc."
    },
    {
        id: "d1_c16",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 16. Luật An toàn, vệ sinh lao động năm 2015 có hiệu lực ngày 01 tháng 7 năm 2016. Điều 17 quy định người lao động có mấy trách nhiệm về công tác an toàn, vệ sinh lao động?",
        options: [
            "Có 05 trách nhiệm.",
            "Có 04 trách nhiệm.",
            "Có 06 trách nhiệm."
        ],
        answer: 1, // b
        explain: "Điều 17 Luật AT-VSLĐ 2015 quy định 4 trách nhiệm của người lao động tại nơi làm việc."
    },
    {
        id: "d1_c17",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 17. Khi tiến hành làm việc trong không gian hạn chế cần phải thực hiện các công việc?",
        options: [
            "Khảo sát trước khi làm việc.",
            "Tổ chức huấn luyện cho người lao động biện pháp làm việc an toàn khi làm việc trong không gian hạn chế.",
            "Trang bị đầy đủ phương tiện bảo vệ cá nhân cho người lao động phù hợp với công việc được giao.",
            "Những công việc không thể làm việc ở bên ngoài mới phải vào trong không gian hạn chế để làm việc.",
            "Chỉ những người được cấp giấy phép mới được vào không gian hạn chế để làm việc.",
            "Làm việc trong không gian hạn chế nhất thiết phải có hai người, một người làm việc, một người làm sẵn sàng sơ cấp cứu.",
            "Không bảo đảm an toàn, không được vào làm việc trong không gian hạn chế.",
            "Các câu (a, b, c, d, e, f, g) đúng.",
            "Các câu (a, b, c, d, e, g) đúng.",
            "Các câu (b, c, d, e, f, g) đúng."
        ],
        answer: 7, // h
        explain: "Không gian hạn chế (hầm, giếng sâu, bồn chứa...) tiềm ẩn nguy cơ ngạt khí và nhiễm độc, bắt buộc phải tuân thủ nghiêm ngặt toàn bộ 7 yêu cầu an toàn trên."
    },
    {
        id: "d1_c18",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 18. Phương pháp sơ cấp cứu khi bị điện giật?",
        options: [
            "Nhanh chóng tách nạn nhân ra khỏi nguồn điện bằng cách ngắt cầu dao, cầu chì,... (người cấp cứu phải cách điện với nguồn điện và người được cấp cứu).",
            "Đưa nạn nhân ra nơi thoáng mát đặt nạn nhân nằm trên nền đất cứng, đầu ngửa về phía sau, nơi cúc áo, dây lưng quần, mở miệng nạn nhân làm thông đường thở (nếu có rãi, đất đá lấy ra, lưỡi bị co lại kéo cho lưỡi thẳng ra...).",
            "Thực hiện hô hấp nhân tạo và ép tim ngoài lồng ngực nếu nạn nhân ngừng thở và tim ngừng đập (hô hấp 2 lần - ép tim 30 lần làm liên tục).",
            "Sau đó chuyển nạn nhân đi bệnh viện hoặc trung tâm y tế gần nhất.",
            "Đổ nước vào nạn nhân.",
            "Các câu (a, b, c, d) đúng.",
            "Các câu (a, b, c, d, e) đúng.",
            "Các câu (a, c, d, e) đúng."
        ],
        answer: 5, // f
        explain: "Tuyệt đối không đổ nước vào nạn nhân bị điện giật. Quy trình chuẩn là: Tách nguồn điện -> Làm thông đường thở -> Ép tim & thổi ngạt (30:2) -> Chuyển đến cơ sở y tế."
    },
    {
        id: "d1_c19",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 19. Các yếu tố tạo thành ngọn lửa?",
        options: [
            "Ô xy.",
            "Chất cháy.",
            "Nguồn nhiệt.",
            "Các câu (a, b, c) đúng.",
            "Các câu (a, b) đúng.",
            "Các câu (a, c) đúng."
        ],
        answer: 3, // d
        explain: "Tam giác cháy gồm 3 yếu tố cơ bản: Chất cháy, Ô-xy và Nguồn nhiệt."
    },
    {
        id: "d1_c20",
        category: "Đề số 1: Công tác AT-VSLĐ",
        question: "Câu 20. Mục đích của sơ cấp cứu?",
        options: [
            "Cứu sống nạn nhân.",
            "Giảm đau đớn cho nạn nhân.",
            "Hạn chế biến chứng xảy ra sau tai nạn.",
            "Các câu (a, b, c) đúng.",
            "Các câu (a, b) đúng."
        ],
        answer: 3, // d
        explain: "Ba mục tiêu căn bản của sơ cấp cứu ban đầu tại hiện trường: Duy trì tính mạng, giảm bớt đau đớn và ngăn ngừa các di chứng tổn thương nặng hơn."
    },

    // ==================== ĐỀ SỐ 2: KIỂM TRA NHẬN THỨC AT-VSLĐ ====================
    {
        id: "d2_c1",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 1. Những công việc nào dưới đây là công việc có yêu cầu nghiêm ngặt về AT-VSLĐ (theo Thông tư 02/2017/TT-BQP của Bộ Quốc phòng)?",
        options: [
            "A. Lắp ráp, vận hành, bảo dưỡng, sửa chữa, tháo dỡ, kiểm tra, giám sát hoạt động máy, thiết bị có yêu cầu nghiêm ngặt về AT-VSLĐ (danh mục do BQP ban hành).",
            "B. Lắp đặt, sửa chữa, vận hành các hệ thống điện, nhà máy điện; chuyên lắp đặt, sửa chữa bảo dưỡng máy, thiết bị điện.",
            "C. Lắp ráp, vận hành, bảo dưỡng, sửa chữa, tháo dỡ, kiểm tra, giám sát hoạt động xe máy xúc, ủi, gạt, máy trộn, đầm bê tông, đầm nền, xe lu, máy hút bùn, máy bơm; máy phun hoặc bơm vữa, bê tông.",
            "D. Lắp ráp, vận hành, bảo dưỡng, sửa chữa, vệ sinh các loại máy mài, cưa xẻ, cắt, xẻ, chặt, đột, dập, nghiền xay, trộn, cán, băng chuyền, băng tải, súng khí nén.",
            "E. Các công việc trên cao cách mặt bằng làm việc từ 2 m trở lên, trên các sàn công tác di động, nơi cheo leo nguy hiểm, trên sông, trên biển, lặn dưới nước.",
            "F. Lắp ráp, vận hành, bảo dưỡng, sửa chữa, kiểm tra, giám sát hoạt động, làm vệ sinh các phương tiện sau: xe cơ giới, các phương tiện vận tải hành khách, vật liệu, hàng hóa; ụ tàu.",
            "G. Tất cả các công việc từ A đến F và các công việc phun cát, tẩy gỉ, gò gỉ, cạo gỉ, sơn, hàn."
        ],
        answer: 6, // G
        explain: "Theo danh mục công việc nghiêm ngặt của Bộ Quốc phòng (Thông tư 02/2017/TT-BQP), toàn bộ các công việc từ A đến G đều thuộc danh mục có yêu cầu nghiêm ngặt về AT-VSLĐ."
    },
    {
        id: "d2_c2",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 2. Đối tượng thuộc diện huấn luyện AT-VSLĐ là người làm công tác chỉ huy, quản lý được xếp vào nhóm nào?",
        options: [
            "A. Nhóm 1: Người làm công tác chỉ huy, quản lý.",
            "B. Nhóm 2: Người làm công tác AT-VSLĐ (người giám sát về AT-VSLĐ).",
            "C. Nhóm 3: Người lao động làm các công việc có yêu cầu nghiêm ngặt về AT-VSLĐ.",
            "D. Nhóm 4: Người lao động không thuộc các nhóm 1, 2, 3, 5, 6.",
            "E. Nhóm 5: Người làm công tác y tế.",
            "F. Nhóm 6: Người tham gia mạng lưới an toàn, vệ sinh viên."
        ],
        answer: 0, // A
        explain: "Người làm công tác quản lý, người đứng đầu, người chỉ huy thuộc đối tượng Nhóm 1."
    },
    {
        id: "d2_c3",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 3. Những nhóm thiết bị nào sau đây bắt buộc phải kiểm định kỹ thuật an toàn định kỳ?",
        options: [
            "A. Nhóm thiết bị nồi hơi, thiết bị chịu áp lực (ví dụ: bình hơi máy nén khí,...).",
            "B. Nhóm thiết bị nâng, thang máy, thang cuốn (ví dụ: cầu trục, xe cẩu,...).",
            "C. Cả hai nhóm A và B đều bắt buộc phải kiểm định an toàn định kỳ.",
            "D. Chỉ kiểm định khi thiết bị gặp sự cố kỹ thuật hoặc hư hỏng."
        ],
        answer: 2, // C
        explain: "Cả thiết bị chịu áp lực và thiết bị nâng đều bắt buộc phải kiểm định an toàn kỹ thuật định kỳ trước và trong quá trình vận hành."
    },
    {
        id: "d2_c4",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 4. Mục đích của công tác an toàn, bảo hộ lao động bao gồm:",
        options: [
            "A. Đảm bảo an toàn thân thể của NLĐ, hạn chế đến mức thấp nhất hoặc không để xảy ra tai nạn, chấn thương gây tàn phế hoặc tử vong trong lao động.",
            "B. Bảo đảm NLĐ khỏe mạnh, không bị mắc bệnh nghề nghiệp (BNN) hoặc các bệnh tật khác do điều kiện lao động (ĐKLĐ) xấu gây ra.",
            "C. Bồi dưỡng phục hồi kịp thời và duy trì sức khỏe, khả năng lao động cho NLĐ.",
            "D. Bao gồm cả A, B và C."
        ],
        answer: 3, // D
        explain: "Mục đích cơ bản của bảo hộ lao động là bảo vệ an toàn tính mạng, bảo vệ sức khỏe phòng tránh BNN và duy trì khả năng lao động bền vững."
    },
    {
        id: "d2_c5",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 5. Các yếu tố gây chấn thương, tai nạn lao động bao gồm:",
        options: [
            "A. Các bộ phận truyền động và chuyển động; nguồn nhiệt (nóng, lạnh).",
            "B. Nguồn điện; vật rơi, đổ, sập.",
            "C. Nổ vật lý, nổ hóa học.",
            "D. Tất cả các yếu tố nêu tại A, B và C."
        ],
        answer: 3, // D
        explain: "Yếu tố cơ học (chuyển động, vật rơi), yếu tố nhiệt, điện năng và áp suất/cháy nổ đều là các nguồn gây chấn thương, tai nạn lao động."
    },
    {
        id: "d2_c6",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 6. Các yếu tố có hại đến sức khỏe, gây bệnh nghề nghiệp (BNN) bao gồm:",
        options: [
            "A. Vi khí hậu: nhiệt độ, độ ẩm, các bức xạ có hại, tốc độ vận chuyển của không khí.",
            "B. Tiếng ồn, rung, xóc; chiếu sáng không hợp lý; bụi.",
            "C. Các hóa chất độc hại; các vi sinh vật có hại.",
            "D. Các yếu tố về cường độ lao động, tư thế lao động gò bó và đơn điệu,...",
            "E. Tất cả các yếu tố trên (A, B, C, D)."
        ],
        answer: 4, // E
        explain: "Môi trường vi khí hậu, tiếng ồn rung, bụi, hóa chất độc và gánh nặng lao động kéo dài đều là nguyên nhân gây suy giảm sức khỏe và bệnh nghề nghiệp."
    },
    {
        id: "d2_c7",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 7. Đối với bình chữa cháy MFZL, khi kim áp suất chỉ ở giới hạn màu vàng báo hiệu điều gì?",
        options: [
            "A. Áp suất khí đẩy trong bình yếu, không có khả năng đẩy bột ra ngoài được.",
            "B. Áp suất khí đẩy trong bình đạt tiêu chuẩn, đủ để đẩy bột ra bên ngoài.",
            "C. Áp suất khí đẩy trong bình vượt quá giới hạn mức quy định (áp suất tăng cao).",
            "D. Bình đã hết chất chữa cháy."
        ],
        answer: 2, // C
        explain: "Đồng hồ đo áp suất bình bột: Vạch Đỏ (thiếu áp/yếu), Vạch Xanh (áp suất đạt chuẩn), Vạch Vàng (áp suất cao vượt mức tiêu chuẩn)."
    },
    {
        id: "d2_c8",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 8. Khi xảy ra cháy, thứ tự các bước xử lý đúng nhất là:",
        options: [
            "A. 1- Dùng bình chữa cháy, cát, nước... để dập tắt; 2- Ngắt cầu dao điện; 3- Báo động gấp; 4- Gọi 114.",
            "B. 1- Báo động gấp; 2- Ngắt cầu dao điện; 3- Dùng bình chữa cháy, cát, nước... để dập tắt; 4- Gọi 114 (báo cáo người chỉ huy).",
            "C. 1- Báo động gấp; 2- Gọi 114; 3- Dùng bình chữa cháy dập lửa; 4- Ngắt cầu dao điện.",
            "D. 1- Gọi 114; 2- Báo động gấp; 3- Ngắt cầu dao điện; 4- Dùng bình chữa cháy dập lửa."
        ],
        answer: 1, // B
        explain: "Nguyên tắc 4 bước chữa cháy: 1. Báo động cho mọi người -> 2. Cắt điện khu vực cháy -> 3. Sử dụng phương tiện tại chỗ dập lửa -> 4. Báo cháy chuyên nghiệp 114 và người chỉ huy."
    },
    {
        id: "d2_c9",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 9. Bình chữa cháy khí CO2 (MT3, MT5...) tuyệt đối không dùng để dập tắt đám cháy nào?",
        options: [
            "A. Đám cháy gỗ, vải, sợi, bông.",
            "B. Đám cháy xăng dầu.",
            "C. Đám cháy có kim loại kiềm, kiềm thổ, than cốc, phân đạm.",
            "D. Đám cháy thiết bị điện tử buồng kín."
        ],
        answer: 2, // C
        explain: "CO2 tác dụng với kim loại kiềm (Na, K, Mg...) hoặc than cốc nóng đỏ sẽ tạo ra khí CO cực độc và phản ứng tỏa nhiệt mạnh làm bùng phát nổ dữ dội hơn."
    },
    {
        id: "d2_c10",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 10. Bình cứu hỏa dạng bột có ký hiệu ABC hoặc BC. Các chữ cái A, B, C thể hiện khả năng chữa cháy đối với:",
        options: [
            "A. A: Chữa đám cháy chất rắn (gỗ, bông, vải); B: Chữa đám cháy chất lỏng (xăng, dầu, cồn); C: Chữa đám cháy chất khí (gas).",
            "B. A: Chữa đám cháy chất rắn; B: Chữa đám cháy chất khí; C: Chữa đám cháy chất lỏng.",
            "C. A: Chữa đám cháy chất lỏng; B: Chữa đám cháy chất khí; C: Chữa đám cháy chất rắn."
        ],
        answer: 0, // A
        explain: "Quy ước tiêu chuẩn PCCC: A = Solid (Chất rắn); B = Liquid (Chất lỏng); C = Gas (Chất khí hóa lỏng)."
    },
    {
        id: "d2_c11",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 11. Các thao tác đúng khi sử dụng bình bột cứu hỏa (MFZ) là:",
        options: [
            "A. 1. Rút chốt an toàn; 2. Lắc bình 3-4 lần; 3. Hướng vòi phun vào gốc lửa; 4. Bóp van phun.",
            "B. 1. Lắc bình 3-4 lần; 2. Hướng vòi phun vào vật cháy; 3. Rút chốt an toàn; 4. Bóp van phun.",
            "C. 1. Lắc bình 3-4 lần (nếu di chuyển chưa lắc); 2. Rút chốt an toàn; 3. Hướng loa/vòi phun vào gốc lửa; 4. Bóp mạnh mỏ vịt phun bột."
        ],
        answer: 2, // C
        explain: "Thao tác chuẩn: Lắc bình để bột tơi xốp -> Rút chốt hãm kẹp chì -> Hướng loa phun vào gốc lửa cách 1,5 - 3m -> Bóp van liên tục."
    },
    {
        id: "d2_c12",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 12. Năm 2016 Thủ tướng Chính phủ đã quyết định chọn tháng mấy hàng năm là “Tháng hành động về An toàn, vệ sinh lao động”?",
        options: [
            "A. Tháng 2",
            "B. Tháng 3",
            "C. Tháng 5",
            "D. Tháng 9"
        ],
        answer: 2, // Tháng 5
        explain: "Theo Quyết định số 87/QĐ-TTg ngày 12/01/2016 của Thủ tướng Chính phủ, tháng 5 hàng năm được chọn là Tháng hành động về AT-VSLĐ."
    },
    {
        id: "d2_c13",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 13. Sự cháy chỉ xảy ra khi nào?",
        options: [
            "A. Khi có đủ 3 yếu tố: Chất cháy, ô xy và nguồn nhiệt (đồng thời đạt giới hạn nồng độ và nhiệt độ bắt cháy).",
            "B. Khi có đủ 2 yếu tố: Chất cháy và nguồn nhiệt.",
            "C. Khi có đủ 3 yếu tố: Chất cháy, khí CO2 và nguồn nhiệt."
        ],
        answer: 0, // A
        explain: "Sự cháy chỉ phát sinh và duy trì khi có đồng thời 3 yếu tố: Chất cháy + Chất oxy hóa (Ôxy) + Nguồn mồi cháy tiếp xúc trực tiếp."
    },
    {
        id: "d2_c14",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 14. Khi khoan xử lý mìn câm, khoảng cách tối thiểu an toàn giữa lỗ khoan mới để xử lý và lỗ mìn câm là bao nhiêu?",
        options: [
            "A. 20 cm.",
            "B. 30 cm.",
            "C. 40 cm."
        ],
        answer: 1, // 30 cm
        explain: "Theo quy chuẩn kỹ thuật an toàn nổ mìn (QCVN 01:2019/BCT và tài liệu huấn luyện công binh), khi khoan song song để xử lý lỗ mìn câm thì khoảng cách không được nhỏ hơn 30 cm."
    },
    {
        id: "d2_c15",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 15. Sau khi nổ mìn nếu phát hiện có đá treo, hàm ếch nguy hiểm cho người và trang bị xe máy thì đồng chí phải làm gì?",
        options: [
            "A. Tìm cách loại trừ ngay những nguy hiểm đó dưới sự chỉ đạo của cán bộ phụ trách ở khu vực đó. Nếu không có khả năng giải quyết nhanh thì phải đặt biển báo hiệu cấm người và phương tiện vào phạm vi nguy hiểm.",
            "B. Tiếp tục thực hiện các công việc khác được phân công như: bốc xúc vận chuyển đất đá, khoan đá,... (miễn là mang mặc bảo hộ đầy đủ)."
        ],
        answer: 0, // A
        explain: "Phải loại trừ ngay đá treo, hàm ếch hoặc khoanh vùng cắm biển cảnh báo cấm tiếp cận; tuyệt đối không tiếp tục làm việc phía dưới vị trí có nguy cơ sạt lở."
    },
    {
        id: "d2_c16",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 16. Những hành vi nào dưới đây là ĐÚNG quy tắc an toàn nổ mìn?",
        options: [
            "A. Khi nổ mìn điện mà bị câm, nếu tìm được hai đầu dây điện trong phát mìn lộ thiên thì phải lập tức đấu chập mạch hai đầu dây đó lại.",
            "B. Khoan tiếp vào đáy các lỗ mìn câm của loạt nổ trước để tận dụng chiều sâu.",
            "C. Cả câu A và B đều đúng.",
            "D. Câu A đúng; nghiêm cấm tuyệt đối hành vi khoan vào lỗ mìn câm hoặc đáy lỗ khoan cũ."
        ],
        answer: 3, // D
        explain: "Nghiêm cấm tuyệt đối việc khoan tiếp vào lỗ mìn câm cũ (rất dễ kích nổ lượng nổ sót lại gây nổ bất ngờ). Việc đấu chập 2 đầu dây kíp điện khi xử lý mìn câm lộ thiên là biện pháp an toàn chống dòng điện cảm ứng."
    },
    {
        id: "d2_c17",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 17. Trường hợp nào cho phép nổ mìn không cần có hộ chiếu nổ mìn?",
        options: [
            "A. Nổ các phát mìn để hiệu chỉnh chu vi gương lò theo hộ chiếu đào chống lò; nổ để hạ nền lò mở rộng tiết diện lò khi chống xén.",
            "B. Nổ để giải quyết các tảng đá treo trên gương tầng.",
            "C. Nổ để giải quyết sự cố trong quá trình khoan (nổ làm khô lỗ khoan, nổ chống trượt, cứu giật ty choòng).",
            "D. Nổ để thủ tiêu các phát mìn câm.",
            "E. Tất cả các trường hợp đặc biệt giải quyết sự cố kỹ thuật nêu tại A, B, C, D (tuân theo quy trình an toàn)."
        ],
        answer: 4, // E
        explain: "Các phát mìn cục bộ xử lý sự cố kẹt cần khoan, phá đá quá cỡ tức thời, thủ tiêu mìn câm hoặc xén chỉnh gương được thực hiện theo quy trình an toàn đột xuất có sự giám sát của chỉ huy nổ mìn mà không cần lập hộ chiếu nổ mìn riêng."
    },
    {
        id: "d2_c18",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 18. Khi đang chuẩn bị nổ mìn bằng điện mà gặp trời mưa dông, sấm sét thì phải xử lý như thế nào?",
        options: [
            "A. Dừng hoàn toàn công tác nạp nổ mìn; tháo dây khu vực ra khỏi mạng dây chính, chập mạch và bọc cách điện các đầu dây, toàn bộ người rút ra khỏi vùng nguy hiểm.",
            "B. Tiếp tục nhanh chóng đấu dây để kịp khởi nổ trước khi mưa to.",
            "C. Cho nổ ngay lập tức bất kể người xung quanh đã di tản hết hay chưa."
        ],
        answer: 0, // A
        explain: "Khi có dông sét, điện áp khí quyển và tia sét có thể gây cảm ứng phát nổ kíp điện bất kỳ lúc nào. Phải dừng nạp nổ, tháo chập mạch đầu dây và rút quân ngay."
    },
    {
        id: "d2_c19",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 19. Khoảng cách an toàn tối thiểu đối với người khi nổ mìn lộ thiên với lỗ khoan nhỏ là bao nhiêu?",
        options: [
            "A. > 100 m",
            "B. > 200 m",
            "C. > 300 m"
        ],
        answer: 1, // > 200 m
        explain: "Theo Quy chuẩn kỹ thuật quốc gia về an toàn trong bảo quản, vận chuyển, sử dụng VLNCN, khoảng cách an toàn đá văng cho người khi nổ mìn lộ thiên lỗ khoan nhỏ tối thiểu là 200 m."
    },
    {
        id: "d2_c20",
        category: "Đề số 2: Nhận thức AT-VSLĐ",
        question: "Câu 20. Câu hỏi nhận thức (Câu 21 trong đề): Khi thực hiện nhiệm vụ thi công, vận hành xe máy công trình hoặc thi công nổ mìn phá đá trên công trường, người cán bộ/chiến sĩ đối mặt với các nguy cơ tai nạn lao động nào?",
        options: [
            "A. Sạt lở taluy, đá lăn, đá văng khi nổ mìn; ngạt khói độc trong đường hầm.",
            "B. Điện giật từ hệ thống máy móc, thiết bị và máy phát điện dã ngoại.",
            "C. Tai nạn do va chạm cơ giới, lật xe máy xúc, ủi, lu tại các cung đường cua dốc.",
            "D. Tất cả các nguy cơ trên; đòi hỏi phải trang bị đầy đủ BHLĐ và chấp hành nghiêm quy trình an toàn."
        ],
        answer: 3, // D
        explain: "Đây là phần củng cố lý thuyết cho câu hỏi tự luận công trường: Đơn vị công binh thi công luôn đối mặt với cả nguy cơ sạt lở đá, tai nạn nổ mìn, tai nạn điện và máy cơ giới chuyên dụng."
    }
];