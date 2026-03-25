/* Global product dataset for file:// friendly static site */
(() => {
  /**
   * price is in VND
    * category: bath | trim | vet | hotel | smallpets | exotic
   */
  window.PETCARE_PRODUCTS = [
    {
      id: 'bath-basic',
      category: 'bath',
      name: 'Tắm & Sấy Basic',
      short: 'Sạch thơm, phù hợp lịch chăm định kỳ.',
      pets: ['dog', 'cat'],
      price: 199000,
      compareAt: 249000,
      duration: '45–60 phút',
      includes: ['Tắm + sấy', 'Vệ sinh tai', 'Cắt móng', 'Nước hoa dịu nhẹ'],
      details:
        'Gói cơ bản giúp bé sạch thơm và dễ chịu. Dùng sản phẩm dịu nhẹ, phù hợp nhiều loại da. Nếu bé da nhạy cảm, shop sẽ điều chỉnh sản phẩm phù hợp.',
      notes: ['Giá thay đổi theo cân nặng và độ dày lông.', 'Báo giá trước khi thực hiện.'],
    },
    {
      id: 'care-plus',
      category: 'bath',
      name: 'Care+ Grooming',
      short: 'Tắm + vệ sinh + cắt tỉa gọn + dưỡng lông.',
      pets: ['dog', 'cat'],
      price: 329000,
      compareAt: 389000,
      duration: '70–90 phút',
      includes: ['Tắm + sấy + vệ sinh', 'Cắt tỉa gọn gàng', 'Xịt dưỡng lông', 'Tư vấn dinh dưỡng'],
      details:
        'Gói Care+ phù hợp khi bạn muốn bé vừa sạch thơm vừa gọn gàng. Có bước dưỡng lông để lông mềm mượt hơn và giảm rối.',
      notes: ['Giá thay đổi theo cân nặng/độ dày lông.', 'Shop sẽ báo trước khi thực hiện.'],
    },
    {
      id: 'spa-premium',
      category: 'bath',
      name: 'Premium Spa',
      short: 'Tẩy tế bào chết + dưỡng da + ưu tiên khung giờ.',
      pets: ['dog', 'cat'],
      price: 499000,
      compareAt: 599000,
      duration: '90–120 phút',
      includes: ['Gói Care+', 'Tẩy tế bào chết', 'Dưỡng da & khử mùi', 'Ưu tiên khung giờ'],
      details:
        'Gói Premium tập trung vào spa da lông và trải nghiệm thoải mái. Phù hợp bé cần phục hồi lông, giảm mùi hoặc muốn chăm sóc kỹ.',
      notes: ['Nếu bé đang có vấn đề da liễu, nên tư vấn trước để chọn sản phẩm phù hợp.'],
    },
    {
      id: 'bath-sensitive',
      category: 'bath',
      name: 'Tắm Dưỡng Da Nhạy Cảm',
      short: 'Giảm mùi, dưỡng ẩm, phù hợp bé dễ kích ứng.',
      pets: ['dog', 'cat'],
      price: 279000,
      compareAt: 329000,
      duration: '60–75 phút',
      includes: ['Tắm dưỡng ẩm', 'Sấy an toàn', 'Chải tơi lông', 'Xịt dưỡng lông'],
      details:
        'Phù hợp cho bé có dấu hiệu khô da, rụng lông theo mùa hoặc dễ kích ứng. Quy trình nhẹ nhàng, hạn chế stress.',
      notes: ['Không áp dụng cho bé đang có vết thương hở (cần tư vấn trước).'],
    },
    {
      id: 'trim-hygiene',
      category: 'trim',
      name: 'Cắt Tỉa Vệ Sinh',
      short: 'Gọn gàng vùng mắt/tai/chân, dễ chăm tại nhà.',
      pets: ['dog', 'cat'],
      price: 159000,
      compareAt: 199000,
      duration: '30–45 phút',
      includes: ['Tỉa vệ sinh', 'Cắt móng', 'Vệ sinh tai', 'Chải lông'],
      details:
        'Gói này phù hợp khi bạn muốn bé gọn gàng nhưng không cần cắt tạo kiểu toàn thân. Tập trung vùng dễ bẩn/dễ rối.',
      notes: ['Có thể kết hợp với tắm để tối ưu thời gian.'],
    },
    {
      id: 'trim-style',
      category: 'trim',
      name: 'Cắt Tạo Kiểu (Theo Form)',
      short: 'Teddy / Poodle / theo ảnh mẫu.',
      pets: ['dog', 'cat'],
      price: 399000,
      compareAt: 499000,
      duration: '90–120 phút',
      includes: ['Tư vấn form', 'Cắt tạo kiểu', 'Chỉnh form', 'Vệ sinh cơ bản'],
      details:
        'Phù hợp khi bạn muốn bé có kiểu lông đẹp, hợp dáng. Bạn có thể gửi ảnh tham khảo để shop tư vấn form phù hợp.',
      notes: ['Giá thay đổi theo giống, độ rối và độ dày lông.'],
    },
    {
      id: 'vet-check',
      category: 'vet',
      name: 'Khám Tổng Quát (Demo)',
      short: 'Theo dõi sức khỏe cơ bản và tư vấn dinh dưỡng.',
      pets: ['dog', 'cat', 'smallpets'],
      price: 99000,
      compareAt: 149000,
      duration: '20–30 phút',
      includes: ['Cân nặng', 'Da lông', 'Tai', 'Tư vấn chăm sóc'],
      details:
        'Demo cho bài tập UI: mô tả dịch vụ khám tổng quát. Nếu bạn làm dự án thật, phần này nên liên kết phòng khám/bác sĩ.',
      notes: ['Không thay thế chẩn đoán y khoa.'],
    },
    {
      id: 'hotel-day',
      category: 'hotel',
      name: 'Khách Sạn (Theo Ngày)',
      short: 'Phòng sạch, theo dõi và cho ăn theo lịch.',
      pets: ['dog', 'cat'],
      price: 180000,
      compareAt: 220000,
      duration: '1 ngày',
      includes: ['Phòng tiêu chuẩn', 'Vệ sinh hằng ngày', 'Cho ăn theo lịch'],
      details:
        'Phù hợp khi bạn bận đi công việc/du lịch. Bé được theo dõi theo khung giờ và cập nhật (tuỳ gói).',
      notes: ['Bạn có thể mang theo đồ ăn quen để bé dễ thích nghi.'],
    },

    /* Small pets (hamster / rabbit / bird / fish...) */
    {
      id: 'small-clean-basic',
      category: 'smallpets',
      name: 'Vệ Sinh Nhẹ Nhàng (Thú nhỏ)',
      short: 'Làm sạch cơ bản, hạn chế stress cho bé.',
      pets: ['hamster', 'rabbit', 'bird', 'smallpets'],
      price: 119000,
      compareAt: 149000,
      duration: '20–35 phút',
      includes: ['Làm sạch nhẹ', 'Kiểm tra ngoại quan', 'Tư vấn chăm tại nhà'],
      details:
        'Gói demo dành cho thú nhỏ (hamster, thỏ, chim…): ưu tiên thao tác nhẹ nhàng, thời gian ngắn và môi trường yên tĩnh để bé ít căng thẳng.',
      notes: ['Với thú nhạy cảm, shop sẽ trao đổi trước về thao tác phù hợp.'],
    },
    {
      id: 'small-nails',
      category: 'smallpets',
      name: 'Cắt Móng An Toàn (Thú nhỏ)',
      short: 'Gọn gàng, giảm trầy xước khi bé vận động.',
      pets: ['hamster', 'rabbit', 'smallpets'],
      price: 79000,
      compareAt: 99000,
      duration: '10–20 phút',
      includes: ['Cắt móng', 'Mài nhẹ (tuỳ bé)', 'Hướng dẫn kiểm tra móng'],
      details:
        'Phù hợp cho hamster/thỏ và các bé cần cắt móng định kỳ. Demo UI/UX: bạn có thể đổi nội dung theo dịch vụ thực tế.',
      notes: ['Nếu bé quá sợ hãi, có thể dừng dịch vụ để đảm bảo an toàn.'],
    },
    {
      id: 'small-habitat',
      category: 'smallpets',
      name: 'Tư Vấn Chuồng & Môi Trường Sống',
      short: 'Gợi ý nền lót, vệ sinh, giảm mùi (demo).',
      pets: ['hamster', 'rabbit', 'bird', 'fish', 'smallpets'],
      price: 59000,
      compareAt: 89000,
      duration: '15–25 phút',
      includes: ['Checklist chuồng', 'Gợi ý vệ sinh', 'Tư vấn lịch chăm'],
      details:
        'Gói tư vấn demo: giúp bạn có checklist sắp xếp chuồng/lồng, vệ sinh và thói quen chăm sóc phù hợp từng bé. (Không thay thế tư vấn thú y.)',
      notes: ['Bạn có thể mang ảnh chuồng/lồng để shop gợi ý nhanh.'],
    },

    /* Exotic pets (otter / other special pets...) */
    {
      id: 'exotic-care-consult',
      category: 'exotic',
      name: 'Tư Vấn Chăm Sóc Thú Cưng Đặc Biệt',
      short: 'Đánh giá nhu cầu cơ bản & hướng dẫn an toàn (demo).',
      pets: ['otter', 'exotic'],
      price: 129000,
      compareAt: 169000,
      duration: '20–30 phút',
      includes: ['Trao đổi thói quen', 'Checklist an toàn', 'Gợi ý lịch chăm'],
      details:
        'Dành cho các bé “đặc biệt” (ví dụ rái cá…): mục tiêu là tư vấn quy trình chăm sóc an toàn, vệ sinh và môi trường sống phù hợp. Nội dung demo UI/UX.',
      notes: ['Luôn ưu tiên an toàn và tuân thủ quy định địa phương.'],
    },
    {
      id: 'exotic-spa-lite',
      category: 'exotic',
      name: 'Spa Nhẹ (Thú cưng đặc biệt)',
      short: 'Vệ sinh cơ bản theo tình trạng và thói quen (demo).',
      pets: ['otter', 'exotic'],
      price: 199000,
      compareAt: 249000,
      duration: '30–45 phút',
      includes: ['Vệ sinh nhẹ', 'Theo dõi phản ứng', 'Tư vấn sau dịch vụ'],
      details:
        'Gói demo cho bài tập thiết kế: quy trình ưu tiên thao tác nhẹ, theo dõi phản ứng và dừng khi bé căng thẳng. Bạn có thể thay bằng dịch vụ thực tế của shop.',
      notes: ['Tùy loài/tình trạng, shop sẽ trao đổi kỹ trước khi thực hiện.'],
    },
  ];

  window.PETCARE_CATEGORY_LABELS = {
    bath: 'Tắm & Sấy',
    trim: 'Cắt tỉa',
    vet: 'Khám định kỳ',
    hotel: 'Khách sạn',
    smallpets: 'Thú nhỏ',
    exotic: 'Thú cưng đặc biệt',
  };
})();
