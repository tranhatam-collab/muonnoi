import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  investorType: string;
  projectInterest: string;
  amountRange: string;
  riskAcknowledged: boolean;
  notTransactionAcknowledged: boolean;
  contactAllowed: boolean;
}

export default function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    investorType: '',
    projectInterest: '',
    amountRange: '',
    riskAcknowledged: false,
    notTransactionAcknowledged: false,
    contactAllowed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire to API endpoint (e.g., POST /api/interest)
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">Đã nhận thông tin quan tâm</h3>
        <p className="text-green-700">
          Cảm ơn bạn đã quan tâm. Đội phụ trách sẽ liên hệ trong vòng 3–5 ngày làm việc.
        </p>
        <p className="text-sm text-green-600 mt-4">
          Lưu ý: Đây chỉ là bày tỏ quan tâm, chưa phải giao dịch đầu tư.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên <span className="text-red-500">*</span></label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Quốc gia cư trú <span className="text-red-500">*</span></label>
          <input
            id="country"
            name="country"
            type="text"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="investorType" className="block text-sm font-medium text-gray-700 mb-1">Loại nhà đầu tư <span className="text-red-500">*</span></label>
          <select
            id="investorType"
            name="investorType"
            required
            value={formData.investorType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">-- Chọn --</option>
            <option value="individual">Cá nhân</option>
            <option value="angel">Angel Investor</option>
            <option value="corporate">Doanh nghiệp</option>
            <option value="fund">Quỹ đầu tư</option>
            <option value="strategic">Đối tác chiến lược</option>
          </select>
        </div>
        <div>
          <label htmlFor="projectInterest" className="block text-sm font-medium text-gray-700 mb-1">Dự án quan tâm <span className="text-red-500">*</span></label>
          <select
            id="projectInterest"
            name="projectInterest"
            required
            value={formData.projectInterest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">-- Chọn --</option>
            <option value="portfolio">Toàn bộ hệ sinh thái</option>
            <option value="ketnoi">Kết Nối Muôn Nơi</option>
            <option value="nhachung">Nhà Chung Muôn Nơi</option>
            <option value="dulich">Đường Muôn Nơi</option>
            <option value="lamviec">Làm Việc Muôn Nơi</option>
            <option value="hoctap">Học Tập Muôn Nơi</option>
            <option value="cuocsong">Cuộc Sống Muôn Nơi</option>
            <option value="nguoiviet">Người Việt Muôn Nơi</option>
            <option value="plays">Plays Muôn Nơi</option>
            <option value="family">Family Muôn Nơi</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="amountRange" className="block text-sm font-medium text-gray-700 mb-1">Mức quan tâm dự kiến</label>
          <select
            id="amountRange"
            name="amountRange"
            value={formData.amountRange}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">-- Chọn --</option>
            <option value="under-10k">Dưới 10.000 USD</option>
            <option value="10k-50k">10.000 – 50.000 USD</option>
            <option value="50k-100k">50.000 – 100.000 USD</option>
            <option value="100k-500k">100.000 – 500.000 USD</option>
            <option value="above-500k">Trên 500.000 USD</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="riskAcknowledged"
            checked={formData.riskAcknowledged}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
          />
          <span className="text-sm text-gray-700">
            Tôi đã đọc và hiểu <a href="/risk/" className="text-brand-600 underline">cảnh báo rủi ro</a>.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="notTransactionAcknowledged"
            checked={formData.notTransactionAcknowledged}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
          />
          <span className="text-sm text-gray-700">
            Tôi hiểu đây chỉ là bày tỏ quan tâm, chưa phải giao dịch đầu tư.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="contactAllowed"
            checked={formData.contactAllowed}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
          />
          <span className="text-sm text-gray-700">
            Tôi đồng ý được đội phụ trách liên hệ qua email / điện thoại.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold text-lg hover:bg-brand-700 transition disabled:opacity-50"
        disabled={!formData.riskAcknowledged || !formData.notTransactionAcknowledged || !formData.contactAllowed}
      >
        Gửi thông tin quan tâm
      </button>
    </form>
  );
}
